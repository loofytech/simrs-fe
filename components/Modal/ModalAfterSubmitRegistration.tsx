import { openCompleteRegistration } from "@/store/reducers/modal";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export default function ModalAfterSubmitRegistration() {
  const {AFTER_SUBMIT_REGISTRATION} = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNextInput = () => {
    dispatch(openCompleteRegistration(false));
    setTimeout(() => {
      return location.reload();
    }, 500);
  }

  const handleCloseInput = () => {
    dispatch(openCompleteRegistration(false));
    router.push({pathname: router.pathname, hash: ""});
    setTimeout(() => {
      return location.reload();
    }, 500);
  }

  return (<>
    <input
      type="checkbox"
      id="toggle"
      checked={AFTER_SUBMIT_REGISTRATION}
      onChange={() => {}}
      className="modal-toggle"
    />
    <div className="modal">
      <div className="modal-box rounded-md">
        <h3 className="font-bold text-lg">Proses pendaftaran selesai</h3>
        <p className="py-4">Apakah, anda ingin melakukan pendaftaran lagi?</p>
        <div className="modal-action">
          <button type="button" onClick={handleCloseInput} className="btn rounded-md">Tidak</button>
          <button type="button" onClick={handleNextInput} className="rounded-md btn bg-primary text-white hover:bg-primary">Ya, Daftar Lagi</button>
        </div>
      </div>
    </div>
  </>);
}