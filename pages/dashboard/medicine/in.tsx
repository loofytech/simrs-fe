import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function MedicineIn() {
  const columns = [
    {name: "Nama Obat", selector: (row: any) => row.name},
    {name: "Jenis Obat", selector: (row: any) => row.unit},
    {name: "Quantity", selector: (row: any) => row.qty},
    {name: "Subtotal", selector: (row: any) => row.subtotal},
    // {name: "Status", selector: (row: any) => row.status},
    {name: "Action", selector: (row: any) => {
      return <button type="button" className="bg-primary text-xs p-3.5 font-semibold py-1.5 text-white rounded-lg">Detail</button>;
    }}
  ];

  const data: any[] = [
    {
      name: "ACETYLCISTEINE 200",
      unit: "Tablet",
      qty: 1000,
      subtotal: "Rp. 1.200.000",
      approval: "-",
      // status: "Pending",
    },
    {
      name: "ACETYLCISTEINE 300",
      unit: "Kapsul",
      qty: 2900,
      subtotal: "Rp. 1.200.000",
      approval: "-",
    },
  ];

  return (<AppLayout title="History Obat Masuk">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">History Obat Masuk</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah history obat masuk yang ada di rumah sakit anda</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Data</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Request Delegation</button> */}
      </div>
      <div className={data.length > 0 ? "mt-6" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}