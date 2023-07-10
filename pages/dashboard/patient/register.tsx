import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";
import ModalCreatePatient from "@/components/Modal/ModalCreatePatient";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openCreatePatient } from "@/store/reducers/modal";
import FormRegistration from "@/components/Form/FormRegistration";

export default function RegisterPatient() {
  const [create, setCreate] = useState<boolean>(false);
  const dispatch = useDispatch();

  const openCreate = () => {
    // dispatch(openCreatePatient(true));
    setCreate(true);
  }

  const closeDropdown = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  const columns = [
    {name: "Nama", selector: (row: any) => {
      return <div className="flex items-center gap-2">
        <div className="bg-primary text-white text-xs flex justify-center items-center font-bold rounded-md w-6 h-6">{row.blood}</div>
        {row.name}
      </div>
    }},
    {name: "No. Tlp", selector: (row: any) => row.tlp},
    {name: "Jenis Kelamin", selector: (row: any) => row.jk},
    {name: "Status", selector: (row: any) => row.status},
    {name: "Created At", selector: (row: any) => row.created_at},
    {name: "Aksi", selector: (row: any) => {
      return <button type="button" className="bg-primary rounded-md text-white text-xs py-1.5 px-3.5">Detail</button>
    }}
  ];

  const data: any[] = [
    {
      name: "Agung Ardiyanto",
      blood: "AB",
      tlp: "082179099557",
      jk: "Laki - Laki",
      status: "Belum Menikah",
      created_at: "17 Dec 1945"
    },
    {
      name: "Kiki Andriawan",
      blood: "B",
      tlp: "081278697553",
      jk: "Laki - Laki",
      status: "Belum Menikah",
      created_at: "17 Dec 1945"
    },
  ];

  return (<AppLayout title="Pendaftaran Pasien">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Pendaftaran Pasien</h3>
      {!create && <>
        <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah list pendaftaran yang ada di rumah sakit anda pada hari ini</div>
        <div className="text-xs font-semibold flex items-center gap-2">
          <button type="button" onClick={openCreate} className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Data</button>
          {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
        </div>
        <div className={data.length > 0 ? "mt-5" : "mt-0"}>
          <TableData column={columns} data={data} />
        </div>
      </>}
      {create && <FormRegistration />}
    </div>
    {/* <ModalCreatePatient title="Tambah Pasien" /> */}
  </AppLayout>);
}