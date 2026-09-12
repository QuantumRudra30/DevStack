import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Tech as TechType } from "../../Types.tsx/types";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  const techList = use(techPromise);
  const [selectedTech, setSelectedTech] = useState<Record<string, TechType>>({});

  const handleAdd = (tech: TechType) => {
    setSelectedTech((prev) => {
      if (prev[tech.category]?.id === tech.id) {
        toast.info(`${tech.name} is already in your stack`);
        return prev;
      }
      toast.success(`${tech.name} added to your stack`);
      return { ...prev, [tech.category]: tech };
    });
  };

  const handleRemove = (category: string) => {
    setSelectedTech((prev) => {
      const next = { ...prev };
      const removed = next[category];
      delete next[category];
      if (removed) toast.warn(`${removed.name} removed from your stack`);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
      <AvailableTech techList={techList} selectedTech={selectedTech} onAdd={handleAdd} />
      <SelectedTech selectedTech={selectedTech} onRemove={handleRemove} />
    </div>
  );
};

export default Tech;