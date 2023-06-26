import FormPatient from "@/components/Patient/FormPatient";
import ListPatient from "@/components/Patient/ListPatient";
import AppLayout from "@/layouts/AppLayout";
import { useSelector } from "react-redux";

export default function Patient() {
  const {CREATE_PATIENT} = useSelector((state: any) => state.patientReducer);

  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 order-0">
          {!CREATE_PATIENT ? <ListPatient /> : <FormPatient />}
        </div>
      </div>
    </AppLayout>
  );
}