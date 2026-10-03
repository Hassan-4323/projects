const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Employee Report",
        taskDescription: "Prepare and submit the monthly employee performance report.",
        taskDate: "2026-10-05",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription: "Review and update customer information in the system.",
        taskDate: "2026-10-02",
        category: "Database",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ahmed",
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Follow Up",
        taskDescription: "Contact assigned clients and collect their feedback.",
        taskDate: "2026-10-06",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create the presentation for the upcoming team meeting.",
        taskDate: "2026-10-01",
        category: "Presentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Website Testing",
        taskDescription: "Test the latest website changes and report bugs.",
        taskDate: "2026-10-03",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Hamza",
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Check current inventory and update the records.",
        taskDate: "2026-10-07",
        category: "Inventory",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  const existingEmployees = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");

  if (!existingEmployees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!existingAdmin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  return {
    employees,
    admin,
  };
};

// Keeping your old typo available so existing imports don't break.
export const getLoacalStorage = getLocalStorage;