import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCreatePatient } from "@/store/reducers/modal";
import { FiLoader, FiX, FiSearch, FiInfo } from "react-icons/fi";
import SelectRegional from "../Select/SelectRegional";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectStatic from "../Select/SelectStatic";

interface CProps {
  title: string;
}

export default function ModalCreatePatient({title}: CProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [registration, setRegistration] = useState<boolean>(false);
  const [searchLoad, setSearchLoad] = useState<boolean>(false);
  const [infoResultSearch, setInfoResultSearch] = useState<boolean>(false);
  const {CREATE_PATIENT} = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const religions = [
    {label: "Islam", value: "Islam"},
    {label: "Kristen", value: "Kristen"},
    {label: "Katolik", value: "Katolik"},
    {label: "Hindu", value: "Hindu"},
    {label: "Budha", value: "Budha"},
    {label: "Konghucu", value: "Konghucu"},
    {label: "Penghayat", value: "Penghayat"},
    {label: "Lain-lain", value: "Lain-lain"}
  ];

  const bloods = [
    {label: "A", value: "A"},
    {label: "B", value: "B"},
    {label: "AB", value: "AB"},
    {label: "O", value: "O"}
  ];

  const gender = [
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"}
  ];

  const mirage = [
    {label: "Belum Menikah", value: "Belum Menikah"},
    {label: "Menikah", value: "Menikah"},
    {label: "Cerai", value: "Cerai"}
  ];

  const handleClose = () => {
    dispatch(openCreatePatient(false));
  }

  const handleSearch = (evt: any) => {
    evt.preventDefault();
    setSearchLoad(true);
    setTimeout(() => {
      setSearchLoad(false);
      setInfoResultSearch(true);
      dispatch(openCreatePatient(false));
    }, 3000);
  }

  const handleSearchAgain = () => {
    setInfoResultSearch(false);
    dispatch(openCreatePatient(true));
  }

  const openRegistrationForm = () => {
    setInfoResultSearch(false);
    dispatch(openCreatePatient(false));
    setRegistration(true);
  }

  return (<>
    {/* modal search */}
    <input type="checkbox" id="modal" checked={CREATE_PATIENT} onChange={() => {}} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box px-0">
        <div className="flex items-center justify-between mb-5" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="w-auto h-auto cursor-pointer bg-primary p-1 rounded-full" onClick={handleClose}>
            <FiX size={24} color="#FFF" />
          </div>
        </div>
        <div style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Cari pasien</span>
            <form className="flex gap-2 items-center" onSubmit={(evt) => handleSearch(evt)}>
              <input
                autoComplete="off"
                type="text"
                className="flex-1 border outline-none text-sm h-10 px-4 rounded-md"
                placeholder="Cari nomor rekamedik / nik / telepon"
                disabled={searchLoad}
              />
              <button
                type="submit"
                className={`h-10 w-20 bg-primary flex items-center justify-center gap-1 text-white rounded-md ${!searchLoad ? "opacity-100" : "opacity-80"}`}
                disabled={searchLoad}
              >
                {!searchLoad ? <FiSearch size={18} /> : <FiLoader size={18} className="animate-spin" />}
                <span className="text-sm">Cari</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* modal confirmation search result */}
    <input type="checkbox" id="resultSearch" checked={infoResultSearch} onChange={() => {}} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box px-0">
        <div className="flex flex-col items-center justify-center gap-2" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <FiInfo size={100} className="text-blue-400" />
          <div className="font-bold text-lg">Data pasien yang anda cari tidak ditemukan</div>
          <div className="w-full flex items-center gap-2 text-sm justify-center mt-5">
            <button
              className="h-10 px-5 text-white bg-primary rounded-md font-bold"
              onClick={handleSearchAgain}
            >
              Cari lagi
            </button>
            <button
              className="h-10 px-5 text-white bg-blue-500 rounded-md font-bold"
              onClick={openRegistrationForm}
            >
              Buat data baru
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* modal form registration */}
    <input type="checkbox" id="registration" checked={registration} onChange={() => {}} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box overflow-hidden p-0 flex flex-col">
        <div className="flex sticky top-0 z-50 bg-white items-center justify-between py-5" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="w-auto h-auto cursor-pointer bg-primary p-1 rounded-full" onClick={() => setRegistration(false)}>
            <FiX size={24} color="#FFF" />
          </div>
        </div>
        <div className="flex-1 overflow-auto with-custom-scrollbar" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">NIK</span>
            <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Nomor Induk Kependudukan" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Nama</span>
            <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Nama Pasien" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Telepon</span>
            <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="No. Telepon / Hp" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2 mb-3.5 w-full">
              <span className="text-sm font-semibold">Tempat Lahir</span>
              <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Tempat Lahir" />
            </div>
            <div className="flex flex-col gap-2 mb-3.5 w-full">
              <span className="text-sm font-semibold">Tanggal Lahir</span>
              <DatePicker
                renderCustomHeader={({date, changeYear, changeMonth}) => (
                  <div className="flex gap-2 px-3">
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(parseInt(value))}
                      className="w-full p-1 rounded-md outline-none"
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                      className="w-full p-1 rounded-md outline-none"
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                className="w-full outline-none border text-sm h-10 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Provinsi</span>
            <SelectRegional label="Pilih Provinsi" type="province" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Kabupaten</span>
            <SelectRegional label="Pilih Kabupaten" type="regency" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Kecamatan</span>
            <SelectRegional label="Pilih Kecamatan" type="district" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Kelurahan</span>
            <SelectRegional label="Pilih Kelurahan" type="subdistrict" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5">
            <span className="text-sm font-semibold">Alamat</span>
            <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Alamat Lengkap" />
          </div>
          <div className="flex flex-col gap-2 mb-3.5 w-full">
            <span className="text-sm font-semibold">Agama</span>
            <SelectStatic label="Pilih Agama" options={religions} />
          </div>
          <div className="flex flex-col gap-2 mb-3.5 w-full">
            <span className="text-sm font-semibold">Golongan Darah</span>
            <SelectStatic label="Pilih Golongan Darah" options={bloods} />
          </div>
          <div className="flex flex-col gap-2 mb-3.5 w-full">
            <span className="text-sm font-semibold">Jenis Kelamin</span>
            <SelectStatic label="Pilih Jenis Kelamin" options={gender} />
          </div>
          <div className="flex flex-col gap-2 mb-3.5 w-full">
            <span className="text-sm font-semibold">Status Pernikahan</span>
            <SelectStatic label="Pilih Status Pernikahan" options={mirage} />
          </div>
        </div>
        <div className="flex sticky bottom-0 z-50 bg-white items-center justify-end gap-2 py-5" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <button type="button" className="text-sm border border-primary rounded-md px-5 py-1.5 font-semibold text-primary">Batal</button>
          <button type="button" className="text-sm border border-primary rounded-md px-4 py-1.5 font-semibold text-white bg-primary">Submit</button>
        </div>
      </div>
    </div>
  </>)
}