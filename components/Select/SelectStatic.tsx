import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

type CType = {
  label: string,
  value: string | number
}

interface CProps {
  options: CType[];
  label: string;
}

export default function SelectStatic({options, label}: CProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const selectedItem = (value: string) => {
    setSelected(value);
    setOpen(false);
  }
  return (
    <div className="relative">
      <div onClick={() => open ? setOpen(false) : setOpen(true)} className="w-full flex items-center justify-between cursor-pointer border text-sm h-10 px-4 rounded-md">
        {!selected && <span className="text-gray-400">{label}</span>}
        {selected && <div className="relative flex items-center w-full">
          <span className="">{selected}</span>
          <div className="h-full bg-primary text-white flex items-center justify-center absolute w-5 rounded-full right-1" onClick={() => setSelected("")}>
            <FiX size={14} />
          </div>
        </div>}
        <FiChevronDown size={22} />
      </div>
      {open && <>
        <div className="relative -bottom-0.5 border py-1.5 rounded-md text-sm bg-white w-full left-0 flex flex-col">
          {options.map((option: any, key: number) => {
            return (
              <div
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
                onClick={() => selectedItem(option.value)}
                key={key}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      </>}
    </div>
  )
}