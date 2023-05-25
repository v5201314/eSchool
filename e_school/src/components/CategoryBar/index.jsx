import React, { Component } from 'react'

import './index.css'
export default class CategoryBar extends Component {
  aaaa = (e)=>{
    const {value} = e.target
    this.props.setTasksBars(value)
  }

  bbbb = (e)=>{
    const {value} = e.target
    this.props.setTasksBars(value)
  }
  render() {
    return (
      <div id='categoryBar'>
        <select name="" id="select1" onChange={this.aaaa}>
            <option selected>综合排序</option>
            <option value='energy' >能量</option>
            <option value='heat'>人气</option>
        </select>
        <select name="" id="select2" onChange={this.bbbb}>
            <option selected>距离</option>
            <option value='lessThan1' >&lt;1km</option>
            <option value='lessThan5' >&lt;5km</option>
            <option value='greaterThan5' >&gt;5km</option>
        </select>
        <select name="" id="select3">
            <option selected>筛选</option>
            <option >选项一</option>
            <option >选项二</option>
        </select>
      </div>
    )
  }
}
