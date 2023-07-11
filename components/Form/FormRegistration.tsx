import { useState } from "react";
import SelectRegional from "../Select/SelectRegional";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import SelectStatic from "../Select/SelectStatic";
import { FiSearch } from "react-icons/fi";
import { info, success, error } from "@/utils/toastification";
import { setProvince, setRegency, setDistrict, setSubdistrict } from "@/store/reducers/regional";

export default function FormRegistration() {
  const {PROVINCE, REGENCY, DISTRICT, SUBDISTRICT} = useSelector((state: any) => state.regional);
  const dispatch = useDispatch();

  const [personResponsible, setPersonResponsible] = useState<boolean>(false);
  const [personResponsibleData, setPersonResponsibleData] = useState<any>({
    name: "",
    phone: "",
    relation: "",
    address: ""
  });

  const [formData, setFormData] = useState<any>({
    nik: "",
    name: "",
    telephone: "",
    gender: "",
    place_of_birth: "",
    date_of_birth: "",
    religion: "",
    blood: "",
    province_id: "",
    province_name: "",
    regency_id: "",
    regency_name: "",
    district_id: "",
    district_name: "",
    subdistrict_id: "",
    subdistrict_name: "",
    address: "",
    marital_status: "",
    work: "",
    education: ""
  });

  const [religions, setReligions] = useState<any>([
    {label: "Islam", value: "Islam"},
    {label: "Kristen", value: "Kristen"},
    {label: "Katolik", value: "Katolik"},
    {label: "Hindu", value: "Hindu"},
    {label: "Budha", value: "Budha"},
    {label: "Konghucu", value: "Konghucu"},
    {label: "Penghayat", value: "Penghayat"},
    {label: "Lain-lain", value: "Lain-lain"}
  ]);
  const [bloods, setBloods] = useState<any>([
    {label: "A", value: "A"},
    {label: "B", value: "B"},
    {label: "AB", value: "AB"},
    {label: "O", value: "O"}
  ]);
  const [gender, setGender] = useState<any>([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"}
  ]);
  const [mirage, setMirage] = useState<any>([
    {label: "Belum Menikah", value: "Belum Menikah"},
    {label: "Menikah", value: "Menikah"},
    {label: "Cerai", value: "Cerai"}
  ]);
  const [jobs, setJobs] = useState<any>([
    {label: "Tidak Bekerja", value: "Tidak Bekerja"},
    {label: "PNS", value: "PNS"},
    {label: "TNI/POLRI", value: "TNI/POLRI"},
    {label: "BUMN", value: "BUMN"},
    {label: "Pegawai Swasta/Wirausaha", value: "Pegawai Swasta/Wirausaha"},
    {label: "Lain-lain", value: "Lain-lain"}
  ]);
  const [graduate, setGraduate] = useState<any>([
    {label: "SD", value: "SD"},
    {label: "SMP", value: "SMP"},
    {label: "SMA", value: "SMA"}
  ]);
  const [services, setServices] = useState<any>([
    {label: "Pemeriksaan Umum", value: "Pemeriksaan Umum", selected: true},
    {label: "Medical Check Up (MCU)", value: "Medical Check Up (MCU)"},
    {label: "Atas Permintaan Sendiri (APS)", value: "Atas Permintaan Sendiri (APS)"}
  ]);
  const [units, setUnits] = useState<any>([
    {label: "Administrasi KMC", value: "Administrasi KMC"},
    {label: "IGD KMC", value: "IGD KMC"},
    {label: "POLI UMUM KMC", value: "POLI UMUM KMC"},
    {label: "POLI GIGI KMC", value: "POLI GIGI KMC"}
  ]);
  const [schedule, setSchedule] = useState<any>([
    {label: "dr. Nurfatonah - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000", value: "dr. Nurfatonah - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000"},
    {label: "dr. Puspita Dewi - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000219120", value: "dr. Puspita Dewi - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000219120"}
  ]);

  const [searchPatient, setSearchPatient] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handleSearchPatient = async (event: any) => {
    setSearchPatient(event.target.value);
    if (event.which && event.which == 13) {
      try {
        const request = await fetch("/sample/patient.json");
        const data = await request.json();

        if (data) {
          const checkByNik = data.filter((e: any) => e.nik == event.target.value);
          if (checkByNik.length > 0) {
            const match = checkByNik[0];
            setGender(gender.map((param: any) => {return {...param, selected: param.value == match.gender ? true : false}}));
            setStartDate(new Date(match.date_of_birth));
            setReligions(religions.map((param: any) => {return {...param, selected: param.value == match.religion ? true : false}}));
            setBloods(bloods.map((param: any) => {return {...param, selected: param.value == match.blood ? true : false}}));
            dispatch(setProvince({label: match.province_name, value: match.province_id}));
            dispatch(setRegency({label: match.regency_name, value: match.regency_id}));
            dispatch(setDistrict({label: match.district_name, value: match.district_id}));
            dispatch(setSubdistrict({label: match.subdistrict_name, value: match.subdistrict_id}));
            setMirage(mirage.map((param: any) => {return {...param, selected: param.value == match.marital_status ? true : false}}));
            setJobs(jobs.map((param: any) => {return {...param, selected: param.value == match.job ? true : false}}));
            setGraduate(graduate.map((param: any) => {return {...param, selected: param.value == match.education ? true : false}}));
            return setFormData((prevFormData: any) => ({...prevFormData, ...match}));
          }
          
          const checkByPhone = data.filter((e: any) => e.telephone == event.target.value);
          if (checkByPhone.length > 0) {
            const match = checkByNik[0];
            setGender(gender.map((param: any) => {return {...param, selected: param.value == match.gender ? true : false}}));
            setStartDate(new Date(match.date_of_birth));
            setReligions(religions.map((param: any) => {return {...param, selected: param.value == match.religion ? true : false}}));
            setBloods(bloods.map((param: any) => {return {...param, selected: param.value == match.blood ? true : false}}));
            dispatch(setProvince({label: match.province_name, value: match.province_id}));
            dispatch(setRegency({label: match.regency_name, value: match.regency_id}));
            dispatch(setDistrict({label: match.district_name, value: match.district_id}));
            dispatch(setSubdistrict({label: match.subdistrict_name, value: match.subdistrict_id}));
            setMirage(mirage.map((param: any) => {return {...param, selected: param.value == match.marital_status ? true : false}}));
            setJobs(jobs.map((param: any) => {return {...param, selected: param.value == match.job ? true : false}}));
            setGraduate(graduate.map((param: any) => {return {...param, selected: param.value == match.education ? true : false}}));
            return setFormData((prevFormData: any) => ({...prevFormData, ...match}));
          }
        }

        info("Data pasien tidak di temukan");
      } catch (err: any) {
        error("Error!, kesalahan sistem");
      }
    }
  }

  const handleFormData = (event: any) => {
    const {name, value} = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  }

  const handleResponsible = (event: any) => {
    setPersonResponsible(!personResponsible ? true : false)
    if (!personResponsible) {
      setPersonResponsibleData({
        name: formData.name,
        phone: formData.telephone,
        relation: "Pasien Sendiri",
        address: formData.address
      });
    } else {
      setPersonResponsibleData({
        name: "",
        phone: "",
        relation: "",
        address: ""
      });
    }
  }

  return <div className="mt-5 gap-5 grid grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col border rounded-md shadow p-3">
      <div className="flex justify-between items-center gap-1 flex-col md:gap-3 md:flex-row">
        <span className="font-bold text-xl text-primary whitespace-nowrap">Data Pasien</span>
        <div className="w-full flex items-center px-2 rounded-md border overflow-hidden">
          <div className="text-primary">
            <FiSearch size={20} />
          </div>
          <input
            type="text"
            autoFocus
            className="w-full text-sm outline-none h-8 pl-1.5 pr-2.5"
            autoComplete="off"
            placeholder="Cari berdasarkan NIK / Telepon"
            value={searchPatient}
            onChange={handleSearchPatient}
            onKeyUp={handleSearchPatient}
          />
        </div>
      </div>
      <div className="border-b mb-2 mt-2.5"></div>
      <div className="p-2 grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">NIK</span>
          <input
            type="text"
            className="w-full outline-none border text-sm h-10 px-4 rounded-md"
            autoComplete="off"
            placeholder="Nomor Induk Kependudukan"
            name="nik"
            value={formData.nik}
            onChange={handleFormData}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Nama</span>
          <input
            type="text"
            className="w-full outline-none border text-sm h-10 px-4 rounded-md"
            autoComplete="off"
            placeholder="Nama Pasien"
            name="name"
            value={formData.name}
            onChange={handleFormData}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Telepon</span>
          <input
            type="text"
            className="w-full outline-none border text-sm h-10 px-4 rounded-md"
            autoComplete="off"
            placeholder="No. Telepon / Hp"
            name="telephone"
            value={formData.telephone}
            onChange={handleFormData}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Jenis Kelamin</span>
          <SelectStatic label="Pilih Jenis Kelamin" options={gender} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Tempat Lahir</span>
          <input
            type="text"
            className="w-full outline-none border text-sm h-10 px-4 rounded-md"
            autoComplete="off"
            placeholder="Tempat Lahir"
            name="place_of_birth"
            value={formData.place_of_birth}
            onChange={handleFormData}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Tanggal Lahir</span>
          <div className="relative w-full">
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
              dateFormat={"MM/dd/yyyy"}
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              className="w-full outline-none border text-sm h-10 px-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Agama</span>
          <SelectStatic label="Pilih Agama" options={religions} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Golongan Darah</span>
          <SelectStatic label="Pilih Golongan Darah" options={bloods} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Provinsi</span>
          <SelectRegional label="Pilih Provinsi" type="province" />
        </div>
        {PROVINCE && <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Kabupaten</span>
          <SelectRegional label="Pilih Kabupaten" type="regency" />
        </div>}
        {REGENCY && <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Kecamatan</span>
          <SelectRegional label="Pilih Kecamatan" type="district" />
        </div>}
        {DISTRICT && <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Kelurahan</span>
          <SelectRegional label="Pilih Kelurahan" type="subdistrict" />
        </div>}
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Status Pernikahan</span>
          <SelectStatic label="Pilih Status Pernikahan" options={mirage} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Pekerjaan</span>
          <SelectStatic label="Pilih Pekerjaan" options={jobs} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Pendidikan Terakhir</span>
          <SelectStatic label="Pilih Pendidikan Terakhir" options={graduate} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Alamat</span>
          <input
            type="text"
            className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Alamat Lengkap"
            name="address"
            value={formData.address}
            onChange={handleFormData}
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col border rounded-md shadow p-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-primary">Penanggung Jawab</span>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              checked={personResponsible}
              onChange={handleResponsible}
              className="rounded-sm checkbox checkbox-sm checkbox-primary"
            />
            <span className="label-text ml-1 text-primary">Pasien Sendiri</span>
          </label>
        </div>
        <div className="border-b my-2"></div>
        <div className="p-2 grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Nama</span>
            <input
              type="text"
              className="w-full outline-none border text-sm h-10 px-4 rounded-md"
              autoComplete="off"
              placeholder="Nomor Lengkap"
              value={personResponsibleData.name}
              onChange={(evt) => setPersonResponsibleData(evt.target.value)}
              disabled={personResponsible}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Telepon</span>
            <input
              type="text"
              className="w-full outline-none border text-sm h-10 px-4 rounded-md"
              autoComplete="off"
              placeholder="No. Telepon / Hp"
              value={personResponsibleData.phone}
              onChange={(evt) => setPersonResponsibleData(evt.target.value)}
              disabled={personResponsible}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Hubungan</span>
            <input
              type="text"
              className="w-full outline-none border text-sm h-10 px-4 rounded-md"
              autoComplete="off"
              placeholder="Hubungan Dengan Pasien"
              value={personResponsibleData.relation}
              onChange={(evt) => setPersonResponsibleData(evt.target.value)}
              disabled={personResponsible}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Alamat</span>
            <input
              type="text"
              className="w-full outline-none border text-sm h-10 px-4 rounded-md"
              autoComplete="off"
              placeholder="Alamat Lengkap"
              value={personResponsibleData.address}
              onChange={(evt) => setPersonResponsibleData(evt.target.value)}
              disabled={personResponsible}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col border rounded-md shadow p-3">
        <span className="font-bold text-lg text-primary">Pelayanan Klinik</span>
        <div className="border-b my-2"></div>
        <div className="p-2 grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold">Layanan</span>
            <SelectStatic label="Pilih Layanan" options={services} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold">Unit</span>
            <SelectStatic label="Pilih Unit" options={units} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold">Jadwal Dokter / Penanggung Jawab</span>
            <SelectStatic label="Pilih Jadwal" options={schedule} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold">Dokter Luar</span>
            <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Dokter Luar" />
          </div>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-end gap-2">
        <button type="button" className="h-10 px-5 rounded-md text-primary border-2 border-primary font-bold">Kembali</button>
        <button type="button" className="h-10 px-5 rounded-md text-white border-2 border-primary font-bold bg-primary">Submit</button>
      </div>
    </div>
  </div>;
}