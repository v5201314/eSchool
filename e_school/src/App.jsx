import React, { Component,Fragment } from 'react'
import { Route, Routes,Navigate} from 'react-router-dom'

import MainPages from './pages/MainPages'

//我的页面
import AppSet from './components/AppSet'
import ChangeInfo from './pages/MyInfo/ChangeInfo'


import LoginAndEnroll from './components/LoginAndEnroll'

//引入 connect用于连接UI组件与redux
import {connect} from 'react-redux'

import TaskDetails from './pages/Task/TaskDetails'

class App extends Component {
    
    render() {
       const {userId} = this.props
       const AlinputRmin = ()=><div><TaskDetails/></div>
        return (
            <Fragment>
                {
                    userId === 0?
                    <LoginAndEnroll/>:
                    <Fragment>
                    <Routes>
                    <Route path='/mainPages/*' Component={MainPages} />

                    <Route path='/appSet/*' Component={AppSet} />
                    <Route path='/changeInfo/*' Component={ChangeInfo} />
                    <Route path='/taskDetails'  element={AlinputRmin()}/>

                    <Route path="*" element={<Navigate to="/mainPages" />} />
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