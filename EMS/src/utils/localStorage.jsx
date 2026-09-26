const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Employee Dashboard",
        taskDescription: "Build the employee dashboard UI and connect it with the required data.",
        taskDate: "2026-09-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile",
        taskDescription: "Update personal information and profile details.",
        taskDate: "2026-09-22",
        category: "Account"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Find and fix the login validation issue.",
        taskDate: "2026-09-26",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Prepare and submit the weekly progress report.",
        taskDate: "2026-09-23",
        category: "Report"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page for the new project.",
        taskDate: "2026-09-25",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create UI Components",
        taskDescription: "Develop reusable buttons, cards, and input components.",
        taskDate: "2026-09-26",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Project Requirements",
        taskDescription: "Review the project requirements and prepare implementation notes.",
        taskDate: "2026-09-21",
        category: "Planning"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Create REST API endpoints for employee management.",
        taskDate: "2026-09-25",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure the project database and create required collections.",
        taskDate: "2026-09-20",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test API Endpoints",
        taskDescription: "Test all API endpoints and verify the returned responses.",
        taskDate: "2026-09-27",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest application build to the server.",
        taskDate: "2026-09-22",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize API Performance",
        taskDescription: "Improve API response time and optimize database queries.",
        taskDate: "2026-09-28",
        category: "Performance"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Data Entry",
        taskDescription: "Enter and verify new customer information in the system.",
        taskDate: "2026-09-25",
        category: "Data Entry"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Verify Customer Records",
        taskDescription: "Check customer records and correct any missing information.",
        taskDate: "2026-09-23",
        category: "Verification"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Send Customer Emails",
        taskDescription: "Send follow-up emails to assigned customers.",
        taskDate: "2026-09-26",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Daily Sales Report",
        taskDescription: "Prepare the daily sales report and submit it to the manager.",
        taskDate: "2026-09-24",
        category: "Sales"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Plan",
        taskDescription: "Prepare a marketing plan for the upcoming product launch.",
        taskDate: "2026-09-25",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Research",
        taskDescription: "Research current social media trends and competitors.",
        taskDate: "2026-09-26",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a presentation for the upcoming team meeting.",
        taskDate: "2026-09-22",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Marketing Content",
        taskDescription: "Update the existing marketing content with the latest information.",
        taskDate: "2026-09-21",
        category: "Content"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Campaign Planning",
        taskDescription: "Plan the next promotional campaign and prepare campaign requirements.",
        taskDate: "2026-09-29",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Competitor Analysis",
        taskDescription: "Analyze competitor products, pricing, and marketing strategies.",
        taskDate: "2026-09-20",
        category: "Research"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLoacalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees, admin}
}