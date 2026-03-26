import EventCard from "../components/EventCard"
import sytronImg from "../assets/events/sytron-2025-08-30.jpg"
import elevateImg from "../assets/events/elevate-2025-07-18.jpg"
import purulia1Img from "../assets/events/industrial-visit-purulia-1.png"
import purulia2Img from "../assets/events/industrial-visit-purulia-2.png"
import purulia3Img from "../assets/events/industrial-visit-purulia-3.png"
import iementech1Img from "../assets/events/iementech-2025-1.png"
import iementech2Img from "../assets/events/iementech-2025-2.png"
import iementech3Img from "../assets/events/iementech-2025-3.png"
import girlChildImg from "../assets/events/national-girl-child-day-2025.png"

function Events() {

  const events = [
    {
      title: "Elevate 2k25",
      date: "18-20 July 2025",
      description: "A transformative event focused on growth and leadership.",
      image: elevateImg
    },
    {
      title: "Sytron 2k25",
      date: "30 August 2025",
      description: "A flagship event of IEEE.",
      image: sytronImg
    },
    {
      title: "Industrial Visit at Hydroelectric Power Plant, Purulia",
      date: "3rd March, 2025",
      description: "Venue: Bagmundi, Purulia, 723152",
      images: [purulia1Img, purulia2Img, purulia3Img]
    },
    {
      title: "Poster paper presentation session conducted by WIE at IEMENTech 2025 conference",
      date: "31st January - 2nd February, 2025",
      description: "Members actively presented their research via engaging poster sessions.",
      images: [iementech1Img, iementech2Img, iementech3Img]
    },
    {
      title: "National Girl Child Day Celebration Event",
      date: "24th January, 2025",
      description: "Venue: Loreto Convent, Entally, Kolkata",
      image: girlChildImg
    }
  ]

  return (
    <section
      id="events"
      data-aos="fade-right"
      className="py-20 px-8 bg-gradient-to-b from-purple-50 to-white"
    >

      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Upcoming Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            images={event.images}
          />
        ))}

      </div>

    </section>
  )
}

export default Events