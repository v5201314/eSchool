import React, { Component } from 'react'

import Head from './Head'
import CarouselMap from '../../components/CarouselMap'

export default class Home extends Component {
  render() {
    return (
      <div id='home' className='wrapper'>
        <Head/>
        <div style={{height:'29px'}}></div>
        <CarouselMap/>
      </div>
    )
  }
}
