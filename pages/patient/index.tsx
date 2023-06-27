import FormPatient from "@/components/Patient/FormPatient";
import ListPatient from "@/components/Patient/ListPatient";
import AppLayout from "@/layouts/AppLayout";
import { useSelector } from "react-redux";

export default function Patient() {
  const {CREATE_PATIENT} = useSelector((state: any) => state.patientReducer);

  return (
    <AppLayout>
      <div className="row">
        {!CREATE_PATIENT ? <ListPatient /> : <FormPatient />}
      </div>
    </AppLayout>
  );
}