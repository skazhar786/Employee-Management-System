import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState()
  const [userData,setUserData] = useContext(AuthContext)
  // console.log(userData);


useEffect(() => {
  console.log("All LocalStorage:", localStorage);

  const loggedInUser = localStorage.getItem("loggedInUser");
  console.log("loggedInUser =", loggedInUser);

  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser);
    console.log(userData);

    setUser(userData.role);
    setLoggedInUserData(userData.data);
  }
}, []);

const handleLogin = (email, password) => {
  // Admin Login
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
    return;
  }

  // Check if userData exists
  if (!userData) {
    alert("Invalid User Credentials");
    return;
  }

  // Employee Login
  const employee = userData.find(
    (e) => e.email === email && e.password === password
  );

  if (employee) {
    setUser("employee");
    setLoggedInUserData(employee);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee",data: employee})
    );
  } else {
    alert("Invalid User Credentials");
  }
};

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, [])
  return (
    <>
      {
        !user ? (<Login handleLogin={handleLogin} />) : user === "admin" ? (<AdminDashboard changeUser={setUser} />) : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null)
      }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
