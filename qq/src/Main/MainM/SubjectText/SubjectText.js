/*** Created by Administrator on 2017-09-04.*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SubjectText.css';




class SubjectText extends Component {
    render() {
        return (
            <div className="SubjectText">
                <textarea placeholder="说点什么吧"></textarea>
            </div>
        );
    }
}

export default SubjectText;
