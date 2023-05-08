import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './index.css'


export default class Tabs extends Component {

  //selectedIndex 被选中的标签的索引
  state = { selectedIndex: 0 }

  //标签未选中icon的路径数组
  tabsImgFalse = [
    "/icons/tabs_false/未选中-首页.png",
    "/icons/tabs_false/形状 32.png",
    "/icons/tabs_false/形状 34.png",
    "/icons/tabs_false/形状 36.png",
    "/icons/tabs_false/形状 38.png"
  ]
  //标签选中icon的路径数组
  tabsImgTrue = [
    "/icons/tabs_true/选中色-首页.png",
    "/icons/tabs_true/形状 33.png",
    "/icons/tabs_true/形状 35.png",
    "/icons/tabs_true/形状 37.png",
    "/icons/tabs_true/形状 39.png"
  ]

  //点击标签后触发
  selected = (event) => {
    const targetKey = event.currentTarget.dataset["index"]
    this.setState({ selectedIndex: targetKey * 1 })
  }

  render() {
    const { selectedIndex } = this.state
    const { tabsImgTrue, tabsImgFalse } = this
    return (
      <div id='tabs' ref={c => this.TabsRef = c}>
        <Link replace to='/mainPages/home'>
          <div className={['label', selectedIndex === 0 ? 'selected' : 'unchecked'].join(' ')} data-index='0' onClick={this.selected}><img src={selectedIndex === 0 ? tabsImgTrue[0] : tabsImgFalse[0]} alt="首页" /><span>首页</span></div>
        </Link>
        <Link replace to='/mainPages/learn'>
          <div className={['label', selectedIndex === 1 ? 'selected' : 'unchecked'].join(' ')} data-index='1' onClick={this.selected}><img src={selectedIndex === 1 ? tabsImgTrue[1] : tabsImgFalse[1]} alt="学习" /><span>学习</span></div>
        </Link>
        <Link replace to='/mainPages/exchange'>
          <div className={['label', selectedIndex === 2 ? 'selected' : 'unchecked'].join(' ')} data-index='2' onClick={this.selected}><img src={selectedIndex === 2 ? tabsImgTrue[2] : tabsImgFalse[2]} alt="兑换" /><span>兑换</span></div>
        </Link >
        <Link replace to='/mainPages/task'>
          <div className={['label', selectedIndex === 3 ? 'selected' : 'unchecked'].join(' ')} data-index='3' onClick={this.selected}><img src={selectedIndex === 3 ? tabsImgTrue[3] : tabsImgFalse[3]} alt="任务" /><span>任务</span></div>
        </Link>
        <Link replace to='/mainPages/myInfo'>
          <div className={['label', selectedIndex === 4 ? 'selected' : 'unchecked'].join(' ')} data-index='4' onClick={this.selected}><img src={selectedIndex === 4 ? tabsImgTrue[4] : tabsImgFalse[4]} alt="我的" /><span>我的</span></div>

        </Link>
      </div>
    )
  }
}
