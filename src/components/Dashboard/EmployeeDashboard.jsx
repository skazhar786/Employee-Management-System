import React from 'react'
import Header from "../others/Header"
import Tasklist from '../others/Tasklist'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  if (!props.data) {
    return (
      <div className='p-10 h-screen bg-[#1c1c1c] text-white flex items-center justify-center'>
        Loading...
      </div>
    )
  }

  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      <Header changeUser={props.changeUser} data={props.data} />
      <Tasklist data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard