import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getTaskNumbers } from '../../utils/helpers'

const AcceptTask = ({ data, employee, taskIndex }) => {

    const [userData, setUserData] = useContext(AuthContext)

    const updateTask = (type) => {

        const updatedUsers = userData.map((emp) => {

            if (emp.id !== employee.id) return emp

            const updatedTasks = [...emp.tasks]

            if (type === "completed") {

                updatedTasks[taskIndex] = {
                    ...updatedTasks[taskIndex],
                    active: false,
                    completed: true
                }

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskNumbers: getTaskNumbers(updatedTasks)
                }
            }

            updatedTasks[taskIndex] = {
                ...updatedTasks[taskIndex],
                active: false,
                failed: true
            }

            return {
                ...emp,
                tasks: updatedTasks,
                taskNumbers: getTaskNumbers(updatedTasks)
            }

        })

        setUserData(updatedUsers)
        localStorage.setItem("employees", JSON.stringify(updatedUsers))
    }

    return (
        <div>

            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-4xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 rounded-lg text-sm px-3 py-1'>
                        {data.category}
                    </h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>

                <h2 className='mt-5 text-2xl font-semibold'>
                    {data.taskTitle}
                </h2>

                <p className='text-sm mt-2'>
                    {data.taskDescription}
                </p>

                <div className='flex justify-between mt-4'>
                    <button
                        onClick={() => updateTask("completed")}
                        className="cursor-pointer rounded bg-green-600 py-1 px-2 text-sm"
                    >
                        Mark as complete
                    </button>

                    <button
                        onClick={() => updateTask("failed")}
                        className="cursor-pointer rounded bg-red-600 py-1 px-2 text-sm"
                    >
                        Mark as Failed
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AcceptTask