import type { Tech as TechType } from "../../Types.tsx/types";
import SelectedTechCard from "./SelectedTechCard";

interface SelectedTechProps {
  selectedTech: Record<string, TechType>;
  onRemove: (category: string) => void;
}

const SelectedTech = ({ selectedTech, onRemove }: SelectedTechProps) => {
  const items = Object.values(selectedTech);

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white sticky top-6">
      <h3 className="font-semibold text-gray-900">Your Stack</h3>

      {items.length === 0 ? (
        <>
          <p className="text-sm text-gray-400 mt-1">No technologies selected yet.</p>
          <div className="mt-4 border border-dashed border-gray-200 rounded-xl p-6 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {items.map((tech) => (
            <SelectedTechCard key={tech.id} tech={tech} onRemove={() => onRemove(tech.category)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedTech;