import React, { Component } from 'react'
// 引入css
import './Main.scss'
// 引入UI框架 样式
import { Carousel, Grid, Card, WhiteSpace, WingBlank } from 'antd-mobile'
// 引入ajax
import { getlist, IP } from '../../../api/apis'

// 引入组件
// 引入图片
import imgLogo from '../../../assets/imgs/logo.jpg'
import imglogobg from '../../../assets/imgs/logobg.jpg'
import logodenghuo from '../../../assets/imgs/logodenghuo.jpg'

const data = [{ icon: require('../../../assets/imgs/icon-xinfang.png'), text: '新房' },
{ icon: require('../../../assets/imgs/icon-ershou.png'), text: '二手房' },
{ icon: require('../../../assets/imgs/icon-zufang.png'), text: '租房' },
{ icon: require('../../../assets/imgs/icon-lou.png'), text: '写字楼' },
{ icon: require('../../../assets/imgs/icon-liaotian.png'), text: '卖房' },
{ icon: require('../../../assets/imgs/icon-haiwai.png'), text: '海外房产' },
{ icon: require('../../../assets/imgs/icon-xiaoqu.png'), text: '小区房价' },
{ icon: require('../../../assets/imgs/icon-wenda.png'), text: '问答' }]

const data1 = [{ icon: require('../../../assets/imgs/icon-daikuan.png'), text: '我要贷款' },
{ icon: require('../../../assets/imgs/icon-jisuan.png'), text: '房贷计算' },
{ icon: require('../../../assets/imgs/icon-zhishi.png'), text: '知识' },
{ icon: require('../../../assets/imgs/icon-saoyisao.png'), text: '扫一扫' },
]


export default class Track extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        // 宫格

        // 猜你喜欢列表
        getLikeList: [],
        // 高德
        mycityinfo: '定位中'
    }
    // 生命周期钩子
    componentDidMount() {
        // 高德地图获取当前城市信息

        let _this = this
        // console.log(_this)
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        // console.log(citysearch)
        // 自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    // var citybounds = result.bounds;
                    setTimeout(() => {
                        _this.setState({
                            mycityinfo: cityinfo
                        })
                    }, 2000)

                    // console.log(_this.state)
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    // //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log('定位失败!', result.info)
            }
        });
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [imgLogo, imglogobg, logodenghuo],
            });
        }, 100);
        // 发送ajax请求
        getlist().then(res => {
            // console.log(res)
            this.setState({
                getLikeList: res.data
            })
            // console.log(this.state.getLikeList)
        })
    }
    // 即将销毁组件 生命周期钩子    销毁过后不管什么方式的参数都直接return 防止内存泄漏
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        let { getLikeList, mycityinfo } = this.state
        return (
            // 头部列表
            <div id="main-box">
                <div className="box-head">
                    <div className="head-top">
                        <p onClick={this.onclickmap.bind(this, '#/citylist')}> {mycityinfo} ▽</p>
                        <div className="classDiv" onClick={this.onclickmap.bind(this, '#/search')}>
                            <img src={require('../../../assets/imgs/icon-searcha.png')} alt='' />
                            <label>输入小区或商圈开始找房咯~</label>
                        </div>
                        <div className="map-img">

                            <img src={require('../../../assets/imgs/icon-mapib.png')} alt='' onClick={this.onclickmap.bind(this, '#/maps')} />
                        </div>
                    </div>
                    <div className="head-banner">
                        {/* 轮播 */}
                        <Carousel
                            autoplay
                            infinite

                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    {/* 宫格 列表 */}
                    <Grid data={data} hasLine={false} />
                    {/* 卡片   介绍 */}
                    <WingBlank><div className='fontS14px'><span>房产全百科</span>专业的买房攻略</div></WingBlank>



                    <Grid data={data1} hasLine={false} className="mrtop20" />



                </div>
                <WhiteSpace size="sm" />
                <div className="productList">
                    {/* 卡片   猜你喜欢 */}
                    <Card >
                        <Card.Header
                            title={<div className='font14'>猜你喜欢</div>}
                        />
                        <Card.Body >
                            {getLikeList.map((obj, i) =>
                                <div className="listsbox" key={i}>
                                    <img src={IP + obj.imgs} alt="" />
                                    <div className="listsbox_center">
                                        <h4>{obj.name}</h4>
                                        <span className="housing">{obj.area} &nbsp; <label>{obj.range}</label></span>

                                        <span className="area">{obj.type}<label>{obj.point}</label></span>
                                    </div>
                                    <p>{obj.price}/平</p>
                                </div>
                            )}

                        </Card.Body>
                    </Card>
                </div>
                <div></div>
            </div>


        )
    }
    // 事件
    onclickmap(href) {
        window.location.href = href
    }
    // 卸载轮播  卸载生命周期钩子
    // componentWillUnmount() {
    //     clearInterval(Carousel)
    // }
}
