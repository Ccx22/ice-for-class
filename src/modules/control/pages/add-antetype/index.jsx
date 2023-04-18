import React, { Component } from 'react'
import { BaseTemplet, BaseSearch, BaseTable } from '@/baseui'
export default class AddAntetype extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [
        {
          key: '1',
          name: '小红',
          address: '北京'
        },
        {
          key: '2',
          name: '小岚',
          address: '上海'
        },
        {
          key: '3',
          name: '小黑',
          address: '天津'
        }
      ],
      loading: false
    }
    this.formSet = [
      {
        key: '1',
        type: 'input',
        label: '姓名',
        fieldValue: 'name',
        placeholder: '请输入',
        initialValue: '初始值',
        labelCol: 5,
        wrapperCol: 19,
        input_width: '100%',
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
        labelCol: 5,
        wrapperCol: 19,
        select_width: '100%',
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
    this.columns = [
      {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        width: 80
      },
      {
        title: '名称',
        editable: true,//可编辑
        dataIndex: 'name',
        align: 'center',
        width: 150
      },
      {
        title: '地址',
        dataIndex: 'address',
        align: 'center',
        width: 150
      }
    ]

  }
  handleSearch = (value) => {
    alert(`搜索字段：${JSON.stringify(value)}`)
  }
  handleSave = (newData) => {
    this.setState({ dataSource: newData })
  }
  render() {
    return (
      <div>
        <BaseTemplet title='条件查询'>
          <BaseSearch
            searchPosition={0}
            searchTitle='查询'
            resetTitle='重置'
            labelAlign='left'
            formSet={this.formSet}
            handleSearch={this.handleSearch}
          />
        </BaseTemplet>
        <BaseTemplet title='查询结果'>
          <BaseTable
            dataSource={this.state.dataSource}
            columns={this.columns}
            loading={this.state.loading}
            handleSave={this.handleSave}
          />
        </BaseTemplet>
      </div>
    )
  }
}
