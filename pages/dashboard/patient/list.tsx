import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function ListPatient() {
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

  return (<AppLayout title="List Pasien">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">List Pasien</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah list pasien yang ada di rumah sakit anda</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Data</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
      </div>
      <div className={data.length > 0 ? "mt-6" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}