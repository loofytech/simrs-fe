import { requestDistrict, requestProvince, requestRegency, requestSubDistrict } from "@/utils/requestRegional";
import { FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setProvince, setRegency, setDistrict, setSubdistrict } from "@/store/reducers/regional";
import { useState } from "react";

interface CProps {
  label: string;
  type: "province" | "regency" | "district" | "subdistrict";
}

export default function SelectRegional({label, type}: CProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const {PROVINCE, REGENCY, DISTRICT, SUBDISTRICT} = useSelector((state: any) => state.regional);
  const dispatch = useDispatch();

  const requestData = async () => {
    setOptions(null);
    setOpen(true);

    let data = [];

    if (type == "province") {
      const request = await requestProvince();
      data = request.map((d: any) => {
        return {
          label: d.name,
          value: d.id
        }
      });
    }
    if (type == "regency") {
      const request = await requestRegency(PROVINCE);
      data = request.map((d: any) => {
        return {
          label: d.name,
          value: d.id
        }
      });
    }
    if (type == "district") {
      const request = await requestDistrict(REGENCY);
      data = request.map((d: any) => {
        return {
          label: d.name,
          value: d.id
        }
      });
    }
    if (type == "subdistrict") {
      const request = await requestSubDistrict(DISTRICT);
      data = request.map((d: any) => {
        return {
          label: d.name,
          value: d.id
        }
      });
    }

    setOptions(data);
    setResult(data);
  }

  const selectedItem = (value: any, label: string) => {
    if (type == "province") {
      dispatch(setProvince(null));
      dispatch(setRegency(null));
      dispatch(setDistrict(null));
      dispatch(setSubdistrict(null));
      setTimeout(() => {
        dispatch(setProvince(value));
      }, 100);
    }
    if (type == "regency") {
      dispatch(setRegency(value));
      dispatch(setDistrict(null));
      dispatch(setSubdistrict(null));
    }
    if (type == "district") {
      dispatch(setDistrict(value));
      dispatch(setSubdistrict(null));
    }
    if (type == "subdistrict") {
      dispatch(setSubdistrict(value));
    }

    setSelectedLabel(label);
    setOpen(false);
  }

  const clearSelectedItem = () => {
    setSelectedLabel("");
    if (type == "province") {
      dispatch(setProvince(null));
      dispatch(setRegency(null));
      dispatch(setDistrict(null));
      dispatch(setSubdistrict(null));
    }
    if (type == "regency") {
      dispatch(setRegency(null));
      dispatch(setDistrict(null));
      dispatch(setSubdistrict(null));
    }
    if (type == "district") {
      dispatch(setDistrict(null));
      dispatch(setSubdistrict(null));
    }
    if (type == "subdistrict") {
      dispatch(setSubdistrict(null));
    }
  }

  const handleSearch = (value: any) => {
    const data = options.filter((o: any) => o.label.toLowerCase().includes(value));
    setResult(data);
    setSearch(value);
  }

  return (<>
    <div
      className="dropdown w-full flex items-center justify-between cursor-pointer border text-sm h-10 px-4 rounded-md"
      onClick={requestData}
    >
      {!selectedLabel ? <span className="text-gray-400">{label}</span> : <div className="relative flex items-center w-full">
        <span className="">{selectedLabel}</span>
        <div className="h-full bg-primary text-white flex items-center justify-center absolute w-5 rounded-full right-1" onClick={clearSelectedItem}>
          <FiX size={14} />
        </div>
      </div>}
      <FiChevronDown size={22} />
    </div>
    <input type="checkbox" checked={open} onChange={() => {}} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box overflow-hidden p-0 flex flex-col h-full">
        <div className="sticky top-0 z-50 bg-white pt-5 pb-2" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{type == "province" ? "Provinsi" : type == "regency" ? "Kabupaten" : type == "district" ? "Kecamatan" : "Kelurahan"}</h3>
            <div className="w-auto h-auto cursor-pointer bg-primary p-1 rounded-full" onClick={() => setOpen(false)}>
              <FiX size={24} color="#FFF" />
            </div>
          </div>
          <div className="border flex items-center gap-2 rounded-md h-10 pl-2 pr-4 mt-3">
            <div className="text-primary">
              <FiSearch size={22} />
            </div>
            <input
              type="text"
              className="w-full outline-none text-sm h-full"
              autoComplete="off"
              placeholder="Cari Provinsi"
              value={search}
              onChange={(evt) => handleSearch(evt.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 h-full overflow-auto with-custom-scrollbar" style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
          {!result ? <div className="px-4 py-2">Loading...</div> : result.map((option: any, key: number) => {
            return (
              <div
                className="py-2 cursor-pointer hover:text-primary"
                onClick={() => selectedItem(option.value, option.label)}
                key={key}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      </div>
      <label className="modal-backdrop" onClick={() => setOpen(false)}></label>
    </div>
  </>)
}