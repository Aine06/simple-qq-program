/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainLeft.css';
import Dynamic from './Dynamic/Dynamic'  // ����Dynamic���


class MainLeft extends Component {
    render() {
        return (
            <div className="MainLeft">
                <Dynamic/>
            </div>
        );
    }
}

export default MainLeft;
