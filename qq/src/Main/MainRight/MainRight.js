/**
 * Created by Administrator on 2017-09-04.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainRight.css';
import Date from './Date/Date'  // 引入Dynamic组件


class MainRight extends Component {
    render() {
        return (
            <div className="MainRight">
              <Date/>
            </div>
        );
    }
}

export default MainRight;
