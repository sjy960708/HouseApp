import React, { Component } from 'react'
// 引入css
import './Reg.scss'
// 引入UI框架 样式
import { InputItem, WingBlank, WhiteSpace, Button, Flex, Toast } from 'antd-mobile'
// 引入LINK
import { Link } from 'react-router-dom'
// 引入接口
import { regs, getverifys } from '../../api/apis'

export default class Reg extends Component {
    state = {
        user: '',
        pwd: '',
        olduser: '',
        oldupwd: '',
        verify: '',
        obtain: '获取验证码',
        // 禁止使用按钮
        back: ''
    }
    render() {
        let { user, pwd, verify, obtain, back } = this.state
        return (
            <div id="Reg-box" style={{ width: '100%', height: '100%', }}>


                <img style={{ width: '100%', }} src={require('../../assets/imgs/logo.jpg')} />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <InputItem

                        placeholder="请输入手机"
                        style={{ fontSize: '12px' }}
                        clear
                        value={user}
                        onChange={(val) => {
                            this.setState({ user: val })
                        }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xs" />
                    <InputItem
                        style={{ fontSize: '14px' }}
                        placeholder="请输入密码"
                        type="password"
                        clear
                        value={pwd}
                        onChange={(val) => {
                            this.setState({ pwd: val })
                        }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/password.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xs" />
                    <InputItem
                        style={{ fontSize: '14px' }}
                        placeholder="请输入验证码"
                        clear
                        value={verify}
                        onChange={(val) => {
                            this.setState({ verify: val })
                        }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_code.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />

                    </InputItem>
                    <Button type="ghost" inline size="small" className="getcode" disabled={this.state.back} onClick={this.clickGetVerify}>{obtain}</Button>
                    <p class="agree"><input id="check" type="checkbox" value="" /><label className="colorCCC">我已同意<span className="colorlv">《用户服务协议》及《隐私权政策》</span> </label></p>

                    <Button type="primary" className="btn" onClick={this.clickReg}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to='/login'>已有密码</Link>
                        <Link to='/forgetpwd'>忘记密码?</Link>
                    </Flex>
                </WingBlank>
                {/* <label className="mrbuttom">登录/注册即代表同意《看房吧房产用户协议》</label> */}

            </div>
        )
    }

    // 注册 点击  和发送ajax
    clickReg = async () => {
        console.log(111)
        console.log()
        //当前的用户名
        let user = this.state.user
        //当前的密码
        let pwd = this.state.pwd
        if (user == '' && pwd == '') {
            //登录失败
            Toast.fail('请输入手机号和密码', 2);
            return
        }

        //如果当前用户名和密码和上一轮是一样的        
        if (this.state.olduser == user && this.state.oldpwd == pwd) return

        //只要点击了就立马保存值
        this.setState({
            olduser: user,
            oldpwd: pwd
        })
        // 发送ajax请求
        let reg = await regs(user, pwd)
        console.log(reg)

        if (reg.data === 'ok') {
            //登录成功
            window.location.href = '#/login'
        } else {
            //登录失败
            Toast.fail('用户名或密码错误', 2);
        }
    }
    // 获取验证码
    clickGetVerify = async () => {
        console.log(111)
        //当前的密码

        let getverify = await getverifys()
        let num = 60
        let setTime = setInterval(() => {
            if (num < 0) {
                console.log(this)
                clearInterval(setTime)
                this.setState({
                    obtain: '获取验证码',
                    back: ''
                })
                return
            } else {

                this.setState({
                    obtain: num-- + '秒',
                    back: 'disabled'
                })
                console.log(this.state.back)

            }
        }, 1000)
        // console.log(getverify)
        // if (getverify.data == Number) {
        //     console.log(111)
        // } else { console.log(222) }
    }

}
