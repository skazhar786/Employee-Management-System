import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({elem}) => {

    const [userData,setUserData] = useContext(AuthContext)

    
  return ( 

    
    <div id="allTask" className='bg-[#1c1c1c] mt-5 p-5 rounded-2xl   mb-2'>
        <div className='bg-red-400 mb-2 px-4 py-2  rounded flex justify-between'>
            <h2 className='w-1/5 font-bold font-xl'>Employee Name</h2>
            <h2 className='w-1/5 font-bold font-xl'>New Task </h2>
            <h2 className='w-1/5 font-bold font-xl'>Active Task</h2>
            <h2 className='w-1/5 font-bold font-xl'>Completed</h2>
            <h2 className='w-1/5 font-bold font-xl'>Failed</h2>
        </div>   
       
       <div className=''>
         {userData.map((elem,idx)=>{
           return   <div key={idx} className='border-2 border-emerald-600 mb-2  px-4 py-2 rounded flex justify-between'>
            <h2 className='w-1/5  text-lg  font-bold'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg  font-bold text-blue-400'>{elem.taskNumbers.newTask}</h3>
            <h5 className='w-1/5  text-lg font-bold text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='w-1/5  text-lg  font-bold'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5   text-lg font-bold text-red-400'>{elem.taskNumbers.failed}</h5>
        </div>   
        })}
       </div>
 
    </div>
  )
}

export default AllTask

