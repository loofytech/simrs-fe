import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const menus = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "bx-home-circle"
  },
  {
    path: "/doctor",
    label: "Dokter",
    icon: "bx-layout",
    children: [
      {path: "", label: "Daftar Dokter"}
    ]
  },
  {
    path: "/medicine",
    label: "Obat",
    icon: "bx-plus-medical",
    children: [
      {path: "", label: "Daftar Obat"}
    ]
  }
];

export default function Sidebar() {
  const router = useRouter();

  useEffect(() => {
  }, [router]);

  const activeMenu = (path: string, children: boolean) => {
    const p = path.split("/")[1];
    const r = router.pathname.split("/")[1];
    if (p == r && !children) return "active";
    if (p == r && children) return "active open";
  }

  const activeSubMenu = (path: string) => {
    const p = path.split("/");
    const r = router.pathname.split("/");
    if (p[p.length - 1] == r[r.length - 1]) return "active";
  }

  return (<ul className="menu-inner py-1">
    {menus.map((data: any, iteration: number) => {
      if (!data.children) {
        return <li key={iteration} className={`menu-item ${activeMenu(data.path, false)}`}>
          <Link href={data.path} className="menu-link">
            <i className={`menu-icon tf-icons bx ${data.icon}`}></i>
            <div>{data.label}</div>
          </Link>
        </li>;
      }
      if (data.children) {
        return <li key={iteration} className={`menu-item ${activeMenu(data.path, true)}`}>
          <span className="menu-link menu-toggle" style={{cursor: "pointer"}}>
            <i className={`menu-icon if-icons bx ${data.icon}`}></i>
            <div>{data.label}</div>
          </span>
          <ul className="menu-sub">
            {data.children.map((cdr: any, sub: number) => {
              return <li key={sub} className={`menu-item ${activeSubMenu(data.path + cdr.path)}`}>
                <Link href={data.path + cdr.path} className="menu-link">
                  <div>{cdr.label}</div>
                </Link>
              </li>;
            })}
          </ul>
        </li>;
      }
    })}
  </ul>);
}