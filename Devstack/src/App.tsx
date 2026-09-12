import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Tech from "./components/Tech/Tech";

import type { Tech as TechType } from "./Types.tsx/types";

function App() {
  const techPromise = async (): Promise<TechType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };

  return (
    <>
      <Nav />
      <Banner />

      <div className="max-w-7xl mx-auto px-6 pt-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Tech techPromise={techPromise()} />
      </Suspense>
    </>
  );
}

export default App;