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
    label: "Pasien",
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
    label: "Obat",
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
    label: "Dokter",
    path: "/dashboard/doctor",
    icon: <FiBriefcase size={22} />,
    children: [
      {
        label: "List Dokter",
        path: "/list"
      },
      {
        label: "Jadwal Dokter",
        path: "/schedule"
      }
    ]
  }
];

export default routes;