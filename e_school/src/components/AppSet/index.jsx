import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route,Routes } from 'react-router-dom'
import ReturnArea from '../ReturnArea'
import SetMiddleware from '../SetMiddleware'
import QuitLogin from './QuitLogin'

import './index.css'
class AppSet extends Component {
    state = {
        //“返回头” 所需要的信息
        returnArea_header: "设置",
      }

      firstRef = React.createRef()

      //退出登录
      quitLogin = (event)=>{
        if(event.target.childNodes[0].innerText==="退出登录"){
            const target = this.firstRef.current
            // obj.timer=setInterval(function(){
            //     //正负不同，取值不同
            //     var step=(target-obj.offsetLeft)/10;
            //     step=step>0?Math.ceil(step):Math.floor(step);
            //     if(obj.offsetLeft==target){
            //         clearInterval(obj.timer);
                    
            //         callback&&callback();
                    
            //     }
            //     obj.style.left=obj.offsetLeft+step+'px';
            // },15)
        }
       
      }

      

    render() {
        return (
            <div id='userSet' onClick={this.quitLogin}>
              <ReturnArea header={this.state.returnArea_header} />
                <Routes>
                    <Route path='/' Component={SetMiddleware} />
                </Routes>
                <QuitLogin firstRef={this.firstRef}/>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return{
            userId:state.userId
        }
    }, {

})(AppSet)
