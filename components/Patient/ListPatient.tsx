import TableData from "@/components/Table/DataTable";
import { useDispatch } from "react-redux";
import { setCreate } from "@/store/reducers/patientReducer";

export default function ListPatient() {
  const dispatch = useDispatch();

  const columns = [
    {name: 'NO. REKAMEDIK', selector: (row: any) => row.no_rekamedik},
    {name: 'NAMA PASIEN', selector: (row: any) => row.name},
    {name: 'JENIS KELAMIN', selector: (row: any) => row.jenis_kelamin},
    {name: 'TANGGAL LAHIR', selector: (row: any) => row.birthdate},
    {name: 'GOL. DARAH', selector: (row: any) => row.gol},
    {name: 'NO. TELP', selector: (row: any) => row.telephone},
    {name: 'AKSI', selector: (row: any) => {
      return <button type="button" className="btn btn-sm btn-primary">Periksa</button>
    }}
  ];

  const data = [
    {
      id: 1,
      no_rekamedik: "000001",
      name: 'Agung Ardiyanto',
      telephone: "082179099557",
      jenis_kelamin: "Laki - Laki",
      gol: "AB",
      birthdate: "14 Desember 1996"
    },
    {
      id: 2,
      no_rekamedik: "000002",
      name: 'Kiki Andriawan',
      telephone: "082179099558",
      jenis_kelamin: "Laki - Laki",
      gol: "O",
      birthdate: "17 Agustus 1945"
    },
  ];

  const createPatient = () => {
    dispatch(setCreate(true));
  }

  return <div className="col-lg-12">
    <div className="card">
      <div className="card-body">
        <h4 className="mb-3">Daftar Pasien</h4>
        <div className="d-flex align-items-center gap-1 mb-2">
          <button type="button" className="btn btn-primary" onClick={createPatient}>Pemdaftaran Pasien</button>
        </div>
        <TableData column={columns} data={data} />
      </div>
    </div>
  </div>;
}