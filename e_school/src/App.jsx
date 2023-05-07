import React, { Component,Fragment } from 'react'
import { Route, Routes,Navigate} from 'react-router-dom'

import Tabs from './components/Tabs'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Exchange from './pages/Exchange'
import Task from './pages/Task'
//我的页面
import MyInfo from './pages/MyInfo'
import AppSet from './components/AppSet'
import ChangeInfo from './pages/MyInfo/ChangeInfo'

import LoginAndEnroll from './components/LoginAndEnroll'

//引入 connect用于连接UI组件与redux
import {connect} from 'react-redux'

class App extends Component {
    state = {
        //是否打开设置
        isSet:0,
    }
    
    render() {
       const {userId} = this.props
        return (
            <Fragment>
                {
                    userId === 0?
                    <LoginAndEnroll/>:
                    <Fragment>
                    <Tabs />
                <Routes>
                    <Route path='/home' Component={Home} />
                    <Route path='/learn' Component={Learn} />
                    <Route path='/exchange' Component={Exchange} />
                    <Route path='/task' Component={Task} />
                    <Route path='/myInfo' Component={MyInfo} />
                    <Route path='/appSet' Component={AppSet} />
                    <Route path='/changeInfo' Component={ChangeInfo} />

                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
                </Fragment>
                }
                
               
            </Fragment>
        )
    }
}

//简写方法
export default  connect(
    state => ({
      userId:state.userId,
    }),
    )(App)