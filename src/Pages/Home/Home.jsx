import React from "react";

import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import CoreFocus from "./components/CoreFocus/CoreFocus";
import Initiatives from "./components/Initiative/Initiatives";
import Transformation from "../../components/Transformation/Transformation";

export default function Home() {
  return (
    <div className="bg-[#FCFBF8]">
      <Hero />
      <Mission />
      <CoreFocus />
      <Initiatives />
      <Transformation />
    </div>
  );
}
