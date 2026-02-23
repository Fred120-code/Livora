import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[5%] hero-header" id="home">
        <div className="hero-content w-full lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-semibold">
            Strong foundations, lasting results
          </h1>
          <p className="my-5 w-full md: lg:w-1/2">
            Our team crafts thoughtful, modern spaces that balance beauty,
            purpose, and sustainability for every client we serve.
          </p>
          <button
            className="rethink font-semibold px-8 py-4 text-xl bg-(--prim) mt-4
            text-white hover:bg-white hover:text-black rounded-full 
                transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>
        <div
          className="md:absolute bottom-0 right-0 p-10 flex flex-col 
            mt-10 md:mt-0 rounded-md bg-black"
        >
          <h1 className="text-5xl mb-5 font-semibold">About our studio</h1>
          <p className="w-full lg:w-[70%] text-(--text-light)">
            An architecture and interiors studio shaping unique, enduring spaces
            for clients to thrive.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="flex flex-col">
              <h2 className="text-4xl rethink font-bold text-(--prim)">
                <CountUp start={0} end={73} duration={2} />+
              </h2>
              <p className="text-(--text-light)">Finished projects</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl rethink font-bold text-(--prim)">
                <CountUp start={0} end={685} duration={2} />+
              </h2>
              <p className="text-(--text-light)">Satisfied clients</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl rethink font-bold text-(--prim)">
                <CountUp start={0} end={5} duration={2} />K
              </h2>
              <p className="text-(--text-light)">Dreams realized</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
