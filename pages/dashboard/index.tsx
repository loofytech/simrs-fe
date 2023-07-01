import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Dashboard() {
  return (<AppLayout title="Dashboard">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-2xl">Good afternoon, Agung Ardiyanto!</h3>
      <span className="text-sm text-gray-500">{"It's"} Tuesday, 27 June</span>
      <div className="text-sm mt-11 font-semibold">
        <div className="mt-4 flex items-center flex-wrap gap-2.5 text-xs md:text-sm md:gap-1.5">
          <button className="bg-white border rounded-full h-9 px-6 hover:bg-gray-100">Request time off</button>
          <button className="bg-white border rounded-full h-9 px-6 hover:bg-gray-100">Request overtime</button>
          <button className="bg-white border rounded-full h-9 px-6 hover:bg-gray-100">Request attendance</button>
        </div>
      </div>
      <Image src={"/img/dashboard_check.png"} width={170} height={170} className="absolute bottom-0 right-20 text-sm hidden md:inline" alt="" />
    </div>
    {/* <div className="flex items-start gap-3">
      <Carousel />
      <div></div>
    </div> */}
  </AppLayout>);
}