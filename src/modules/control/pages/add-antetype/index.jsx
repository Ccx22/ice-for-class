import React, { Component } from 'react'
import {  Input } from 'antd';
import Template from '../../../../components/Template'
import BaseTable from '../../../../components/BaseTable'
import SearchForm from '../../../../components/SearchForm'
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
    this.columns = [
      {
        title: '序号',
        dataIndex: 'key',
        align: 'center',
        width: 80
      },
      {
        title: '名称',
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
    this.formSet = [
      {
        key: '1',
        type: 'input',
        label: '姓名',
        fieldValue: 'name',
        placeholder: '请输入',
        initialValue: '初始值',
        col_span: 6,
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
        col_span: 6,
        select_width: '120px',
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
      {
        key: '3',
        custom: true,
        label:'自定义',
        fieldValue: 'custom',
        initialValue:'123',
        col_span: 6,
        rules: [
          {
            required: true,
            message: '输入点什么呗!',
          }
        ],
        customJsx: (
          <Input placeholder='222' />
        )
      }
    ]
  }
  render() {
    return (
      <div>
        <Template title='搜索表单'>
          <SearchForm
            searchPosition={0}
            searchTitle='查询'
            resetTitle='重置'
            formSet={this.formSet}
          />
        </Template>
        <Template title='标题'>
          <BaseTable
            dataSource={this.state.dataSource}
            loading={this.state.loading}
            columns={this.columns}
            pagination
            rowSelection
          />
        </Template>
      </div>
    )
  }
}
