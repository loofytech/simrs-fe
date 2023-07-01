import AppLayout from "@/layouts/AppLayout";

export default function PayrollInfo() {
  return (<AppLayout title="Payroll Info">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      {/* <h3 className="text-2xl font-normal">Payroll Info</h3> */}
      <div className="gap-6 flex flex-col py-7 md:flex-row">
        <div className="w-full flex flex-col md:w-1/3">
          <p className="mb-2 font-semibold">Payroll Info</p>
          <span className="text-xs text-gray-400">Your payroll information is your identity on Talenta is used to log in.</span>
        </div>
        <div className="grid grid-cols-2 text-sm gap-5 w-full md:w-1/3">
          <div className="font-semibold">Insurance</div>
          <div className="flex flex-col">
            <span>BPJS Ketenagakerjaan</span>
            <span>BPJS Kesehatan</span>
          </div>
          <div className="font-semibold">NPWP</div>
          <div>00.000.000.0-000.000</div>
          <div className="font-semibold">Bank Name</div>
          <div>Bank Mandiri</div>
          <div className="font-semibold">Bank Account</div>
          <div>123456789101112</div>
          <div className="font-semibold">Bank Account Holder</div>
          <div>Agung Ardiyanto</div>
          <div className="font-semibold">PTKP Status</div>
          <div>TK/0</div>
        </div>
      </div>
    </div>
  </AppLayout>);
}