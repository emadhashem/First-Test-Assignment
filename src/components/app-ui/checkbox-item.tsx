import { Check } from "lucide-react";

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

function CheckboxItem({ checked, onChange, className, label }: Props) {
  return (
    <label
      className="group flex items-center 
        cursor-pointer justify-between w-full h-[42px] 
        py-2 pr-4 pl-5 hover:bg-gray-100"
    >
      <span className="text-gray-700 flex-1">{label}</span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div
          className={`
              w-5 h-5 border rounded
              transition-all duration-200
              ${
                checked
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300 group-hover:border-blue-500" // Hover effect on border
              }
              ${className}
            `}
        >
          <Check
            className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${
                checked
                  ? "text-white"
                  : "text-gray-500 group-hover:text-gray-500"
              }
              ${checked ? "" : "opacity-0 group-hover:opacity-100"}
            `}
            strokeWidth={checked ? 3 : 2}
          />
        </div>
      </div>
    </label>
  );
}

export default CheckboxItem;
