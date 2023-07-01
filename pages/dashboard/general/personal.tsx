import BasicInfo from "@/components/Personal/BasicInfo";
import EmergencyContact from "@/components/Personal/EmergencyContact";
import FamilyInfo from "@/components/Personal/FamilyInfo";
import AppLayout from "@/layouts/AppLayout";
import { useState } from "react";

export default function Personal() {
  const [tab, setTab] = useState<number>(1);

  const tabActive = (active: number) => {
    setTab(active);
  }

  return (<AppLayout title="Personal Information">
    <div className="border rounded-lg bg-white shadow p-6 relative">
      <h3 className="text-xl font-semibold">Personal Information</h3>
      <div className="tabs mt-10 border-b gap-6">
        <a className={`tab tab-bordered px-0 ${tab !== 1 ? "border-b-0" : "tab-active font-bold"}`} onClick={() => tabActive(1)}>Basic Info</a> 
        <a className={`tab tab-bordered px-0 ${tab !== 2 ? "border-b-0" : "tab-active font-bold"}`} onClick={() => tabActive(2)}>Family Info</a> 
        <a className={`tab tab-bordered px-0 ${tab !== 3 ? "border-b-0" : "tab-active font-bold"}`} onClick={() => tabActive(3)}>Emergency contact</a>
      </div>
      <div className="mt-5">
        {tab === 1 && <BasicInfo />}
        {tab === 2 && <FamilyInfo />}
        {tab === 3 && <EmergencyContact />}
      </div>
    </div>
  </AppLayout>);
}