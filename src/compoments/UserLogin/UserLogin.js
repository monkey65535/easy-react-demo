import React, {Component} from 'react';
import LoginWrapper from './Login';
import Register from  './Register';
import '../../font/css/font-awesome.css';
import {Link} from 'react-router';

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge text={''}>登录</Badge> },
    { title: <Badge text={''}>注册</Badge> }
];

class UserLogin extends Component {
    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <LoginWrapper></LoginWrapper>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <Register></Register>
                    </div>
                </Tabs>
                <WhiteSpace></WhiteSpace>
                <Link to='/' className="link" style={{color:'#999',textAlign:'center',marginTop:'20px',display:'block',fontSize:'12px'}}>回到首页</Link>
            </div>
        )
    }
}

export default UserLogin;
