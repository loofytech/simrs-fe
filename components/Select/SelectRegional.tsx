import { requestDistrict, requestProvince, requestRegency, requestSubDistrict } from "@/utils/requestRegional";
import { FiChevronDown } from "react-icons/fi";

interface CProps {
  label: string;
  type: "province" | "regency" | "district" | "subdistrict"
}

export default function SelectRegional({label, type}: CProps) {
  const requestData = async () => {
    if (type == "province") {
      const request = await requestProvince();
      console.log(request);
    }
    if (type == "regency") {
      const request = await requestRegency("18");
      console.log(request);
    }
    if (type == "district") {
      const request = await requestDistrict("18.01");
      console.log(request);
    }
    if (type == "subdistrict") {
      const request = await requestSubDistrict("18.01.07");
      console.log(request);
    }
  }

  return (<>
    <div
      className="w-full flex items-center justify-between cursor-pointer border text-sm h-10 px-4 rounded-md"
      onClick={requestData}
    >
      <span className="text-gray-400">{label}</span>
      <FiChevronDown size={22} />
    </div>
  </>)
}