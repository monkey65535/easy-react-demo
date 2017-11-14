import React, {Component} from 'react';
import Axios from 'axios';
import './talkList.css';
import CommitTalk from './CommitTalk';

class TalkList extends Component {
    constructor(){
        super();
        this.state = {
            talkAboutList:[]
        }
    }
    // 获取评论数据
    componentWillMount(){
        const {uniquekey} = this.props;
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${uniquekey}`).then((res)=>{
            const {data} = res;
            this.setState({
                talkAboutList:data
            })
        });
    }

    // 处理回复评论
    handleCommitTalk = (commitInfo)=>{
        commitInfo = commitInfo.trim();
        if(!commitInfo) return;
        const {uniquekey} = this.props;
        // 获取登录信息
        let userInfo = window.sessionStorage.getItem('userinfo');
        if(!userInfo){
            alert('请先登录');
            return;
        }
        userInfo = JSON.parse(userInfo);
        const {userId} = userInfo;
        // {"username":"111","userId":97}
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${userId}&uniquekey=${uniquekey}&commnet=${commitInfo}`).then((res)=>{
            if(res.data){
                let commitObj = {
                    UserName:userInfo.username,
                    datetime:'2017-11-14',
                    Comments:commitInfo
                }
                let newData = this.state.talkAboutList.slice();
                newData.push(commitObj);
                this.setState({
                    talkAboutList:newData
                });
            }
        })
    }
    // 处理处理收藏文章
    handleLoveArt = () => {
        const {uniquekey} = this.props;
        // 获取登录信息
        let userInfo = window.sessionStorage.getItem('userinfo');
        if(!userInfo){
            alert('请先登录');
            return;
        }
        userInfo = JSON.parse(userInfo);
        const {userId} = userInfo;
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${userId}&uniquekey=${uniquekey}`).then((res)=>{
           if(res.data){
               alert('收藏成功');
           }
        });
    }

    render() {
        const {talkAboutList} = this.state;
        let news = talkAboutList.length > 0 ? talkAboutList.map((elt,i)=>{
            const {UserName,datetime,Comments} = elt;
            return (
                <div className="talklist-item" key={i}>
                    <div className="talk-list-header">
                        <div className="talk-name">{UserName}</div>
                        <div className="talk-time">{datetime}</div>
                    </div>
                    <div className="talklist-content">
                        {Comments}
                    </div>
                </div>
            )
        }) : '暂无评论'
        return (
            <div>
                {/*{this.props.uniquekey}*/}
                {news}
                <CommitTalk uniquekey={this.props.uniquekey} handleCommitTalk={this.handleCommitTalk} hadnleLoveAct={this.handleLoveArt}></CommitTalk>
            </div>
        )
    }
}

export default TalkList;