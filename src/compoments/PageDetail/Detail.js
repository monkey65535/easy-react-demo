import React, {Component} from 'react';
import Axios from 'axios';
class Detail extends Component {
    constructor(){
        super();
        this.state = {
            detailInfo:{
                pagecontent:''
            },
            hasDetail:false
        }
    }
    componentWillMount(){
        const {uniquekey} = this.props;
        console.log(uniquekey);
        Axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`).then((res)=>{
            const {data} = res;
            console.log(data);
            if(data){
                const {pagecontent} = data;
                this.setState({
                    detailInfo:{
                        pagecontent
                    },
                    hasDetail:true
                })
            }
        })
    }
    render() {
        let news = this.state.hasDetail ? '' : '暂未获取到数据';
        const {pagecontent} = this.state.detailInfo;
        return (
            <div style={{padding:'10px'}}>
                {news}
                <div className="pageContent" dangerouslySetInnerHTML={{__html:pagecontent}}></div>
            </div>

        )
    }
}

export default Detail;