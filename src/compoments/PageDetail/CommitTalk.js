import React, { Component } from 'react';
import {Button,notification} from 'antd';
class CommitTalk extends Component {
    constructor(){
        super();
        this.state = {
            inputInfo:''
        }
    }
    handleInputText = (ev) => {
        this.setState({
            inputInfo:ev.target.value
        })
    }
    handleSubmit = ()=>{
        const {inputInfo} = this.state;
        if(!inputInfo){
            alert('请填写提交内容');
            return;
        }
        this.props.handleCommitTalk(inputInfo);
        this.setState({
            inputInfo:''
        })
    }
    hendleLove = ()=>{
        this.props.hadnleLoveAct();
    }
    render() {
        return (
            <div>
                <div className="commit-container">
                    <div className="commit-header" style={{textAlign:'center',fontSize:'12px'}}>您的评论：</div>
                    <div className="text-container" style={{padding:'10px'}}>
                        <textarea style={{width:'100%',border:'1px solid #eee',padding:'10px',fontSize:'12px'}} height='60px' onInput={this.handleInputText} value={this.state.inputInfo}></textarea>
                    </div>
                    <div className="button-container">
                        <Button type="primary" htmlType="submit" className="sub-button" onClick={this.handleSubmit}>提交评论</Button>
                        <Button type="primary" htmlType="button" className="sub-button" onClick={this.hendleLove}>收藏文章</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommitTalk;