import React, { Component,Fragment } from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'

import Tabs from './components/Tabs'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Exchange from './pages/Exchange'
import Task from './pages/Task'
import MyInfo from './pages/MyInfo'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Tabs />
                <Routes>
                    <Route path='/home' Component={Home} />
                    <Route path='/learn' Component={Learn} />
                    <Route path='/exchange' Component={Exchange} />
                    <Route path='/task' Component={Task} />
                    <Route path='/myInfo' Component={MyInfo} />

                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>

               
            </Fragment>
        )
    }
}
