export default function FormPatient() {
  return <div className="col-md-8 col-sm-12 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="mb-3">Pendaftaran Pasien</h4>
        <form className="mt-4" onSubmit={() => {}}>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Nama Pasien</label>
              <input type="text" className="form-control" autoComplete="off" />
            </div>
            <div className="col-6">
              <label className="form-label">No. Telpon</label>
              <input type="text" className="form-control" autoComplete="off" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>;
}