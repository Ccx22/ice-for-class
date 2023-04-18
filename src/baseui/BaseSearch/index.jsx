import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd';
const { Option } = Select;
class BaseSearch extends Component {
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.props.handleSearch(values)
        });
    };
    handleReset = () => {
        this.props.form.resetFields();
    };
    render() {
        const { labelAlign, searchPosition, searchTitle, resetTitle, formSet } = this.props
        const formItemLayout = (item) => {
            return {
                labelCol: { span: typeof item.labelCol !== 'undefined' ? item.labelCol : 4 },
                wrapperCol: { span: typeof item.wrapperCol !== 'undefined' ? item.wrapperCol : 20 }
            }
        }
        const searchBtn = (
            <>
                <Button type="primary" htmlType="submit">
                    {searchTitle ? searchTitle : '搜索'}
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                    {resetTitle ? resetTitle : '清空'}
                </Button>
            </>
        )
        const fnFormType = (item) => {
            const { placeholder, selectList, select_width, input_width } = item
            return {
                input:
                    <Input
                        style={{ width: typeof input_width === 'undefined' ? '100%' : input_width }}
                        placeholder={placeholder ? placeholder : ''}
                    />,
                select:
                    <Select
                        style={{ width: typeof select_width === 'undefined' ? '100%' : select_width }}
                        placeholder={placeholder ? placeholder : ''}
                    >
                        {typeof selectList === 'undefined' ? null :
                            (selectList.map(item => (
                                <Option value={item.value} key={item.key}>
                                    {item.label}
                                </Option>
                            )))
                        }
                    </Select>,
            }
        }
        const getFields = () => {
            const { getFieldDecorator } = this.props.form;
            if (typeof formSet !== 'undefined') {
                return formSet.map(item => (
                    <Col span={item.col_span ? item.col_span : 6} key={item.key} >
                        <Form.Item
                            {...formItemLayout(item)}
                            label={item.label ? item.label : `label-${item.key}`}
                        >
                            {getFieldDecorator(item.fieldValue ? item.fieldValue : `field${item.key}`, {
                                rules: item.rules ? item.rules : [],
                                initialValue: item.initialValue ? item.initialValue : undefined,
                            })(
                                item.custom ? item.customJsx : fnFormType(item)[item.type]
                            )}
                        </Form.Item>
                    </Col >
                ))
            }

        }
        return (
            <Form
                labelAlign={typeof labelAlign === 'undefined' ? 'right' : labelAlign}
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={24}>
                    {getFields()}
                    {
                        !searchPosition ? null : <Col span={6} >{searchBtn}</Col>
                    }
                </Row>
                {searchPosition ? null :
                    <Row gutter={24}>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            {searchBtn}
                        </Col>
                    </Row >
                }
            </Form >

        );
    }
}
export default Form.create({ name: 'search-form' })(BaseSearch);
