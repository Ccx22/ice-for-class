import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd';
import style from './index.module.scss'
const { Option } = Select;
class BaseSubmit extends Component {
  componentDidMount() {
    this.props.onRef(this)
  }
  handleSubmit = e => { 
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      this.props.handleSubmit(values)
    })
  }
  getPropsForm = () => this.props.form
  render() {
    const { submitTitle, formSet, labelAlign, addButton, hiddenSubmitBtn } = this.props
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
            {
              typeof selectList === 'undefined' ? null :
                (selectList.map(item => (
                  <Option value={item.value} key={item.key}>
                    {item.label}
                  </Option>
                )))
            }
          </Select>
      }
    }
    const getFields = () => {
      const { getFieldDecorator } = this.props.form
      const formItemLayout = (item) => {
        return {
          labelCol: { span: typeof item.labelCol !== 'undefined' ? item.labelCol : 4 },
          wrapperCol: { span: typeof item.wrapperCol !== 'undefined' ? item.wrapperCol : 20 }
        }
      }
      if (typeof formSet !== 'undefined') {
        return formSet.map(item => (
          <Col
            span={item.col_span ? item.col_span : 24}
            key={item.key}
          >
            <Form.Item
              {...formItemLayout(item)}
              label={item.label ? item.label : `label-${item.key}`}
            >
              {getFieldDecorator(item.fieldValue ? item.fieldValue : `field${item.key}`, {
                rules: item.rules ? item.rules : [],
                initialValue: item.initialValue ? item.initialValue : undefined
              })(
                item.custom ? item.customJsx : fnFormType(item)[item.type]
              )}
            </Form.Item>
          </Col>
        ))
      }
    }
    return (
      <Form
        labelAlign={typeof labelAlign === 'undefined' ? 'right' : labelAlign}
        className='ant-advanced-search-form'
        onSubmit={this.handleSubmit}
      >
        <Row gutter={24}>
          {getFields()}
          {
            !hiddenSubmitBtn ?
              <Col span={24} className={style.btns} style={{ textAlign: 'center' }}>
                <Button type='primary' htmlType='submit'>
                  {submitTitle ? submitTitle : '提交'}
                </Button>
                {typeof addButton === 'undefined' ? null : addButton}
              </Col> : null
          }
        </Row>
      </Form>
    )
  }
}
export default Form.create({ name: 'submit-form' })(BaseSubmit);