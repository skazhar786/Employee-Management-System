const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS",
        taskDate: "2026-07-01",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issues",
        taskDate: "2026-07-03",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Initialize React project with Vite",
        taskDate: "2026-06-25",
        category: "Setup",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login API",
        taskDate: "2026-06-28",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Amit",
    email: "amit@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop admin dashboard",
        taskDate: "2026-07-02",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Build user profile page",
        taskDate: "2026-07-04",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB schema",
        taskDate: "2026-06-24",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT auth",
        taskDate: "2026-06-27",
        category: "Backend",
      },
    ],
  },

  {
    id: 3,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Design landing page",
        taskDate: "2026-07-01",
        category: "UI/UX",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark mode support",
        taskDate: "2026-07-05",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve reported UI bugs",
        taskDate: "2026-06-22",
        category: "Maintenance",
      },
    ],
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Payment UI",
        taskDescription: "Develop payment interface",
        taskDate: "2026-07-02",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Perform unit testing",
        taskDate: "2026-06-20",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests",
        taskDate: "2026-06-21",
        category: "Review",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Stripe Integration",
        taskDescription: "Integrate Stripe payment gateway",
        taskDate: "2026-06-30",
        category: "Backend",
      },
    ],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Chat Application",
        taskDescription: "Build chat UI",
        taskDate: "2026-07-03",
        category: "Frontend",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Socket Setup",
        taskDescription: "Implement Socket.IO",
        taskDate: "2026-07-04",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Git Setup",
        taskDescription: "Configure Git repository",
        taskDate: "2026-06-18",
        category: "Setup",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    admin: JSON.parse(localStorage.getItem("admin")) || [],
  };
};