import React, {Component} from 'react';
import '../../font/css/font-awesome.css';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className={`header-container`}>
                <div className="left-icon link">
                    <i className="fa fa-newspaper-o"></i>
                </div>
                <p>React News</p>
                <div className="right-icon link">
                    <i className="fa fa-user-o"></i>
                </div>
            </div>

        )
    }
}

export default Header;