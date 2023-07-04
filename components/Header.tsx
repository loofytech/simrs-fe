import { deleteCookie } from "cookies-next";

interface CProps {
  children: React.ReactNode;
}

export default function Header({children}: CProps) {
  const handleLogout = async () => {
    const cok = deleteCookie("_aA_AdC", {});
    return location.reload();
  }

  return <div className="flex justify-between items-center bg-white rounded-lg py-3 px-5 border shadow mb-3 md:mb-7">
    <div className="">
      {children}
    </div>
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <span className="font-bold leading-5">Agung Ardiyanto</span>
        <span className="text-xs text-gray-500">Administrasi</span>
      </div>
      <div className="dropdown dropdown-end">
        <label
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold cursor-pointer"
          tabIndex={0}
        >
          AA
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg mt-1.5 w-52 rounded-t-none">
          <li><a>Settings</a></li>
          <li>
            <span onClick={handleLogout}>Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  </div>;
}