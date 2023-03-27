import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import Root from '../Root'
export default class CanvasRender extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Button type='primary'>11</Button>
                    <Button type='primary'>11</Button>
                    <Button type='primary'>11</Button>
                </div>
                <div style={{ marginTop: '20px', background: '#eee' }}>
                    <Root />
                </div>
            </Fragment>
        )
    }
}
