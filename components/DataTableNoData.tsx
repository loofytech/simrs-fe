import Image from "next/image";

export default function TableDataNoData() {
  return (<div className="flex flex-col items-center justify-center mt-10 mb-7">
    <Image src={"/svg/no-activity.svg"} width={120} height={120} alt="" />
    <p className="font-semibold mt-5">There is no data to display</p>
    <p className="text-xs text-gray-500 md:text-sm">Your emergency contact data will be displayed here.</p>
  </div>);
}