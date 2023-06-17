//公用的api接口
import axios from "axios";

import { SERVERURL } from "../constantValue";

export const changeTimeValue = (data) => {
   return axios.put(`http://192.168.1.103:10010/timeValue/value`, {

        "id": data.id,
        "value":data.value

    })
}

export async function permissionsAxios(requestType,requestUrl,data){
   const {data:res} =await  axios({
        method: requestType,
        url: SERVERURL+requestUrl,
        data
    })

    return res
}