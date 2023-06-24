import AppLayout from "@/layouts/AppLayout";

export default function Nested() {
  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-12 mb-4 order-0">
          <div className="card">
            <div className="card-body">
              sample page nested
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}