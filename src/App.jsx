import React from "react";
import Landing from "./landing";
import Nasa from "./nasa";
import SpaceX from "./spacex";
import Bg2 from "./assets/2.jpg";
import Bg3 from "./assets/3.jpg";
import Bg4 from "./assets/4.jpg";
import Astro from "./astro";
function App() {
  return (
    <div
      className=" overflow-y-scroll overflow-x-hidden h-screen snap-y snap-mandatory
    overflow-scroll z-0"
    >
      <section id="hero" className="snap-start ">
        <Landing />
      </section>
      <section
        id="Nasa"
        className="snap-start bg-fit bg-no-repeat"
        // style={{ backgroundImage: `url(${Bg3})` }}
      >
        <Nasa />
      </section>
      <section
        id="SpaceX"
        className="snap-start bg-no-repeat "
        // style={{ backgroundImage: `url(${Bg2})` }}
      >
        <SpaceX />
      </section>
      <section
        id="Astro"
        className="snap-start"
        // style={{ backgroundImage: `url(${Bg2})` }}
      >
        <Astro />
      </section>
    </div>
  );
}

export default App;
