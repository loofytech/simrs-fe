import { useEffect, useState } from "react";
import ModalDoctorSchedule from "./ModalDoctorSchedule";

type DType = {
  id: number;
  name: string;
  unit: string;
}

interface MProps {
  label: string;
  className?: string;
  type: string;
  data?: DType;
}

export default function ModalDoctor({label, className, type, data}: MProps) {
  const [name, setName] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [schedule, setSchedule] = useState<any>([
    {day: "Senin", time: ""},
    {day: "Selasa", time: ""},
    {day: "Rabu", time: ""},
    {day: "Kamis", time: ""}
  ]);

  const setUpdateData = () => {
    if (data) {
      setName(data.name);
      setUnit(data.unit);
    }
  }

  const setDeleteData = () => {
    if (data) {
      setName(data.name);
    }
  }

  const addRowSchedule = () => {
    setSchedule((sc: any) => [...sc, {day: "", time: ""}]);
  }

  const cbScheduleDelete = (data: any) => {
    const s = schedule.filter((a: any, i: number) => i !== data);
    setSchedule(s);
  }

  const cbSchedule = (index: number, data: any) => {
    const s = schedule.map((a: any, i: number) => i === index ? {...a, ...data} : a);
    setSchedule(s);
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
                <label className="form-label">NAMA DOKTER</label>
                <input type="text" autoComplete="off" className="form-control" placeholder="Enter Name" />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">UNIT KERJA</label>
                <select className="form-control">
                  <option value="1">Bedah Syaraf</option>
                  <option value="2">Bedah Kulit</option>
                </select>
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
                <label className="form-label">NAMA DOKTER</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">UNIT KERJA</label>
                <select className="form-control" value={unit} onChange={(evt) => setUnit(evt.target.value)}>
                  <option value="Bedah Syaraf">Bedah Syaraf</option>
                  <option value="Bedah Kulit">Bedah Kulit</option>
                </select>
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
  if (type === "schedule") return (<>
    <button type="button" className={className} data-bs-toggle="modal" data-bs-target={"#" + type}>
      {label}
    </button>
    <div className="modal fade" id={type} data-bs-backdrop="static" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
      <div className="modal-dialog">
        <form className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{label}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <hr style={{height: "0.5px"}} />
          <div className="modal-body py-0">
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">NAMA DOKTER</label>
                <input type="text" autoComplete="off" className="form-control" placeholder="Enter Name" />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">JADWAL DOKTER</label>
                <button type="button" onClick={addRowSchedule} className="d-block btn btn-sm btn-primary">Tambah</button>
                <div className="mt-3 d-flex flex-column gap-2">
                  {schedule.map((sc: any, iteration: number) => {
                    return <ModalDoctorSchedule
                      key={iteration}
                      data={sc}
                      index={iteration}
                      cbDelete={cbScheduleDelete}
                      cbChange={cbSchedule}
                    />;
                  })}
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
}