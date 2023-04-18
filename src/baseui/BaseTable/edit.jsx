import React, { Component } from 'react'
import { Form, Input } from 'antd'
import './index.css'
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
)
const EditableFormRow = Form.create()(EditableRow)

class EditableCell extends Component {
    state = {
        editing: false
    }
    toggleEdit = () => {
        const editing = !this.state.editing
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus()
            }
        })
    }
    save = e => {
        const { record, handleSave } = this.props
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return
            }
            this.toggleEdit()
            handleSave({ ...record, ...values })
        })
    }
    render() {
        const { editing } = this.state
        const { editable, inputType, dataIndex, title, record, index, handleSave, ...restProps } = this.props
        return (
            <td {...restProps}>
                {
                    editable ? (
                        <EditableContext.Consumer>
                            {
                                form => {
                                    this.form = form;
                                    return editing ? (
                                        <Form.Item style={{ margin: 0 }}>
                                            {
                                                form.getFieldDecorator(dataIndex, {
                                                    rules: [
                                                        {
                                                            require: false,
                                                            message: `${title}不能为空！`
                                                        },
                                                    ],
                                                    initialValue: record[dataIndex],
                                                })(
                                                    <Input
                                                        ref={node => { this.input = node }}
                                                        onPressEnter={this.save}
                                                        onBlur={this.save}
                                                    />
                                                )
                                            }
                                        </Form.Item>
                                    ) : (
                                        <div
                                            className='editable-cell-value-wrap'
                                            style={{ paddingRight: 24 }}
                                            onClick={this.toggleEdit}
                                        >
                                            {restProps.children}
                                        </div>
                                    )
                                }
                            }
                        </EditableContext.Consumer>
                    ) : (
                        restProps.children
                    )
                }
            </td>
        )
    }
}
export { EditableFormRow, EditableCell }