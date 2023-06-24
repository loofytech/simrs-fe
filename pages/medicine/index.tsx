import AppLayout from "@/layouts/AppLayout";
import TableData from "@/components/Table/DataTable";
import { formatIDR } from "@/utils/globalFunction";
import ModalMedicine from "@/components/Modal/ModalMedicine";

export default function Medicine() {
  const columns = [
    {name: "NAMA OBAT", selector: (row: any) => row.name},
    {name: "SATUAN / JENIS", selector: (row: any) => row.unit},
    {name: "HARGA", selector: (row: any) => {
      return formatIDR(row.price, "Rp ");
    }},
    {name: "STOK", selector: (row: any) => row.stock},
    {name: "AKSI", selector: (row: any) => {
      return <div className="d-flex align-items-center gap-1">
        <ModalMedicine type="update" data={row} label="Update" className="btn btn-sm btn-primary" />
        <ModalMedicine type="delete" data={row} label="Delete" className="btn btn-sm btn-danger" />
      </div>
    }}
  ];

  const data = [
    {id: 1, name: "Obat Sakit Perut", unit: "Pill", price: 18000, stock: 1000},
    {id: 2, name: "Oskadon", unit: "Tablet", price: 6000, stock: 800},
    {id: 3, name: "Antangin", unit: "Sirup", price: 25000, stock: 50}
  ];

  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 order-0">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-3">Daftar Obat</h4>
              <div className="d-flex align-items-center gap-1 mb-2">
                <ModalMedicine type="create" label="Tambah Obat" className="btn btn-primary" />
              </div>
              <TableData column={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}