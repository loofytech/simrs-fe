import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useEffectOnce } from "usehooks-ts";

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

  useEffectOnce(() => {
    const isSelected = options.filter((o: any) => o.selected);
    if (isSelected.length > 0) {
      setSelected(isSelected[0].value.toString());
    }
  });

  const selectedItem = (value: string) => {
    setSelected(value);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <div className="dropdown" tabIndex={0}>
      <div onClick={() => open ? setOpen(false) : setOpen(true)} className="w-full flex items-center justify-between cursor-pointer border text-sm h-10 px-4 rounded-md">
        {!selected && <span className="text-gray-400">{label}</span>}
        {selected && <div className="relative flex items-center" style={{width: "80%"}}>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">{selected}</div>
          <div className="h-full bg-primary text-white flex items-center justify-center absolute w-5 rounded-full -right-6" onClick={() => setSelected("")}>
            <FiX size={14} />
          </div>
        </div>}
        <div>
          <FiChevronDown size={22} />
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-md p-0 overflow-hidden w-full">
        {options.map((option: any, key: number) => {
          return (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
              onClick={() => selectedItem(option.value)}
              key={key}
            >
              {option.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}