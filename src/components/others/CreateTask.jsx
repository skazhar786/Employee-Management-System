import React, { useState, useContext } from 'react'
import employees from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssignTo, setTaskAssignTo] = useState('')
    const [taskCategory, setTaskCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        const data = userData


        data.forEach(function (elem) {

            if (taskAssignTo == elem.firstName) {
                elem.tasks.push(task)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
                console.log(elem);

            }
        })

            setUserData(data)

        setTaskAssignTo('')
        setTaskCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            taskAssignTo,
            taskCategory,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        setTask(newTask);

        console.log(task);
    };
    return (
        <div>
            <div

                className="p-5 mt-7 bg-[#1c1c1c] rounded-2xl">
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className='flex items-start justify-between '>
                    <div className="w-1/2">
                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Task Title </h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='enter the title ' />
                        </div>
                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
                        </div>
                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
                            <input
                                value={taskAssignTo}
                                onChange={(e) => {
                                    setTaskAssignTo(e.target.value)
                                }}
                                className='text-sm py-1 px-2 border-gray-400 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                            <input
                                value={taskCategory}
                                onChange={(e) => {
                                    setTaskCategory(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 border-gray-400 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='dev,design,etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            name="" className='w-full text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 h-44 py-2 px-4 ' placeholder='enter the description' id=""></textarea>
                        <button className='bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-500 font-medium text-sm mt-4 w-full  '>Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
