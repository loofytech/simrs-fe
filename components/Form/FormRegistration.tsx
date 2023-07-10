import { useState } from "react";
import SelectRegional from "../Select/SelectRegional";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import SelectStatic from "../Select/SelectStatic";

export default function FormRegistration() {
  const {PROVINCE, REGENCY, DISTRICT, SUBDISTRICT} = useSelector((state: any) => state.regional);
  const [startDate, setStartDate] = useState(new Date());
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
  const jobs = [
    {label: "Tidak Bekerja", value: "Tidak Bekerja"},
    {label: "PNS", value: "PNS"},
    {label: "TNI/POLRI", value: "TNI/POLRI"},
    {label: "BUMN", value: "BUMN"},
    {label: "Pegawai Swasta/Wirausaha", value: "Pegawai Swasta/Wirausaha"},
    {label: "Lain-lain", value: "Lain-lain"}
  ];
  const graduate = [
    {label: "SD", value: "SD"},
    {label: "SMP", value: "SMP"},
    {label: "SMA", value: "SMA"}
  ];
  const services = [
    {label: "Pemeriksaan Umum", value: "Pemeriksaan Umum", selected: true},
    {label: "Medical Check Up (MCU)", value: "Medical Check Up (MCU)"},
    {label: "Atas Permintaan Sendiri (APS)", value: "Atas Permintaan Sendiri (APS)"}
  ];
  const units = [
    {label: "Administrasi KMC", value: "Administrasi KMC"},
    {label: "IGD KMC", value: "IGD KMC"},
    {label: "POLI UMUM KMC", value: "POLI UMUM KMC"},
    {label: "POLI GIGI KMC", value: "POLI GIGI KMC"}
  ];
  const schedule = [
    {label: "dr. Nurfatonah - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000", value: "dr. Nurfatonah - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000"},
    {label: "dr. Puspita Dewi - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000", value: "dr. Puspita Dewi - Senin(14:30:00 - 21:00:00) - POLI UMUM KMC - 1000"}
  ];

  return <div className="mt-5 gap-5 grid grid-cols-1">
    <div className="flex flex-col border rounded-md shadow p-3">
      <span className="font-bold text-lg text-primary">Data Pasien</span>
      <div className="border-b my-2"></div>
      <div className="p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">NIK</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Nomor Induk Kependudukan" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Nama</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Nama Pasien" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Telepon</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="No. Telepon / Hp" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Jenis Kelamin</span>
          <SelectStatic label="Pilih Jenis Kelamin" options={gender} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="text-sm font-semibold">Tempat Lahir</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Tempat Lahir" />
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
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Alamat</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Alamat Lengkap" />
        </div>
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
      </div>
    </div>
    <div className="flex flex-col border rounded-md shadow p-3">
      <span className="font-bold text-lg text-primary">Penanggung Jawab</span>
      <div className="border-b my-2"></div>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Nama</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Nomor Lengkap" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Telepon</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="No. Telepon / Hp" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Hubungan</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Hubungan Dengan Pasien" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Alamat</span>
          <input type="text" className="w-full outline-none border text-sm h-10 px-4 rounded-md" autoComplete="off" placeholder="Alamat Lengkap" />
        </div>
      </div>
    </div>
    <div className="flex flex-col border rounded-md shadow p-3">
      <span className="font-bold text-lg text-primary">Pelayanan Klinik</span>
      <div className="border-b my-2"></div>
      <div className="p-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
  </div>;
}