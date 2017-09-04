/**
 * Created by Administrator on 2017-09-04.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainContent.css';
import MainConList from './MainConList/MainConList'  // 引入Dynamic组件





class MainContent extends Component {
    render() {
        return (
            <div className="MainContent">
                <h3>全部动态</h3>
                <ul>
                    <MainConList/>
                </ul>

            </div>
        );
    }
}

export default MainContent;
