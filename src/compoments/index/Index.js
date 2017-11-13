import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Lists from  '../Lists/Lists';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge text={''}>头条</Badge> },
    { title: <Badge text={''}>社会</Badge> },
    { title: <Badge text={''}>国内</Badge> },
    { title: <Badge text={''}>国际</Badge> },
    { title: <Badge text={''}>娱乐</Badge> }
];

class Index extends Component {
    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     autoplay: true
        // };
        return (
            <div className={`index-container`}>
                <Header/>
                <div className="top-containert" style={{marginTop:'40px'}}>

                    <Tabs tabs={tabs}
                          initialPage={0}
                    >
                        <Lists type='top' count={20}></Lists>
                        <Lists type='shehui' count={20}></Lists>
                        <Lists type='guonei' count={20}></Lists>
                        <Lists type='guoji' count={20}></Lists>
                        <Lists type='yule' count={20}></Lists>
                    </Tabs>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Index;