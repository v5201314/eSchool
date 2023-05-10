import { CHANGETABSID } from "../constant";

//初始化状态
const initState=0
export default function tabsIdReducer(preState=initState,action) {
    const {type,data} = action

    switch (type) {
        case CHANGETABSID:
           return data
        default:
            return preState
    }
    
}
