import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Lists from  '../Lists/Lists';

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
                <Lists type='top' count={20} style={{marginTop:'20px'}}></Lists>
                <Footer/>
            </div>

        )
    }
}

export default Index;