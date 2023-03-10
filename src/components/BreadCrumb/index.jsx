import React, { Component, Fragment } from 'react'
import { Breadcrumb } from 'antd'
import { menuConfig } from '../../modules/control/router'
import { withRouter } from 'react-router-dom'
const { menuList } = menuConfig()
class BreadCrumbs extends Component {
    constructor() {
        super()
        this.state = {
            breadCrumbList: menuList,
            breadCrumbList_: {},
            isDefault: true
        }
    }
    componentDidMount() {
        this.props.onRef(this)
    }
    getBreadCrumbList = (breadCrumb) => {
        this.setState({
            isDefault: false,
            breadCrumbList_: breadCrumb
        })
    }
    render() {
        const { breadCrumbList, isDefault } = this.state
        const dealBread = (e) => {
            return (
                e.isSub ?
                    <Breadcrumb.Item onClick={() => jump(e.path, e.key)}>
                        {e.title}
                    </Breadcrumb.Item>
                    :
                    <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={() => jump(e.path, e.key)} >
                        {e.title}
                    </Breadcrumb.Item>
            )
        }
        const dealBread_ = () => {
            // const { breadcrumb, title, path, key } = this.state.breadCrumbList_
            return (
                <div>
                    123
                </div>
            )
            // const RENDER_JSX = breadcrumb.map((item, index) => {
            //     if (item === title) {
            //         return (
            //             <Breadcrumb.Item key={index + 2} style={{ cursor: 'pointer' }} onClick={() => jump(path, key)}>
            //                 {item}
            //             </Breadcrumb.Item>
            //         )
            //     } else {
            //         return (
            //             <Breadcrumb.Item key={index + 2}>
            //                 {item}
            //             </Breadcrumb.Item>
            //         )
            //     }
            // })
            // return RENDER_JSX
        }
        const jump = (path, key) => {
            if (typeof path !== 'undefined') {
                this.props.history.push(path)
                this.props.editTabs(key)
            }
        }
        return (
            <Fragment>
                {
                    isDefault ?
                        <Breadcrumb separator=">">
                            {dealBread(breadCrumbList[0])}
                            {breadCrumbList[0].isSub ? dealBread(breadCrumbList[0].children[0]) : null}
                            {breadCrumbList[0].children[0].isSub ? dealBread(breadCrumbList[0].children[0].children[0]) : null}
                        </Breadcrumb> :
                        <BreadCrumbs separator=">">
                            {dealBread_()}
                        </BreadCrumbs>
                }
            </Fragment>
        )
    }
}

export default withRouter(BreadCrumbs)