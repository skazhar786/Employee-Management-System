import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getTaskNumbers } from '../../utils/helpers'

const NewTask = ({ data, employee, taskIndex }) => {

  const [userData, setUserData] = useContext(AuthContext)

  const acceptTask = () => {

    const updatedUsers = userData.map((emp) => {

      if (emp.id !== employee.id) return emp

      const updatedTasks = [...emp.tasks]

      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        active: true,
        newTask: false
      }

      return {
        ...emp,
        tasks: updatedTasks,
        taskNumbers: getTaskNumbers(updatedTasks)
      }

    })

    setUserData(updatedUsers)

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedUsers)
    )

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    if (
      loggedInUser &&
      loggedInUser.role === "employee" &&
      loggedInUser.id === employee.id
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          id: employee.id
        })
      )
    }

  }

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-4xl'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 rounded-lg text-sm px-3 py-1'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>

      <div className='mt-4'>
        <button
          onClick={acceptTask}
          className='cursor-pointer rounded bg-blue-600 py-1 px-2 text-sm'
        >
          Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTask