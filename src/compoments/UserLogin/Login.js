import React, {Component} from 'react';
import {List, InputItem, Toast, Button} from 'antd-mobile';
import Axios from 'axios';
import {hashHistory} from 'react-router';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            passWord: '',
            isSubmit: false
        }
    };

    handleChangeUsername = (value) => {
        this.setState({
            username: value.trim()
        })
    };
    handleChangePassWoed = (value) => {
        this.setState({
            passWord: value.trim()
        })
    };
    handleLogin = () => {
        const {username,passWord,isSubmit} = this.state;
        if(isSubmit) return;
        if(username.trim() === ''){
            Toast.info('用户名不能为空', 1);
            return;
        }
        if(passWord.trim() === ''){
            Toast.info('密码不能为空', 1);
            return;
        }

        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${passWord}&r_userName=undefined&r_password=undefined&r_confirmPassword=undefined`).then((res)=>{
            if(res.data != null){
                Toast.info('注册完成，即将跳转到首页',1);
                console.log(res);
                //  存储数据到sessonStorange
                const {NickUserName,UserId} = res.data;
                window.sessionStorage.setItem('userinfo',JSON.stringify({
                    username:NickUserName,
                    userId:UserId
                }));

                //   路由跳转回首页
                hashHistory.push('/');
            }else {
                Toast.info('账号或密码错误',1);
            }
        },(error)=>{
            Toast.info(error,1);
        })

    };

    render() {
        return (<div className="login-container">
            <List style={{marginTop: '20px'}}>
                <InputItem
                    type="text"
                    placeholder="请输入用户名"
                    onChange={this.handleChangeUsername}
                    value={this.state.username}
                >用户名</InputItem>
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    onChange={this.handleChangePassWoed}
                    value={this.state.passWord}
                >密码</InputItem>
            </List>
            <Button type="primary" style={{marginTop: '30px'}} onClick={this.handleLogin} loading={this.state.isSubmit}>登录</Button>
        </div>)
    }
}

export default Login;
