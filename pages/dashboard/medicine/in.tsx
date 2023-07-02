import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function MedicineIn() {
  const columns = [
    {name: "Created Date", selector: (row: any) => row.created_date},
    {name: "Overtime Date", selector: (row: any) => row.overtime_date},
    {name: "Compensation Type", selector: (row: any) => row.compensation},
    {name: "Approval", selector: (row: any) => row.approval},
    // {name: "Status", selector: (row: any) => row.status},
    {name: "Action", selector: (row: any) => {
      return <button type="button" className="bg-primary text-xs p-3.5 font-semibold py-1.5 text-white rounded-lg">Detail</button>;
    }}
  ];

  const data: any[] = [
    {
      created_date: "12 Dec 1945",
      overtime_date: "12 Dec 1945 - 13 Dec 1945",
      compensation: "-",
      approval: "-",
      // status: "Pending",
    },
    {
      created_date: "13 Dec 1945",
      overtime_date: "13 Dec 1945 - 14 Dec 1945",
      compensation: "-",
      approval: "-",
      // status: "Pending",
    },
  ];

  return (<AppLayout title="Overtime">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Your overtime information</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">This is a summary of your overtime.</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Request Overtime</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Request Delegation</button> */}
      </div>
      <div className={data.length > 0 ? "mt-12" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}