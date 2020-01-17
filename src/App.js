import React, { Component } from 'react'
import { } from 'antd-mobile'
import Nav from './pages/Nav/Nav'
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
// import My from './pages/Nav/my/My'
import Maps from './pages/map/Map'
import Search from './pages/Search/Search'
import Citylist from './pages/citylist/Citylist'
import Forgetpwd from './pages/Reg/Forgetpwd'
import { HashRouter, Switch, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', }}>

                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        {/* <Route path='/my' component={My}></Route> */}
                        <Route path='/maps' component={Maps}></Route>
                        <Route path='/citylist' component={Citylist}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/forgetpwd' component={Forgetpwd}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
