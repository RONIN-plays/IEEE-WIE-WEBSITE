import secretaryImg from "../assets/team/secretary.jpg"
import webmasterImg from "../assets/team/webmaster.jpg"
import teamBg from "../assets/team-bg.jpg"
import treasurerImg from "../assets/team/treasurer.jpg"
import vicechairImg from "../assets/team/vicechair.jpg"
import chairImg from "../assets/team/chair.jpg"
import facultyImg from "../assets/team/faculty.jpg"
import graphicsImg from "../assets/team/graphics.jpg"
import prleadImg from "../assets/team/prlead.jpg"
import contentleadImg from "../assets/team/contentlead.jpg"
import OfficerCard from "../components/OfficerCard"

function Team() {

  const officers = [
    {
      name: "Prof. Dr. Ratna Chakrabarty",
      role: "Faculty Advisor",
      image: facultyImg
    },
    {
      name: "Sneha Shaw",
      role: "Chair",
      image: chairImg
    },
    {
      name: "Swapnaleena Biswas",
      role: "Vice Chair",
      image: vicechairImg
    },


    {
      name: "Nirjhar Mitra",
      role: "Webmaster",
      image: webmasterImg
    },

    {
      name: "Anusmriti Saha",
      role: "Secretary",
      image: secretaryImg
    },

    {
      name: "Aishiki Podder",
      role: "Treasurer",
      image: treasurerImg
    },
    {
      name: "Arushi Das",
      role: "Graphics Lead",
      image: graphicsImg
    },
    {
      name: "Deepsikha Halder",
      role: "Content Lead",
      image: contentleadImg
    },
    {
      name: "Debraj Debnath",
      role: "PR Lead",
      image: prleadImg
    }
  ]

  return (
    <section
      id="team"
      data-aos="fade-up"
      className="py-20 px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${teamBg})` }}
    >

      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Our Team
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* Faculty Advisor Row - Centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-sm md:max-w-md">
            <OfficerCard
              name={officers[0].name}
              role={officers[0].role}
              image={officers[0].image}
            />
          </div>
        </div>

        {/* Chair & Vice Chair Row - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto mb-16">
          <OfficerCard
            name={officers[1].name}
            role={officers[1].role}
            image={officers[1].image}
          />
          <OfficerCard
            name={officers[2].name}
            role={officers[2].role}
            image={officers[2].image}
          />
        </div>

        {/* Others Row - Standard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {officers.slice(3).map((officer, index) => (
            <OfficerCard
              key={index}
              name={officer.name}
              role={officer.role}
              image={officer.image}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Team