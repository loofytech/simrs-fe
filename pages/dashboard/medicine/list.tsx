import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function ListmMdicine() {
  const columns = [
    {name: "Nama Obat", selector: (row: any) => row.name},
    {name: "Satuan", selector: (row: any) => row.unit},
    {name: "Harga", selector: (row: any) => row.price},
    {name: "Stok", selector: (row: any) => row.stock},
    {name: "Aksi", selector: (row: any) => {
      return <button type="button" className="bg-green-600 rounded-md text-white text-xs py-1.5 px-3.5">Update</button>
    }}
  ];

  const data: any[] = [
    {
      name: "ACETYLCISTEINE 200",
      unit: "Tablet",
      price: "Rp. 5000",
      stock: 1000
    },
  ];

  return (<AppLayout title="List Obat">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">List Obat</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah list obat yang ada di rumah sakit anda</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Obat</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
      </div>
      <div className={data.length > 0 ? "mt-12" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}