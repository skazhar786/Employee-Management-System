import React, { useState } from 'react'

const Header = (props) => {
// const [userName,setUserName] = useState("")

// if(!userName){
//   setUserName("Admin")
// }else{
//   setUserName(data.firstName)
// }

 const logOutUser = ()=>{
  console.log(props.changeUser);
  
   localStorage.setItem("loggedInUser","")
props.changeUser('')
 }

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-500 font-medium text-xl '>Logout</button>
    </div>
  )
}

export default Header