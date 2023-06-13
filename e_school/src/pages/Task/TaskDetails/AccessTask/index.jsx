import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import Popup from '../../../../components/Popup';
export default class AccessTask extends Component {

    state = {
        taskDetail:{

        },
        //弹窗组件（Popup）需要的对象
        popupObj:{
            title:"领取任务",
            content:"领取任务成功后请在 我的=>我的任务 中查看",
            //回调方法可有可无
            confirmFcs:()=>{
                console.log("点击确认后执行的方法");
            },
            cancelFcs:()=>{
                console.log("点击取消后执行的方法");
            }

        }
    }

    Popup = React.createRef()

    taskDetail = {
        date:"2023-6-23 12:00",
        totalNumber:50,
        remainderNumber:10,
        place:"龙溪国际",
        textarea:"任务详情本厂专业从事医院放射科防护DR机房CT机房X光机房C型臂手术室牙科牙片全景机CBCT机房防护、宠物DR机房防护。"
    }
    
    accessTask = ()=>{
       
        const popup = this.Popup.current
        popup.style.display = "inline-block"
    }

    componentDidMount(){
         //通过网络请求赋值
         this.setState({taskDetail:this.taskDetail})
    }
  render() {
   
    const {taskObj} = this.props
    const {taskDetail} = this.state
    return (
      <div id='AccessTask'>
        <img className='zs' src={taskObj.imgSrc} alt="" />
        <ul className='content'>
            <li>
                <span>任务标题：</span><p>{taskObj.title}</p>
            </li>
            <li>
            <textarea readOnly placeholder={taskDetail.textarea}></textarea>
            </li>
            <li>
                <span>截止时间：</span><p>{taskDetail.date}</p>
            </li>
            <li>
                <span>社区能量值：</span><p>{taskObj.energy}</p>
            </li>
            <li>
                <span>参加人数：</span><p>{taskDetail.remainderNumber+'/'+taskDetail.totalNumber}</p>
            </li>
            <li>
                <Link to="/javaScript:;">
                <span>任务地点：</span>
                <p>{taskDetail.place}</p>
                <img src="/icons/home/-e-定位.png" alt="" />
                <p>{taskObj.distance < 1 ? taskObj.distance * 1000 + 'm' : taskObj.distance + 'km'}</p>
                </Link>
               
            </li>

        </ul>
        <button onClick={this.accessTask}>接取任务</button>
        <Popup Popup={this.Popup} popupObj={this.state.popupObj}/>
      </div>
    )
  }
}
