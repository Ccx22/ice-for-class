import React, { Component } from 'react'
import { BaseSubmit, BaseTemplet } from '@/baseui'
export default class AntetypeList extends Component {
  constructor() {
    super()
    this.formSet = [
      {
        key: '1',
        type: 'input',
        label: '姓名',
        fieldValue: 'name',
        placeholder: '请输入',
        initialValue: '初始值',
        labelCol: 3,
        wrapperCol: 21,
        rules: [
          {
            required: true,
            message: '输入点什么呗!',
          }
        ]
      },
      {
        key: '2',
        type: 'select',
        label: '性别',
        fieldValue: 'sex',
        placeholder: '请选择',
        initialValue: 'lucy',
        labelCol: 3,
        wrapperCol: 21,
        rules: [
          {
            required: true,
            message: '总得选一个吧!',
          }
        ],
        selectList: [
          {
            key: '1',
            value: 'jack',
            label: '夹克'
          },
          {
            key: '2',
            value: 'lucy',
            label: '路丝'
          }
        ],
      },
    ]
  }
  handleSubmit = (value) => {
    alert(`提交表单${JSON.stringify(value)}`)
  }

  render() {
    return (
      <div>
        <BaseTemplet title='提交表单'>
          <BaseSubmit
            onRef={ref => this.submit = ref}
            submitTitle="下一步"
            labelAlign='left'
            formSet={this.formSet}
            handleSubmit={this.handleSubmit}
          />
        </BaseTemplet>
      </div>
    )
  }
}
