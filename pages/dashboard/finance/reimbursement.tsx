import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function Reimbursement() {
  const columns = [
    {name: "Transaction ID", selector: (row: any) => row.trx},
    {name: "Reimbursement", selector: (row: any) => row.rmm},
    {name: "Created Date", selector: (row: any) => row.created_date},
    {name: "Effective Date", selector: (row: any) => row.effective_date},
    {name: "Total", selector: (row: any) => row.total},
    {name: "Approval", selector: (row: any) => row.approval},
    {name: "Status", selector: (row: any) => row.status},
    {name: "Action", selector: (row: any) => {
      return <button type="button" className="bg-primary text-xs p-3.5 font-semibold py-1.5 text-white rounded-lg">Detail</button>;
    }}
  ];

  const data: any[] = [
    // {
    //   trx: "TRX-12908129",
    //   rmm: "Rp. 1.200.000",
    //   created_date: "12 Dec 1945",
    //   effective_date: "7 Days",
    //   total: "Rp. 1.200.000",
    //   approval: "-",
    //   status: "Pending"
    // },
    // {
    //   trx: "TRX-15308129",
    //   rmm: "Rp. 1.150.000",
    //   created_date: "30 Dec 1945",
    //   effective_date: "4 Days",
    //   total: "Rp. 1.150.000",
    //   approval: "-",
    //   status: "Pending"
    // },
  ];

  return (<AppLayout title="Reimbursement">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Your reimbursement information</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">This is a summary of your reimbursement balance</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Request Reimbursement</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
      </div>
      <div className={data.length > 0 ? "mt-12" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}