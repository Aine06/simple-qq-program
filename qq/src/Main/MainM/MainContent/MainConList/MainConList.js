/**
 * Created by Administrator on 2017-09-04.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainConList.css';
import top from  './top.jpg';






class MainConList extends Component {
    render() {
        return (
            <li className="MainConList">
                <div className="mainConC">
                    <div className="mainConImg">
                        <img src={top} alt=""/>
                    </div>
                    <div className="mainConList">
                        <label>我的名字</label><br/>
                        <span>08:00</span>
                        <a>世界上没有过不去的，只有墨守成规。</a>
                    </div>
                </div>
                <div className="mainConText">
                    啦啦啦啦，状态吧！
                </div>

            </li>
        );
    }
}

export default MainConList;
