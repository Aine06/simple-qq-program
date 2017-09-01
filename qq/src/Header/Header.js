/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className="App">
                <div>
                <nav>
                    <ul>
                        <li>个人中心</li>
                        <li>我的主页</li>
                        <li>好友</li>
                        <li>游戏</li>
                        <li>装扮</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
    }
}

export default Header;
