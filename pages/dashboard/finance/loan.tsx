import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function Loan() {
  const columns = [
    {name: "Transaction ID", selector: (row: any) => row.trx},
    {name: "Loan Name", selector: (row: any) => row.loan_name},
    {name: "Loan Amount", selector: (row: any) => row.loan_amount},
    {name: "Installment", selector: (row: any) => row.installment},
    {name: "Interest", selector: (row: any) => row.interest},
    {name: "Effective Date", selector: (row: any) => row.effective_date}
  ];

  const data: any[] = [
    // {
    //   trx: "TRX-12908129",
    //   loan_name: "Agung Ardiyanto",
    //   loan_amount: "Rp. 1.200.000",
    //   installment: "-",
    //   interest: "-",
    //   effective_date: "3 Days"
    // },
    // {
    //   trx: "TRX-15551129",
    //   loan_name: "Agung Ardiyanto",
    //   loan_amount: "Rp. 1.100.000",
    //   installment: "-",
    //   interest: "-",
    //   effective_date: "7 Days"
    // }
  ];

  return (<AppLayout title="Loan">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Your loan history</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-5 mb-3.5">This is a summary of your loan.</div>
      <div className={data.length > 0 ? "mt-8" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}