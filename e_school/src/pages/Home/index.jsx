import React, { Component } from 'react'

import Head from './Head'
import CarouselMap from '../../components/CarouselMap'
import Notify from '../../components/Notify'

export default class Home extends Component {
  state = {
    notify:{
      content:"“两高”联手建立全国执行与法律监督工作平台,推进新发展",
      to:'',
    }
  }
  render() {
    return (
      <div id='home' className='wrapper'>
        <Head/>
        <div style={{height:'29px'}}></div>
        {/* <Test1/> */}
        <CarouselMap/>
        <Notify notify={this.state.notify}/>
      </div>
    )
  }
}
