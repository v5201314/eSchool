import React, { Component,Fragment } from 'react'
import { Route, Routes} from 'react-router-dom'

import Tabs  from '../../components/Tabs'
import Home from '../Home'
import Learn from '../Learn'
import Exchange from '../Exchange'
import Task from '../Task'
//我的页面
import MyInfo from '../MyInfo'

export default class MainPages extends Component {
  render() {
    return (
  
         <Fragment>        
                <Tabs/>
                <Routes>
                    <Route path='/home' Component={Home} />
                    <Route path='/learn' Component={Learn} />
                    <Route path='/exchange' Component={Exchange} />
                    <Route path='/task' Component={Task} />
                    <Route path='/myInfo' Component={MyInfo} />

                    <Route path='/' Component={Task}/>

                    </Routes>
                </Fragment>
  
     
    )
  }
}
