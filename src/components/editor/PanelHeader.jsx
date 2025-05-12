import { FaChevronDown } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";

const PanelHeader = ({ icon, label, iconColor }) => {
  return (<div className="w-full flex items-center justify-between bg-zinc-800 text-white">
    <div className={`px-4 py-2 border-t-4 flex items-center gap-3 ${iconColor}`}>
      {icon}
      <p className="font-semibold">{label}</p>
    </div>
    <div className="cursor-pointer flex items-center gap-4 px-4">
      <FcSettings className="text-xl" />
      <FaChevronDown className="text-xl" />
    </div>
  </div>);
};

export default PanelHeader;