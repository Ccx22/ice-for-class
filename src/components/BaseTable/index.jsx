import React, { Component } from 'react'
import { Table } from 'antd'
import style from './index.module.scss'
export default class BaseTable extends Component {
    constructor() {
        super()
        this.state = {
            current: 1
        }

    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`选中索引: ${selectedRowKeys}`, '选中项: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
                name: record.name,
            }),
        };
        return (
            <Table
                bordered
                className={style.wrap}
                rowSelection={!this.props.rowSelection ? null : rowSelection}
                columns={this.props.columns}
                dataSource={this.props.dataSource}
                loading={this.props.loading}
                pagination={!this.props.pagination ? false : {
                    pageSize: 2,
                    showQuickJumper: true,
                    current: this.state.current,
                    total: this.props.dataSource.length,
                    showTotal: total => `共${total}条`,
                    onChange: current => this.setState({ current })
                }}
            />
        )
    }
}
