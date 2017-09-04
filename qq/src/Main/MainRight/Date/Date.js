/**
 * Created by Administrator on 2017-09-04.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Date.css';
//import Dynamic from './Dynamic/Dynamic'  // ����Dynamic���


class Date extends Component {
    render() {
        return (
            <div className="Date">
                <div className="DateList">
                    <span>周一</span>
                    <span>09.04</span>
                </div>
                <div className="SignIn">
                    <a href="">签到</a>
                </div>
                <div className="DateBottom">
                    <span>18</span>
                    <span>Days</span>
                </div>
            </div>
        );
    }
}

export default Date;
