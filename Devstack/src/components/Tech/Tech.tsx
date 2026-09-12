import React, { use } from "react";
import type { Tech as TechType } from "../../Types.tsx/types";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  const tech = use(techPromise);

  return (
    <div>
      {tech.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;