import React from 'react'

const AcceptTask = ({data}) => {

    
    return (
        <div>

            <div className='flex-shrink-0  h-full w-[300px] p-5 bg-red-400 rounded-4xl'>
                <div className='flex justify-between  items-center'>
                    <h3 className='bg-red-600 rounded-lg text-sm  px-3 py-1 '>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>

                <div className='flex justify-between mt-4'>
                    <button className="cursor-pointer  rounded bg-green-600 py-1 px-2 text-sm"> Mark as complete</button>
                    <button className="cursor-pointer  rounded bg-red-600 py-1 px-2 text-sm"> Mark as Failed</button>
                </div>
            </div>



        </div>
    )
}

export default AcceptTask
