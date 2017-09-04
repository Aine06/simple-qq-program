/**
 * Created by Administrator on 2017-09-01.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dynamic.css';


class Dynamic extends Component {
    render() {
        return (
            <div className="Dynamic">
                <ul>
                    <li><a href="">好友动态</a></li>
                    <li><a href="">特别关心</a></li>
                    <li><a href="">与我相关</a></li>
                    <li><a href="">那年今日</a></li>
                    <li><a href="">腾讯课堂</a></li>
                    <li><a href="">游戏应用</a></li>
                    <li><a href="">我的收藏</a></li>
                </ul>
            </div>
        );
    }
}

export default Dynamic;
