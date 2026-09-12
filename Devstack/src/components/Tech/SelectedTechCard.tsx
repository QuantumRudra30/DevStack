import { FiX } from "react-icons/fi";
import type { Tech as TechType } from "../../Types.tsx/types";

interface SelectedTechCardProps {
  tech: TechType;
  onRemove: () => void;
}

const SelectedTechCard = ({ tech, onRemove }: SelectedTechCardProps) => {
  return (
    <div className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 bg-gray-50">
      <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{tech.name}</p>
        <p className="text-xs text-gray-400">{tech.category}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-gray-400 hover:text-gray-700 transition-colors"
        aria-label={`Remove ${tech.name}`}
      >
        <FiX size={16} />
      </button>
    </div>
  );
};

export default SelectedTechCard;