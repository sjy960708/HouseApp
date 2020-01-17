import React, { Component } from 'react'
// import { routerRedux } from 'dva/router';
import './Nav.scss'
// 引入UI
import { TabBar } from 'antd-mobile';
// 引入其他组件

import Chat from './chat/Chat'
import My from './my/My'
import Track from './track/Track'
import Main from './main/Main'

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',  // 默认选中
            iconlists: [{ titles: '首页', key: 'main', icon: 'icon-home', icons: 'icom-homes' },
            { titles: '微聊', key: 'chat', icon: 'icon-chats', icons: 'icon-chat' },
            { titles: '足迹', key: 'track', icon: 'icon-tracks', icons: 'icon-track' },
            { titles: '我的', key: 'my', icon: 'icon-my', icons: 'icon-mys' }]
        };
    }

    renderContent() {
        switch (this.state.selectedTab) {
            case 'main': return <Main />
            case 'chat': return <Chat />
            case 'track': return <Track />
            case 'my': return <My />
        }

    }

    render() {

        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#000" //未选中字体
                    tintColor="#33A3F4"         //选中字体颜色
                    barTintColor="white"        //底栏背景色

                >

                    {this.state.iconlists.map(obj =>
                        <TabBar.Item
                            title={obj.titles}
                            key={obj.key}      // 唯一标识
                            // 未选中图标
                            icon={<div style={{
                                width: '26px',
                                height: '26px',
                                background: `url(${require('../../assets/imgs/' + obj.icon + '.png')}) center center /  21px 21px no-repeat`
                            }}
                            />

                            }
                            // 选中图标
                            selectedIcon={<div style={{
                                width: '26px',
                                height: '26px',
                                background: `url(${require('../../assets/imgs/' + obj.icons + '.png')}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }

                            selected={this.state.selectedTab === obj.key}
                            // 微标识
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: obj.key,
                                });
                            }}

                        >
                            {this.renderContent()}

                        </TabBar.Item>
                    )}






                </TabBar>
            </div>
        );
    }
}


