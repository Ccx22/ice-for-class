import React, { Component } from 'react'
import { Table } from 'antd'
import { EditableFormRow, EditableCell } from './edit'
import style from './index.module.scss'
import './index.css'
export default class BaseTable extends Component {

  /* 编辑单元格 */
  handleSave = row => {
    const newData = [...this.props.dataSource]
    const index = newData.findIndex(item => row.key === item.key)
    const item = newData[index]
    const checkArray = Object.keys(item)
    const NewEqualOld = checkArray.every(name => {
      return item[name] === row[name]
    })
    if (NewEqualOld) return
    newData.splice(index, 1, {
      ...item,
      ...row
    })
    this.props.handleSave(newData, item)
  }

  render() {
    const { dataSource, loading, rowSelection, size } = this.props
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    }
    const columns = () => {
      if (typeof this.props.columns === 'undefined') {
        return []
      }
      let columns_ = this.props.columns.map(col => {
        if (!col.editable) {
          return col
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: 'text',
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave
          })
        }
      })
      return columns_
    }
    const rowSelection_ = {
      onchange: (selectedRowKeys, selectedRows) => {
        console.log(`选中索引:${selectedRowKeys}`, '选中项:', selectedRows)
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name
      })
    }
    return (
      <Table
        className={style.tablewrap}
        bordered
        components={components}
        columns={columns()}
        rowSelection={!rowSelection ? null : rowSelection_}
        dataSource={dataSource}
        loading={loading}
        size={size || 'default'}
        rowClassName={() => {
          return 'edit-cell-bg editable-row'
        }}
        pagination={!this.props.pagination ? false : {
          pageSize: this.props.pageParams.size,
          showQuickJumper: true,
          current: this.props.pageParams.current,
          total: this.props.pageParams.pageCount,
          showTotal: total => `共${total}条`,
          onChange: current => this.props.changePage(current)
        }}
      />
    )
  }
}
