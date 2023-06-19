//公用的api接口
import axios from "axios";

import { SERVERURL } from "../constantValue";

export const changeTimeValue = (data) => {
   return axios.put(`http://192.168.1.103:10010/timeValue/value`, {

        "id": data.id,
        "value":data.value

    })
}

/**
 * 封装的 axios 请求方法
 * @param {请求类型} requestType 
 * @param {请求路径} requestUrl 
 * @param {请求数据} data 
 * @returns 
 */
export function permissionsAxios(requestType,requestUrl,data){
    const storedData = JSON.parse(localStorage.getItem('satoken'));
    return axios({
        method: requestType,
        url: SERVERURL+requestUrl,
        headers:{
            "content-type": "application/x-www-form-urlencoded",
            "satoken":storedData
        },
        ...data
    })
}