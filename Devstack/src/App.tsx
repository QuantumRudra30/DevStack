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

      <Suspense fallback={<p>Loading...</p>}>
        <Tech techPromise={techPromise()} />
      </Suspense>
    </>
  );
}

export default App;