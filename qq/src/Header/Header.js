/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logo from  './logo.jpg';



class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-list">
                <nav>
                    <ul>
                        <li><a href=""><img src={logo} alt=""/></a></li>
                        <li><a href="">个人中心</a></li>
                        <li><a href="">我的主页</a></li>
                        <li><a href="">好友</a></li>
                        <li><a href="">游戏</a></li>
                        <li><a href="">装扮</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
    }
}

export default Header;
