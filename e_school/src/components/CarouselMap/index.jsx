import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default class CarouselMap extends Component {
    state = {
        //当前展示的图片
        index:0,
        carouselMaps:[
            {
                //图片src
                imgSrc:'/images/图层 1.png',
                //去哪里？
                to:'',
                //图片key
                key:0,
            },
            {
                //图片src
                imgSrc:'/images/云朵穿心.jpg',
                //去哪里？
                to:'',
                //图片key
                key:1,
            },{
                //图片src
                imgSrc:'/images/可爱兔子.jpg',
                //去哪里？
                to:'',
                //图片key
                key:2,
            },
            {
                //图片src
                imgSrc:'/images/风景 1.jpg',
                //去哪里？
                to:'',
                //图片key
                key:3,
            }
        ]
    }
    componentDidMount(){
        const {carouselMaps} = this.state
        let num = 0
        this.srcTimer = setInterval(()=>{
        if(num+1===carouselMaps.length)
           num=0
           else
           num++
           this.setState({index:num})
        },3000)
    }

    componentWillUnmount(){
        clearInterval(this.srcTimer)
    }
    render() {
        const {index,carouselMaps} = this.state
        return (
            <div id='carouselMap'>
                 <ul className='circle'>
                {
                    carouselMaps.map((carouselMapObj)=>{
                        return( 
                            <li className={index===carouselMapObj.key?'trueLi':'falseLi'} key={carouselMapObj.key}></li>
                        )
                    })
                }
                </ul>
                <ul>
                    <li>
                        <Link to={carouselMaps[index].to}>
                            <img src={carouselMaps[index].imgSrc} alt="" />
                        </Link>
                    </li>
                </ul>
               
            </div>
        )
    }
}
