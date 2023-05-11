import { ISSHOWQUIT } from "../constant";

//初始化状态
const initState=0
export default function isShowQuitReducer(preState=initState,action) {
    const {type,data} = action

    switch (type) {
        case ISSHOWQUIT:
           return data
        default:
            return preState
    }
    
}
