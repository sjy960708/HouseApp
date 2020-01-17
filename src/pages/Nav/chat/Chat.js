import React, { Component } from 'react'
// 引入UI框架 样式
import { Carousel, Grid, Card, WhiteSpace, Button } from 'antd-mobile'
// 引入css
import './Chat.scss'
export default class Track extends Component {
    render() {
        return (
            <div className="chat">
                <div className="chat_box">
                    <img src={require('../../../assets/imgs/weiliaologo.png')} />
                    <p>您的专属顾问：<label>马冬梅</label></p>
                    <span>专业服务-诚信做人-诚心做事</span>
                    <Button type="primary" inline size="small" className="box-btn">我要聊天</Button>
                </div>
            </div>
        )
    }
}
