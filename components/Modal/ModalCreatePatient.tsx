import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCreatePatient } from "@/store/reducers/modal";
import { FiLoader, FiX, FiSearch, FiInfo } from "react-icons/fi";
import SelectRegional from "../Select/SelectRegional";

interface CProps {
  title: string;
}

export default function ModalCreatePatient({title}: CProps) {
  const [registration, setRegistration] = useState<boolean>(false);
  const [searchLoad, setSearchLoad] = useState<boolean>(false);
  const [infoResultSearch, setInfoResultSearch] = useState<boolean>(false);
  const {CREATE_PATIENT} = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

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
      <div className="modal-box px-0">
        <div className="flex items-center justify-between mb-5" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="w-auto h-auto cursor-pointer bg-primary p-1 rounded-full" onClick={() => setRegistration(false)}>
            <FiX size={24} color="#FFF" />
          </div>
        </div>
        <div style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
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
        </div>
      </div>
    </div>
  </>)
}