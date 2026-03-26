import wieBg from "../assets/wie-bg.jpg"

import Team from "./Team"
import Events from "./Events"
import Achievements from "./Achievements"
import Contact from "./Contact"

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen px-6"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${wieBg})` }}
        ></div>

        {/* Purple overlay */}
        <div className="absolute inset-0 bg-purple-1000/60"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-3xl w-full bg-purple-100 rounded-3xl p-12 text-center drop-shadow-xl">

          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            IEM IEEE Women in Engineering
          </h1>

          <p className="text-lg text-purple-900 mb-8">
            IEEE Women in Engineering inspires innovation, leadership, and
            technical excellence among women in STEM.
          </p>

          <a 
            href="https://wie.ieee.org/membership/join/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#672b85] text-white font-semibold rounded-lg hover:bg-[#5a2370] transition-colors shadow-lg hover:shadow-xl duration-300"
          >
            Join Us
          </a>

        </div>
      </section>

      {/* OTHER SECTIONS */}

      <Team />
      <Events />
      <Achievements />
      <Contact />

    </>
  )
}

export default Home