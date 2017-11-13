import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Detail from './Detail';
import TalkList from './TalkList';

import './pageDetail.css';

class PageDetail extends Component {
    constructor(){
        super();
    }

    render() {
        const {uniquekey} = this.props.params;
        return (
            <div>
                <Header></Header>
                <div className="detail-container" style={{marginTop: '40px'}}>
                    {/*{this.props.params.uniquekey}*/}
                    <Detail uniquekey={uniquekey}></Detail>
                    <TalkList uniquekey={uniquekey}></TalkList>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default PageDetail;