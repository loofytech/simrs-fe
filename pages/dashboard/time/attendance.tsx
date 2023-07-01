import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function Attendance() {
  const columns = [
    {name: "Request Type", selector: (row: any) => row.request},
    {name: "Created Date", selector: (row: any) => row.created_date},
    {name: "Start Date", selector: (row: any) => row.start_date},
    {name: "Status", selector: (row: any) => row.status}
  ];

  const data: any[] = [
    // {
    //   request: "RCF0001",
    //   created_date: "12 Dec 1945",
    //   start_date: "12 Dec 1945",
    //   status: "Completed"
    // },
    // {
    //   request: "RCF0002",
    //   created_date: "13 Dec 1945",
    //   start_date: "13 Dec 1945",
    //   status: "Active"
    // },
  ];

  return (<AppLayout title="Attendance">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Your attendance information</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">This is a summary of your attendance information</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Request Shift / Attendance</button>
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button>
      </div>
      <div className={data.length > 0 ? "mt-12" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}