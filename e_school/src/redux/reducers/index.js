/**
 *  用于汇总所有 reducer 
 **/

// combineReducers 如果要 redux 管理多个状态，请引入它
import {combineReducers} from 'redux'

//引入要汇总的组件
import timeValueReducer from './timeValue'
import userIdReducer from './userId'
import tabsIdReducer from './tabsId'

//汇总所有的 reducer 变为一个总的 reducer
export default combineReducers({
    userId:userIdReducer,
    timeValue:timeValueReducer,
    tabsId:tabsIdReducer
})
