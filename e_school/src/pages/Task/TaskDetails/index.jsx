import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'



import ReturnArea from '../../../components/ReturnArea';
import AccessTask from './AccessTask';

function TaskDetails() {

  const location = useLocation();
  return (
    <Fragment>
      <ReturnArea header="任务详情" />
      <AccessTask taskObj={location.state}/>

    </Fragment>


  )
}

export default TaskDetails