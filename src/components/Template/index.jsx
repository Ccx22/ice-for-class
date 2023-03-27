import React, { Component } from 'react'
import { Icon, Button } from 'antd'
export default class Divs extends Component {
    render() {
        const styles = (background, height, width) => {
            let bgcolor = background ? background : '#fff'
            let height_ = height ? height : '100%'
            let width_ = width ? width : '100%'
            return {
                wrap: {
                    width: width_,
                    height: height_,
                    background: bgcolor,
                    boxSizing: 'border-box',
                    padding: '20px',
                    marginBottom: '20px'
                },
                title: {
                    width: '100%',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center'
                },
                btn: {
                    paddingLeft: '0'
                },
                content: {
                    width: '100%'
                }
            }
        }
        return (
            <div
                style={
                    styles(
                        this.props.background,
                        this.props.height,
                        this.props.width,
                    ).wrap
                }
            >
                <div style={styles().title}>
                    {
                        this.props.back ?
                            <Button
                                style={styles().btn}
                                type='link'
                                onClick={() => { this.props.onHandleBack(true) }}>
                                <Icon type='left' />
                                {this.props.backTitle ? this.props.backTitle : '返回'}
                            </Button> : null
                    }
                    {this.props.title}
                </div>
                <div style={styles().content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
