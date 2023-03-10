import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
class HeaderContent extends PureComponent {
    render() {
        const headerStyle = {
            backgroundColor: '#00377A',
            padding: '0 22px',
            height: '48px',
            display: 'flex',
            alignItems: 'center'
        }
        return (
            <Layout.Header style={headerStyle}>
                header
            </Layout.Header>
        )
    }
}
export default withRouter(HeaderContent)