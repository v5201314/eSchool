import React from 'react'
import {useLocation} from 'react-router-dom'
import ReturnArea from '../../../components/ReturnArea';
function TaskDetails (){

    const location = useLocation();
    console.log(location);
  const myParam = location.state?.myParam ?? '';
  console.log(myParam);
    return (
        <ReturnArea header="任务详情"/>
        
    )
  }

  export default TaskDetails