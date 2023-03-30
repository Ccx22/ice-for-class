import React, { PureComponent } from 'react'
import style from './index.module.scss'
import LoginForm from './components/LoginForm'
import { message } from 'antd'
import { withRouter } from 'react-router-dom'
class Login extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }
  login = (req) => {
    console.log('登录请求参数', req)
    message.loading('登录中...', 2)
      .then(() => this.props.history.push('/control'))
      .then(() => message.success('登录成功!', 2))
  }
  render() {
    return (
      <div className={style.wrap}>
        <div className={style.wrap_title}>
          <div>Hi,你好！</div>
          <div> 欢迎进入协同办公平台</div>
          <div> Welcome to the collaborative office platform of the centralized operation Product Department</div>
        </div>
        <div className={style.wrap_login}>
          <div className={style.wrap_login_title}>
            账号密码登录
          </div>
          <div>
            <LoginForm toLogin={this.login} />
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)