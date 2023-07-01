import {
  FiUser,
  FiAirplay,
  FiTarget,
  FiBriefcase,
  FiCreditCard,
  FiFileText,
  FiArchive,
  FiGrid
} from "react-icons/fi";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <FiAirplay size={22} />
  },
  {
    label: "General",
    path: "/dashboard/general",
    icon: <FiUser size={22} />,
    children: [
      {
        label: "Personal",
        path: "/personal"
      },
      {
        label: "Employment",
        path: "/employment"
      },
      {
        label: "Education & Experience",
        path: "/education-experience"
      },
      {
        label: "Additional Info",
        path: "/additional-info"
      },
    ]
  },
  {
    label: "Time Management",
    path: "/dashboard/time",
    icon: <FiTarget size={22} />,
    children: [
      {
        label: "Attendance",
        path: "/attendance"
      },
      {
        label: "Timeoff",
        path: "/timeoff"
      },
      {
        label: "Overtime",
        path: "/overtime"
      }
    ]
  },
  {
    label: "Payroll",
    path: "/dashboard/payroll",
    icon: <FiBriefcase size={22} />,
    children: [
      {
        label: "Payroll Info",
        path: "/info"
      },
      {
        label: "Payslip",
        path: "/payslip"
      }
    ]
  },
  {
    label: "Finance",
    path: "/dashboard/finance",
    icon: <FiCreditCard size={22} />,
    children: [
      {
        label: "Reimbursement",
        path: "/reimbursement"
      },
      {
        label: "Loan",
        path: "/loan"
      },
      {
        label: "Cash Advance",
        path: "/cash-advance"
      }
    ]
  },
  {
    label: "Files",
    path: "/dashboard/files",
    icon: <FiFileText size={22} />
  },
  {
    label: "Assets",
    path: "/dashboard/assets",
    icon: <FiArchive size={22} />
  },
  {
    label: "History",
    path: "/dashboard/history",
    icon: <FiGrid size={22} />
  }
];

export default routes;