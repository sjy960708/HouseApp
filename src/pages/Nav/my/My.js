import React, { Component } from 'react'
import './My.scss'
// 引入UI框架 样式
import { List, WhiteSpace } from 'antd-mobile'
// 引入LINK
import { Link } from 'react-router-dom'

// 列表
const Item = List.Item


export default class My extends Component {
    state = {
        name: { wallet: 0, discounts: 0, integral: 0 },
        // 图片
        data: [[
            { icon: 'icon-jifen2.png', text: '我的积分' },
            { icon: 'icon-dingyue.png', text: '我的订阅' },
            { icon: 'icon-xing.png', text: '我的房子' },
        ],
        [{ icon: 'icon-chats.png', text: '微聊联系人' },
        { icon: 'icon-jisuan.png', text: '房贷计算器' },
        ]
            ,
        [{ icon: 'icon-jilu.png', text: '看房记录' },
        { icon: 'icon-wenda1.png', text: '我的问答' },]
            ,
        [{ icon: 'icon-shezhi.png', text: '个人设置' },
        { icon: 'icon-fankui.png', text: '意见反馈' }]]
    }

    render() {
        let { name, data } = this.state
        return (
            <div id="My-box" style={{ width: '100%', height: '100 %' }} >
                <div id="My-personage">
                    <div className="personage-top">
                        <img src={require('../../../assets/imgs/logo.jpg')} />
                        <p><Link to='/login' className="acolor">登录</Link> / <Link to='/reg' className="acolor">注册</Link><br /><span>可以与经纪人进行聊天</span></p>
                        <div><img src={require('../../../assets/imgs/shezhi2.png')} /></div>
                    </div>
                    <div className="personage-main">
                        <div className="main-wallet">
                            <p>{name.wallet}</p>
                            <label><span><img src={require('../../../assets/imgs/icon-qianbao.png')} /></span>钱包</label>
                        </div>
                        <div className="main-discounts">
                            <p>{name.discounts}</p>
                            <label><span><img src={require('../../../assets/imgs/icon-youhui.png')} /></span>优惠</label>
                        </div>
                        <div className="main-integral">
                            <p>{name.integral}</p>
                            <label><span><img src={require('../../../assets/imgs/icon-jifen.png')} /></span>积分</label>
                        </div>
                    </div>
                </div>

                <div id="My-main">


                    <div className="myList">
                        {data.map((obj, i) => {
                            return <div key={i}>
                                <WhiteSpace size="xs" />
                                <List >
                                    {obj.map((val, index) => {
                                        return <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            key={index}
                                            className="myList"
                                        >
                                            <img style={{ marginRight: "10px" }} src={require('../../../assets/imgs/' + val.icon)} alt='' />
                                            {val.text}

                                        </Item>
                                    })}
                                </List>
                            </div>
                        })}

                    </div>







                </div>
            </div >
        )
    }
}
