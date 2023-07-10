import {
  FiUser,
  FiAirplay,
  FiTarget,
  FiBriefcase,
  FiBookOpen
} from "react-icons/fi";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <FiAirplay size={22} />
  },
  {
    label: "Pendaftaran",
    path: "/dashboard/patient/register",
    icon: <FiAirplay size={22} />
  },
  // {
  //   label: "Pasien",
  //   path: "/dashboard/patient",
  //   icon: <FiBookOpen size={22} />,
  //   children: [
  //     {
  //       label: "List Pasien",
  //       path: "/list"
  //     },
  //     {
  //       label: "Pendaftaran",
  //       path: "/register"
  //     },
  //   ]
  // },
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