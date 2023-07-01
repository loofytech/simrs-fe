import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import TableDataNoData from "./DataTableNoData";

interface TProps {
  column: any[];
  data: any[];
}

export default function TableData({column, data}: TProps) {
  const [loader, setLoader] = useState<boolean>(true);
  const [columns, setColumns] = useState<any>([]);
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setColumns(column);
    setItems(data);
    setLoader(false);
  }, [column, data]);

  if (loader) {
    return <div>Loading</div>;
  }

  return <DataTable
    columns={columns}
    data={items}
    noDataComponent={<TableDataNoData />}
    pagination
    paginationComponentOptions={{
      noRowsPerPage: true
    }}
  />
}