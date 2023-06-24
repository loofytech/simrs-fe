import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/Table/DataTable";
import ModalDoctor from "@/components/Modal/ModalDoctor";

export default function Doctor() {
  const columns = [
    {name: 'NAMA DOKTER', selector: (row: any) => row.name},
    {name: 'UNIT KERJA', selector: (row: any) => row.unit},
    {name: 'AKSI', selector: (row: any) => {
      return <div className="d-flex align-items-center gap-1">
        <ModalDoctor type="update" data={row} label="Update" className="btn btn-sm btn-primary" />
        <ModalDoctor type="delete" data={row} label="Delete" className="btn btn-sm btn-danger" />
      </div>
    }}
  ];

  const data = [
    {id: 1, name: 'Agung Ardiyanto', unit: "Bedah Syaraf"},
    {id: 2, name: 'Kiki Andriawan', unit: "Bedah Kulit"}
  ];

  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 order-0">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-3">Daftar Dokter</h4>
              <div className="d-flex align-items-center gap-1 mb-2">
                <ModalDoctor type="create" label="Tambah Dokter" className="btn btn-primary" />
                <ModalDoctor type="schedule" label="Tambah Jadwal Dokter" className="btn btn-primary" />
              </div>
              <TableData column={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}