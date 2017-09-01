/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';


class Nav extends Component {
    render() {
        return (
            <div className="main-nav">
                    <nav>
                        <ul>
                            <li>主页</li>
                            <li>日志</li>
                            <li>留言</li>
                            <li>相册</li>
                            <li>说说</li>
                            <li>个人档</li>
                        </ul>
                    </nav>
            </div>
        );
    }
}

export default Nav;
