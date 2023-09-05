import React, { Component } from 'react'
import { Map, Marker, NavigationControl, ZoomControl } from 'react-bmapgl'

export default class BaiDuMap extends Component {
    state = {
        latitude:0,
        longitude:0
    }
    componentDidMount() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.onPositionUpdated)
        } else {
          console.error("Geolocation is not supported by this browser.")
        }
      }
      
      onPositionUpdated = (position) => {
        const { latitude, longitude } = position.coords;
        // 这里 latitude 和 longitude 分别表示当前位置的纬度和经度
        this.setState({latitude})
        this.setState({longitude})
      }

    render() {
        const {latitude,longitude} = this.state
        console.log(latitude,longitude);
        return (
            <Map enableScrollWheelZoom={true} center={{ lng: longitude, lat: latitude }} zoom="11">
                <Marker position={{ lng: longitude, lat: latitude }} />
                <NavigationControl />
                <ZoomControl/>

            </Map>
        )
    }
}
