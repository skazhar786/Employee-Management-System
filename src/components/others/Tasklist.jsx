import React from 'react'

const Tasklist = ({data}) => {
  return (
    <div className='flex  mt-10 justify-between gap-5'>
      <div className=' w-[40%] py-6 px-9 bg-red-400 rounded-4xl'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
      <div className=' w-[40%] py-6 px-9 bg-emerald-400 rounded-4xl'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className=' w-[40%] py-6 px-9 bg-sky-400 rounded-4xl'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className=' w-[40%] py-6 px-9 bg-yellow-400 rounded-4xl'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasklist
