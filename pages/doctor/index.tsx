import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/Table/DataTable";

export default function Doctor() {
  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 order-0">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-0">Daftar Dokter</h4>
              <TableData />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}