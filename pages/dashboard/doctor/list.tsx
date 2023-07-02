import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function ListDoctor() {
  const columns = [
    {name: "Nama Dokter", selector: (row: any) => row.name},
    {name: "Unit Kerja", selector: (row: any) => row.unit},
    {name: "Created At", selector: (row: any) => row.created_at},
    {name: "Aksi", selector: (row: any) => {
      return <button type="button" className="bg-green-600 rounded-md text-white text-xs py-1.5 px-3.5">Update</button>
    }}
  ];

  const data: any[] = [
    {
      name: "Fisioterapi KMC",
      unit: "FISIOTERAPI KMC",
      created_at: "2023-06-11 14:41:35",
    },
    {
      name: "Fisioterapi KMT",
      unit: "FISIOTERAPI KMT",
      created_at: "2023-06-11 14:41:35",
    }
  ];

  return (<AppLayout title="List Dokter">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">List Dokter</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah daftar dokter yang ada di rumah sakit anda</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Dokter</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
      </div>
      <div className={data.length > 0 ? "mt-8" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}