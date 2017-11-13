import React, {Component} from 'react';
import Axios from 'axios';
import './talkList.css';


class TalkList extends Component {
    constructor(){
        super();
        this.state = {
            talkAboutList:[]
        }
    }
    componentWillMount(){
        const {uniquekey} = this.props;
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${uniquekey}`).then((res)=>{
            const {data} = res;
            this.setState({
                talkAboutList:data
            })
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
                {this.props.uniquekey}
                {news}
            </div>

        )
    }
}

export default TalkList;