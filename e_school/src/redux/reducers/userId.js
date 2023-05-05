import { CHANGEUSERID } from "../constant";

const initState=111
export default function userIdReducer(preState=initState,action) {
    const {type,data} = action

    switch (type) {
        case CHANGEUSERID:
           return data
        default:
            return preState
    }
    
}
