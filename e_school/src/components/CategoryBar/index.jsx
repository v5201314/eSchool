import React, { Component } from 'react'

import './index.css'
export default class CategoryBar extends Component {
  aaaa = (e)=>{
    console.log(e.target.value);
  }
  render() {
    return (
      <div id='categoryBar'>
        <select name="" id="select1" onChange={this.aaaa}>
            <option selected>综合排序</option>
            <option value='1' >能量</option>
            <option value='2'>人气</option>
        </select>
        <select name="" id="select2">
            <option selected>距离</option>
            <option value='1' >&lt;1km</option>
            <option value='2' >&lt;5km</option>
            <option value='3' >&gt;5km</option>
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
