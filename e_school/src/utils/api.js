//公用的api接口
import axios from "axios";

export const changeTimeValue = (data) => {
   return axios.put(`http://192.168.1.103:10010/timeValue/value`, {

        "id": data.id,
        "value":data.value

    })
}