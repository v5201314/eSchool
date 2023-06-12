import React from 'react'
import {useParams} from 'react-router-dom'

const TaskDetails = ()=> {

    const params = useParams();
  console.log(params);
    return (
      <div>Task details</div>
    )
  
}

export default TaskDetails