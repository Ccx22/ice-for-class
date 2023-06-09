import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import SiderContent from './sider'
import HeaderContent from './header'
import ContainerContent from './content'
import Folder from '../Folder'
import { Layout } from 'antd'
import style from './index.module.scss'
class Layouts extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: false
        }
    }

    setRoute = (e, breadCrumb) => {
        this.props.history.push(e)
        this.TabsNav.getStatus(e,breadCrumb)
        this.TabsNav.getBreadCrumbList(breadCrumb)
    }
    render() {
        const { isCollapsed } = this.state
        return (
            <Layout className={style.wrap}>
                <HeaderContent />
                <Layout className={style.wrap_layout}>
                    <Layout.Sider
                        className={style.wrap_layout_sider}
                        collapsed={isCollapsed}
                        style={{ backgroundColor: '#fff' }}
                    >
                        <SiderContent setRoute={this.setRoute} />
                        <Folder setCollapsed={(e) => this.setState({ isCollapsed: e })} />
                    </Layout.Sider>
                    <ContainerContent onRef={(ref) => this.TabsNav = ref} />
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Layouts)


