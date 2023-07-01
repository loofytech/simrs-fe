import TableData from "../DataTable";

export default function FamilyInfo() {
  const columns = [
    {name: "Name", selector: (row: any) => row.name},
    {name: "Relationship", selector: (row: any) => row.relationship},
    {name: "Birthdate", selector: (row: any) => row.birthdate},
    {name: "Marital status", selector: (row: any) => row.marital_status},
    {name: "Gender", selector: (row: any) => row.gender},
    {name: "Job", selector: (row: any) => row.job},
    {name: "Religion", selector: (row: any) => row.religion}
  ];

  const data: any[] = [
    // {
    //   name: "Agung Ardiyanto",
    //   relationship: "Orangtua Laki - Laki",
    //   birthdate: "14 Dec 1945",
    //   marital_status: "Menikah",
    //   gender: "Laki - Laki",
    //   job: "Karyawan Swasta",
    //   religion: "Islam"
    // }
  ];

  return (<>
    <TableData column={columns} data={data} />
  </>);
}