import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className='flex-shrink-0  h-full w-[300px] p-5 bg-pink-400 rounded-4xl'>
              <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 rounded-lg text-sm  px-3 py-1 '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
              </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>
                <div className='mt-2'>
                    <button className='cursor-pointer  rounded bg-red-600 py-1 px-2 text-sm'>Failed</button>
                </div>
            </div>
  )
}

export default FailedTask
