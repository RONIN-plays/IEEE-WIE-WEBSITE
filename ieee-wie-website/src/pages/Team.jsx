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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-6xl mx-auto px-4 md:px-0">

        {officers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            role={officer.role}
            image={officer.image}
          />
        ))}

      </div>

    </section>
  )
}

export default Team