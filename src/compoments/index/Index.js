import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from  '../Footer/Footer';
import {Row,Col} from 'antd';
import Axios from 'axios';
class Index extends Component {
    render() {
        return (
            <div className={`index-container`}>
                <Header/>
                <Row>
                    <Col span={24}>page container</Col>
                </Row>
                <Footer/>
            </div>

        )
    }
}

export default Index;