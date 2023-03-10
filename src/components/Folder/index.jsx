import React, { PureComponent } from 'react'
import { Button, Icon } from 'antd'
import style from './index.module.scss'
export default class Folder extends PureComponent {
    constructor() {
        super()
        this.state = {
            collapsed: false
        }
    }
    toggleCollapsed = () => {
        let { collapsed } = this.state
        collapsed = !collapsed
        this.setState({
            collapsed
        }, () => {
            this.props.setCollapsed(this.state.collapsed)
        })
    }
    render() {
        return (
            <div className={style.wrap}>
                <Button
                    type='link'
                    onClick={this.toggleCollapsed}
                >
                    <Icon
                        style={{ fontSize: '20px', color: '#000' }}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    />
                </Button>
            </div>
        )
    }
}
