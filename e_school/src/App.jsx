import React, { Component,Fragment } from 'react'
import { Route, Routes,Navigate} from 'react-router-dom'

import MainPages from './pages/MainPages'
//我的页面
import AppSet from './components/AppSet'
import ChangeInfo from './pages/MyInfo/ChangeInfo'
//登录与注册
import LoginAndEnroll from './components/LoginAndEnroll'
//任务页面
import TaskDetails from './pages/Task/TaskDetails'

//引入 connect用于连接UI组件与redux
import {connect} from 'react-redux'

import { changeUserIDAction } from './redux/actions/userId'
import { permissionsAxios } from './utils/api'
class App extends Component {

    constructor(props){
        super(props)
        const storedData = JSON.parse(localStorage.getItem('satoken'));
        if(storedData != null){
             //调用封装的axios函数
      permissionsAxios('GET','/user/login',{
        }).then(
          res=>{
            if(res.data.code===0){
              console.log(res);
              this.setState({
                loginMsg:res.data.msg,
                isLoginInfo:0
              })
            }else{
                console.log(res.data.data.id);
              this.props.changeUserIDAction(res.data.data.id)
              localStorage.setItem(res.data.data.tokenName,JSON.stringify(res.data.data.tokenValue))
            }
          }
        )
        } 
        
    }
    
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
    {
        changeUserIDAction
    }
    )(App)