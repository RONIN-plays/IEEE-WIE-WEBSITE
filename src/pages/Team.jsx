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

      <div className="w-full px-4 md:px-0">
        {/* Faculty Advisor Row - Centered */}
        <div className="flex justify-center mb-16 px-4">
          <div className="w-full max-w-sm md:max-w-md">
            <OfficerCard
              name={officers[0].name}
              role={officers[0].role}
              image={officers[0].image}
            />
          </div>
        </div>

        {/* Everyone Else Row - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-[1400px] mx-auto px-4">
          {officers.slice(1).map((officer, index) => (
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