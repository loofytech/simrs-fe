import AppLayout from "@/layouts/AppLayout";
import ModalMedicine from "@/components/Modal/ModalMedicine";
import TableData from "@/components/Table/DataTable";
import { formatIDR } from "@/utils/globalFunction";

export default function MedicineEntry() {
  const columns = [
    {name: "NAMA OBAT", selector: (row: any) => row.name},
    {name: "SATUAN / JENIS", selector: (row: any) => row.unit},
    {name: "HARGA", selector: (row: any) => {
      return formatIDR(row.price, "Rp ");
    }},
    {name: "JUMLAH", selector: (row: any) => row.qty},
    {name: "SUBTOTAL", selector: (row: any) => {
      return formatIDR(row.sub_total, "Rp ");
    }},
    {name: "WAKTU MASUK", selector: (row: any) => row.created_at}
  ];

  const data = [
    {id: 1, name: "Obat Sakit Perut", unit: "Pill", price: 18000, qty: 134, sub_total: 18000 * 134, created_at: "05, Juni 2023 12:24 WIB"},
    {id: 2, name: "Oskadon", unit: "Tablet", price: 6000, qty: 700, sub_total: 6000 * 700, created_at: "05, Juni 2023 12:24 WIB"},
    {id: 3, name: "Antangin", unit: "Sirup", price: 25000, qty: 49, sub_total: 25000 * 49, created_at: "05, Juni 2023 12:24 WIB"}
  ];

  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 order-0">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-3">Obat Masuk</h4>
              {/* <div className="d-flex align-items-center gap-1 mb-2">
                <ModalMedicine type="create" label="Tambah Data" className="btn btn-primary" />
              </div> */}
              <TableData column={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}