import React, { Component } from 'react'
import { Tabs, Layout } from 'antd'
import { Route, Switch, withRouter } from 'react-router-dom'
import { routeConfig, defaultTag } from '../../../modules/control/router'
import BreadCrumb from '../../BreadCrumb'
import style from './index.module.scss'
const { TabPane } = Tabs

class Contents extends Component {
    constructor(props) {
        super(props)
        this.newTabIndex = 0;
        this.state = {
            activeKey: "1",
            panes: defaultTag()
        }
    }
    componentDidMount() {
        this.props.onRef(this)
        this.props.history.replace('/control/add-antetype')
    }
    getStatus = (e) => {
        let { panes } = this.state
        let isAddTabs = panes.some(item => item.path === e)
        let newTabs = routeConfig().filter(item => item.path === e)
        if (!isAddTabs) {
            panes[0].closed = true
            panes.push(newTabs[0])
            this.setState({ panes, activeKey: newTabs[0].key })
        } else {
            this.setState({ activeKey: newTabs[0].key })
        }
    }
    getBreadCrumbList = (breadCrumb) => {
        this.breadCrumb.getBreadCrumbList(breadCrumb)
    }
    onChange = activeKey => {
        const { panes } = this.state
        const selectPanes = panes.filter(item => item.key === activeKey)
        const path = selectPanes[0].path
        this.getBreadCrumbList(selectPanes[0])
        this.props.history.replace(path)
        this.setState({ activeKey })
    }
    onEdit = (targetKey, action) => {
        this[action][targetKey]
    }
    remove = targetKey => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey)
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key
            } else {
                activeKey = panes[0].key
            }
        }
        if (panes.length === 1) {
            panes[0].closed = false
        }
        this.setState({ panes, activeKey }, () => {
            let showTabs = panes.filter(item => item.key === this.state.activeKey)
            this.props.history.replace(showTabs[0].path)
        })
    }
    render() {
        return (
            <Layout.Content className={style.wrap}>
                <div className={style.wrap_bread}>
                    <BreadCrumb
                        BreadCrumbList_={this.state.BreadCrumbList_}
                        onRef={(ref) => this.breadCrumb = ref}
                        editTabs={(e) => this.setState({ activeKey: e })}
                    />
                </div>
                <Tabs
                    hideAdd
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    onEdit={this.onEdit}
                    style={{ backgroundColor: '#fff' }}
                >
                    {
                        this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable} forceRender>
                                <div style={{ padding: '54px 0 0 24px' }}>
                                    <div style={{ height: 'calc(100vh - 170px)', overflowY: 'scroll', paddingRight: '24px' }}>
                                        <Switch>
                                            <Route
                                                exact
                                                path={pane.path}
                                                component={pane.component}
                                                key={pane.path}
                                            />
                                        </Switch>
                                    </div>
                                </div>

                            </TabPane>
                        ))
                    }
                </Tabs>
            </Layout.Content>
        )
    }
}
export default withRouter(Contents)