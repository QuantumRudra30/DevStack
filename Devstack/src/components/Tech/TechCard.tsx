import { FaStar } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import type { Tech as TechType } from "../../Types.tsx/types";

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-500",
  Ubiquitous: "bg-orange-50 text-orange-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-blue-50 text-blue-600",
  Modern: "bg-blue-50 text-blue-600",
  Containers: "bg-blue-50 text-blue-600",
};

interface TechCardProps {
  tech: TechType;
  isSelected: boolean;
  onAdd: (tech: TechType) => void;
}

const TechCard = ({ tech, isSelected, onAdd }: TechCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            badgeStyles[tech.badge] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{tech.name}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{tech.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap text-xs">
        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{tech.category}</span>
        <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-gray-600 ml-auto">
          <FaStar className="text-yellow-400" size={12} />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`btn w-full rounded-lg border-none text-sm font-medium ${
          isSelected
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isSelected ? (
          <span className="flex items-center gap-1.5">
            <FiCheck size={16} /> Added
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechCard;