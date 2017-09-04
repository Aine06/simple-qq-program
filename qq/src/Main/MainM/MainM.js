/**
 * Created by Administrator on 2017-09-04.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainM.css';
import SubjectText from './SubjectText/SubjectText.js'  // 引入Dynamic组件
import MainContent from './MainContent/MainContent.js'  // 引入Dynamic组件

class MainM extends Component {
    render() {
        return (
            <div className="MainM">
                <SubjectText/>
                <MainContent/>
            </div>
        );
    }
}

export default MainM;
