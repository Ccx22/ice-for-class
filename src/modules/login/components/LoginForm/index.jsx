import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import style from './index.module.scss'
class NormalLoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.toLogin(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '用户名不能为空!' }],
                    })(
                        <Input
                            allowClear
                            style={{ height: '40px' }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                    })(
                        <Input
                            style={{ height: '40px' }}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className={style.forget}>
                        <Button type='link' >
                            忘记密码?
                        </Button>
                    </div>
                    <Button type="primary" htmlType="submit" style={{ height: '40px' }} className={style.loginbtn}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);


