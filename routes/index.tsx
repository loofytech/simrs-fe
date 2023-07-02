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
    path: "/dashboard/medicine",
    icon: <FiTarget size={22} />,
    children: [
      {
        label: "List Obat",
        path: "/list"
      },
      {
        label: "Obat Masuk",
        path: "/in"
      },
      {
        label: "Obat Keluar",
        path: "/out"
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