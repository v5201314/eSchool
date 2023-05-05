import { CHANGETIMEVALUE} from "../constant";

import axios from 'axios'

const initState = 0 //初始化状态
export default function personReducer(preState = initState, action) {

    const { type, data } = action

    switch (type) {
        case CHANGETIMEVALUE:
            return (
                ()=>{
                    axios.put(`https://api.github.com/search/users`,{
                        params:{
                            id:data.userId,
                            value:data.value,
                        }
                    }).then(
                        response => {
                             //请求成功后通知App更新状态
                        },
                        error => {
                            //请求失败后通知App更新状态
                            alert('发生了错误')
                        },
                        
                    )
                }
               
            )
        default:
            return preState
    }
}