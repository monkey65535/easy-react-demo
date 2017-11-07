import React, {Component} from 'react';
import '../../font/css/font-awesome.css';
import './Header.css';
import {Link} from 'react-router';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            hasLogined:false,
            username:'',
            userId:0
        }
    }
    componentWillMount(){
        const userinfo = window.sessionStorage.getItem('userinfo');
        // console.log(userinfo);
        if(userinfo && userinfo !== ''){
            let {username,userId} = JSON.parse(userinfo);
            this.setState({
                username,
                userId,
                hasLogined:true
            })
        }
    }
    render() {
        //判断登录展示不同内容图标
        const {hasLogined,username} = this.state;
        let logonType = hasLogined ? <Link><i className="fa fa-user-o"></i> {username}</Link> : <Link to={`/login`} className="link"><i className="fa fa-user-circle-o"></i></Link>;

        return (
            <div className={`header-container`}>
                <Link className="left-icon link" to='/'>
                    <i className="fa fa-newspaper-o"></i>
                </Link>
                <p>React News</p>
                <div className="right-icon">
                    {logonType}
                </div>
            </div>

        )
    }
}

export default Header;