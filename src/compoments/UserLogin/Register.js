import React, {Component} from 'react';
import {List, InputItem, Toast, Button} from 'antd-mobile';
import {baseUrl} from '../../server/serverConfig';
import Axios from 'axios';
import {hashHistory} from 'react-router';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            passWord: '',
            confirmPassword: '',
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
    handleConfirmPassword = (value) => {
        this.setState({
            confirmPassword: value.trim()
        })
    };
    handleLogin = () => {
        const {username, passWord, isSubmit, confirmPassword} = this.state;
        if (isSubmit) return;
        if (username.trim() === '') {
            Toast.info('用户名不能为空', 1);
            return;
        }
        if (passWord.trim() === '') {
            Toast.info('密码不能为空', 1);
            return;
        }
        if (confirmPassword.trim() !== passWord.trim()) {
            Toast.info('两次输入的密码不一致', 1);
            return;
        }

        this.setState({
            isSubmit:true
        });
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=${username}&r_password=${passWord}&r_confirmPassword=${confirmPassword}`).then((res) => {
            const {data} = res;
            if(data == true){
                Toast.info('注册完成，即将跳转到首页',1);

                //  存储数据到sessonStorange
                window.sessionStorage.setItem('userinfo',JSON.stringify({
                    username,
                    userId:0
                }));

                //   路由跳转回首页
                hashHistory.push('/');
            }else {
                Toast.info('注册失败，请重试',1);
            }
            this.setState({
                isSubmit:false
            });
        },(error)=>{
            Toast(error,1);
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
                <InputItem
                    type="password"
                    placeholder="再次输入密码"
                    onChange={this.handleConfirmPassword}
                    value={this.state.confirmPassword}
                >重复密码</InputItem>
            </List>
            <Button type="primary" style={{marginTop: '30px'}} onClick={this.handleLogin} loading={this.state.isSubmit}>注册</Button>
        </div>)
    }
}

export default Register;
