import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getTaskNumbers } from '../../utils/helpers'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssignTo, setTaskAssignTo] = useState('')
    const [taskCategory, setTaskCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            taskCategory,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        }

        const updatedUsers = userData.map((emp) => {

            if (emp.firstName === taskAssignTo) {

                const updatedTasks = [...emp.tasks, newTask]

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskNumbers: getTaskNumbers(updatedTasks)
                }
            }

            return emp

        })

        setUserData(updatedUsers)

        localStorage.setItem(
            "employees",
            JSON.stringify(updatedUsers)
        )

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setTaskAssignTo('')
        setTaskCategory('')
    }

    return (
        <div>
            <div className="p-5 mt-7 bg-[#1c1c1c] rounded-2xl">
                <form
                    onSubmit={submitHandler}
                    className='flex items-start justify-between'
                >

                    <div className="w-1/2">

                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border mb-4'
                                type="text"
                                placeholder='Enter task title'
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border mb-4'
                                type="date"
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Assign To</h3>
                            <input
                                value={taskAssignTo}
                                onChange={(e) => setTaskAssignTo(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border mb-4'
                                type="text"
                                placeholder='Employee Name'
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                            <input
                                value={taskCategory}
                                onChange={(e) => setTaskCategory(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border mb-4'
                                type="text"
                                placeholder='Design / Dev / UI'
                            />
                        </div>

                    </div>

                    <div className='w-2/5 flex flex-col items-start'>

                        <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>

                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='w-full text-sm rounded outline-none bg-transparent border border-gray-400 h-44 py-2 px-4'
                            placeholder='Enter task description'
                        />

                        <button className='bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-500 font-medium text-sm mt-4 w-full'>
                            Create Task
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateTask