import type { Tech as TechType } from "../../Types.tsx/types";
import TechCard from "./TechCard";

interface AvailableTechProps {
  techList: TechType[];
  selectedTech: Record<string, TechType>;
  onAdd: (tech: TechType) => void;
}

const AvailableTech = ({ techList, selectedTech, onAdd }: AvailableTechProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {techList.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isSelected={selectedTech[tech.category]?.id === tech.id}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default AvailableTech;