import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

export default function TableData() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  const columns = [
    {name: 'Nama Dokter', selector: (row: any) => row.title},
    {name: 'Unit Kerja', selector: (row: any) => row.year}
  ];

  const data = [
    {id: 1, title: 'Beetlejuice', year: '1988'},
    {id: 2, title: 'Ghostbusters', year: '1984'}
  ];

  if (loader) {
    return <div>Loading</div>;
  }

  return <DataTable
    columns={columns}
    data={data}
    pagination
    paginationComponentOptions={{
      noRowsPerPage: true
    }}
  />
}