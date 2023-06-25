import { formatIDR } from "@/utils/globalFunction";
import Cleave from "cleave.js/react";
import { useEffect, useState } from "react";

type DType = {
  id: number;
  name: string;
  unit: string;
  price: number;
  stock: number
}

interface MProps {
  label: string;
  className?: string;
  type: string;
  data?: DType;
}

export default function ModalMedicine({label, className, type, data}: MProps) {
  const [name, setName] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");

  const setUpdateData = () => {
    if (data) {
      setName(data.name);
      setUnit(data.unit);
      setPrice(formatIDR(data.price));
      setStock(data.stock.toString());
    }
  }

  const setDeleteData = () => {
    if (data) {
      setName(data.name);
    }
  }

  if (type === "create") return (<>
    <button type="button" className={className} data-bs-toggle="modal" data-bs-target={"#" + type}>
      {label}
    </button>
    <div className="modal fade" id={type} data-bs-backdrop="static" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-body py-0">
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">NAMA OBAT</label>
                <input type="text" autoComplete="off" className="form-control" placeholder="Cth: Antangin" />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">SATUAN / JENIS</label>
                <select className="form-control">
                  <option value="Pill">Pill</option>
                  <option value="Sirup">Sirup</option>
                  <option value="Tablet">Tablet</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">HARGA</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-text">Rp</span>
                  <Cleave
                    options={{numeral: true, numeralDecimalMark: "thousand", delimiter: ".", numeralPositiveOnly: true}}
                    className="form-control"
                    autoComplete="off"
                    placeholder="Cth: 10.000"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">STOK AWAL</label>
                <Cleave
                  options={{numeral: true, delimiter: "", numeralPositiveOnly: true}}
                  className="form-control"
                  autoComplete="off"
                  placeholder="Cth: 10.000"
                />
              </div>
            </div>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Batal
            </button>
            <button type="button" className="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </>);
  if (type === "update") return (<>
    <button type="button" onClick={setUpdateData} className={className} data-bs-toggle="modal" data-bs-target={"#" + type + data?.id}>
      {label}
    </button>
    <div className="modal fade" id={type + data?.id} data-bs-backdrop="static" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
      <form className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-body py-0">
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">NAMA OBAT</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Cth: Antangin"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">SATUAN / JENIS</label>
                <select className="form-control" value={unit} onChange={(evt) => setUnit(evt.target.value)}>
                  <option value="Pill">Pill</option>
                  <option value="Sirup">Sirup</option>
                  <option value="Tablet">Tablet</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">HARGA</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-text">Rp</span>
                  <Cleave
                    options={{numeral: true, numeralDecimalMark: "thousand", delimiter: ".", numeralPositiveOnly: true}}
                    className="form-control"
                    autoComplete="off"
                    placeholder="Cth: 10.000"
                    value={price}
                    onChange={(evt) => setPrice(evt.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Batal
            </button>
            <button type="button" className="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </>);
  if (type === "delete") return (<>
    <button type="button" onClick={setDeleteData} className={className} data-bs-toggle="modal" data-bs-target={"#" + type + data?.id}>
      {label}
    </button>
    <div className="modal fade" id={type + data?.id} data-bs-backdrop="static" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-body">
            <div className="row">
              <div className="col">
                Apakah kamu yakin ingin menghapus data <b>{name}</b>
              </div>
            </div>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Batal
            </button>
            <button type="button" className="btn btn-danger">Hapus</button>
          </div>
        </form>
      </div>
    </div>
  </>);
}