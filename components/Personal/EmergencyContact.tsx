import TableData from "../DataTable";

export default function EmergencyContact() {
  const columns = [
    {name: "Name", selector: (row: any) => row.name},
    {name: "Relationship", selector: (row: any) => row.relationship},
    {name: "Phone number", selector: (row: any) => row.phone}
  ];

  const data: any[] = [
    // {
    //   name: "Agung Ardiyanto",
    //   relationship: "Orangtua Laki - Laki",
    //   phone: "082179099557"
    // }
  ];

  return (<>
    <TableData column={columns} data={data} />
  </>);
}