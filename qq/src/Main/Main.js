/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import Nav from './Nav/Nav'  // 引入Main组件
import MainLeft from './MainLeft/MainLeft'  // 引入Main组件
import MainM from './MainM/MainM'  // 引入Main组件
import MainRight from './MainRight/MainRight'  // 引入Main组件


class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-list">
                    <Nav/>
                    <div className="main-m">
                        <MainLeft/>
                        <MainM/>
                        <MainRight/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
