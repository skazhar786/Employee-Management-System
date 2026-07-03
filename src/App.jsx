import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);

  useEffect(() => {

    if (!userData || userData.length === 0) return;

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) return;

    if (loggedInUser.role === "admin") {
      setUser("admin");
      return;
    }

    const employee = userData.find(
      (emp) => emp.id === loggedInUser.id
    );

    if (employee) {
      setLoggedInUserData(employee);
      setUser("employee");
    }

  }, [userData]);

  const handleLogin = (email, password) => {

    if (email === "admin@me.com" && password === "123") {

      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      );

      return;
    }

    const employee = userData.find(
      (emp) =>
        emp.email === email &&
        emp.password === password
    );

    if (!employee) {
      alert("Invalid Credentials");
      return;
    }

    setLoggedInUserData(employee);
    setUser("employee");

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        id: employee.id
      })
    );

  };

  return (
    <>
      {
        !user ? (
          <Login handleLogin={handleLogin} />
        ) : user === "admin" ? (
          <AdminDashboard changeUser={setUser} />
        ) : (
          <EmployeeDashboard
            data={loggedInUserData}
            changeUser={setUser}
          />
        )
      }
    </>
  );
}

export default App;