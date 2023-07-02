import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/DataTable";

export default function ScheduleDoctor() {
  const columns = [
    {name: "Nama Dokter", selector: (row: any) => row.name},
    {name: "Jadwal", selector: (row: any) => {
      return <span><b>{row.day} Pagi</b>, {row.schedule}</span>;
    }},
    {name: "Unit Kerja", selector: (row: any) => row.unit},
    {name: "Kuota Pasien", selector: (row: any) => row.quota},
    {name: "Aksi", selector: (row: any) => {
      return <button type="button" className="bg-green-600 rounded-md text-white text-xs py-1.5 px-3.5">Update</button>
    }}
  ];

  const data: any[] = [
    {
      name: "dr. H. Ervan Budiawan, M.Biomed",
      day: "Senin",
      schedule: "08:00 - 21:00",
      unit: "POLI UMUM KMC",
      quota: "1000 Pasien"
    },
    {
      name: "dr. Anis Arifah, MARS",
      day: "Senin",
      schedule: "08:00 - 21:00",
      unit: "POLI UMUM KMC",
      quota: "1000 Pasien"
    },
  ];

  return (<AppLayout title="Jadwal Dokter">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl font-normal">Jadwal Dokter</h3>
      <div className="text-sm text-gray-500 font-semibold italic mt-10 mb-3.5">Ini adalah jadwal yang ada di rumah sakit anda</div>
      <div className="text-xs font-semibold flex items-center gap-2">
        <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">Tambah Jadwal Dokter</button>
        {/* <button type="button" className="border-2 border-primary bg-white rounded-lg py-2.5 px-3.5">View Attendance Log</button> */}
      </div>
      <div className={data.length > 0 ? "mt-8" : "mt-0"}>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </AppLayout>);
}