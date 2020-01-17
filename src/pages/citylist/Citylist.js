import React, { Component } from 'react'
import './Citylist.scss'
// 引入UI框架 样式
import { SearchBar, Grid } from 'antd-mobile'
// 引入json
import Citylists from '../../json/Citylist.json'

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));
export default class Citylist extends Component {
    state = {
        allcitiess: []
    }
    render() {
        return (
            <div id="search-box" style={{ height: '100%' }}>
                <div className="box-top">
                    <img src={require('../../assets/imgs/icon-jiantou.png')} alt='' />
                    <label>选择城市</label>
                </div>
                <div className="box-main">
                    <SearchBar placeholder="请输入城市名进行搜索" maxLength={8} />
                    <div className="lately_box">
                        <label>最近访问</label>
                        <div className="lately">
                            <div>成都</div>
                            <div>成都</div>
                            <div>成都</div>

                        </div>
                    </div>
                    <div className="lately_box">
                        <label>热门城市</label>
                        <div className="lately">
                            <div>北京</div>
                            <div>上海</div>
                            <div>广州</div>
                        </div>
                    </div>
                    <div className="all_box">
                        <label>全部城市(按首字母排序)</label>
                        <div className="allcities">

                            {Citylists.map((city) => {
                                return <div style={{ display: 'felx', flexDirection: 'column' }}>
                                    <h4>{city.title}</h4>
                                    <div style={{}}>
                                        {city.child.map((val) => {
                                            return <p style={{}}>{val}</p>
                                        })}
                                    </div>




                                </div>

                            })}
                        </div>
                        <div className="right_cities">
                            {Citylists.map((obj) => {
                                return <p >{obj.title}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
