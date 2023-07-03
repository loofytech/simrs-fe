import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function MedicineOut() {
  const columns = [
    {name: "Created Date", selector: (row: any) => row.created_date},
    {name: "Policy Code", selector: (row: any) => row.policy_code},
    {name: "Start Date", selector: (row: any) => row.start_date},
    {name: "End Date", selector: (row: any) => row.end_date},
    {name: "Notes", selector: (row: any) => row.notes},
    {name: "Taken", selector: (row: any) => row.taken},
    {name: "Canceled", selector: (row: any) => row.canceled},
    {name: "Action", selector: (row: any) => {
      return <button type="button" className="bg-primary text-xs p-3.5 font-semibold py-1.5 text-white rounded-lg">Detail</button>;
    }}
  ];

  const data: any[] = [
    // {
    //   created_date: "12 Dec 1945",
    //   policy_code: "TS",
    //   start_date: "12 Dec 1945",
    //   end_date: "12 Dec 1945",
    //   notes: "-",
    //   taken: "-",
    //   canceled: "-"
    // },
    // {
    //   created_date: "12 Dec 1945",
    //   policy_code: "TS",
    //   start_date: "12 Dec 1945",
    //   end_date: "12 Dec 1945",
    //   notes: "-",
    //   taken: "-",
    //   canceled: "-"
    // },
  ];

  return (<AppLayout title="Obat Keluar">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">History Obat Keluar</h3>
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