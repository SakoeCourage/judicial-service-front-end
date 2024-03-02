import type { routesListWitSections } from "app/app/types/portal/sidebar-typedef";

export let sidebarRoutes: routesListWitSections = [
  {
    sectionName: "Basics",
    routes: [
      {
        title: "Dashboard",
        icon: "mingcute:grid-fill",
        link: "/portal/dashboard",
      },
    ],
  },
  {
    sectionName: "Case Management",
    routes: [
      {
        title: "Pending Cases",
        icon: "game-icons:archive-register",
        link: "/portal/casemanagement/pendingcases",
      },
      {
        title: "Filed Cases",
        icon: "game-icons:archive-register",
        link: "/portal/casemanagement/filedcases",
      },
    ]
  },
  {
    sectionName: "Dockets Management",

    routes: [
      {
        icon: "ph:book-fill",
        title: "Pending Allocation",
        link: "/portal/casemanagement/dockets/pendingallocation",
      },
      {
        icon: "ph:book-fill",
        title: "Awaiting Dispatch",
        link: "/portal/casemanagement/dockets/dispatch",
      },
      {
        icon: "ph:book-fill",
        title: "Awaiting Sitting",
        link: "/portal/casemanagement/dockets/awaitingsitting",
      },
      {
        icon: "ph:book-fill",
        title: "Closed Cases",
        link: "/portal/casemanagement/dockets/closedcases",
      }
    ]
  },

  {
    sectionName: "SETUPS",
    routes: [
      {
        title: "Staff Management",
        icon: "medical-icon:i-registration",
        links: [
          {
            title: "Staff Registration",
            link: "/portal/staffmanagement/registration",
          },
          {
            title: "Posting and Transfers",
            link: "/portal/staffmanagement/posting",
          },
        ],
      },
      {
        title: "User Management",
        icon: "fa-solid:user-cog",
        links: [
          {
            title: "Users",
            link: "/portal/usermanagement/users",
          },
          {
            title: "Roles",
            link: "/portal/usermanagement/roles",
          },
        ],
      },
      {
        title: "Application Setup",
        icon: "fluent:table-offset-settings-24-filled",
        links: [
          {
            title: "Court",
            link: "/portal/applicationsetup/court",
          },
          {
            title: "Grade",
            link: "/portal/applicationsetup/grade",
          },
          {
            title: "Department / Unit",
            link: "/portal/applicationsetup/department",
          },
          {
            title: "Civil Cases Category",
            link: "/portal/applicationsetup/civilcasescategory",
          },
          {
            title: "Criminal Cases Category",
            link: "/portal/applicationsetup/criminalcasescategory",
          },
          {
            title: "Fees",
            link: "/portal/applicationsetup/criminalcasescategory",
          },
        ],
      },
    ],
  },
];
