import Cleave from "cleave.js/react";
import { useEffect, useState } from "react";

interface MProps {
  index: number;
  cbDelete(val: any): void;
  data: any;
  cbChange(ind: number, val: any): void;
}

export default function ModalDoctorSchedule({index, cbDelete, data, cbChange}: MProps) {
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    if (data) {
      setDay(data.day);
      setTime(data.time);
    }
  }, [data]);

  const cancelSchedule = () => {
    cbDelete(index);
  }

  const handleChangeDay = (evt: any, identity: string) => {
    cbChange(index, {[identity]: evt.target.value});
    setDay(evt.target.value);
  }

  return (<div className="d-flex align-items-center gap-2">
    <select className="form-control" value={day} onChange={(evt) => handleChangeDay(evt, "day")}>
      <option value="Senin">Senin</option>
      <option value="Selasa">Selasa</option>
      <option value="Rabu">Rabu</option>
      <option value="Kamis">Kamis</option>
      <option value="Jumat">Jumat</option>
      <option value="Sabtu">Sabtu</option>
      <option value="Minggu">Minggu</option>
    </select>
    <Cleave
      options={{time: true, timePattern: ["h", "m"]}}
      placeholder="JAM : MENIT"
      className="form-control"
      value={time}
      onChange={(evt) => setTime(evt.target.value)}
    />
    <button type="button" className="btn btn-icon btn-danger" onClick={cancelSchedule}>
      <span className="tf-icons bx bxs-trash-alt"></span>
    </button>
  </div>);
}