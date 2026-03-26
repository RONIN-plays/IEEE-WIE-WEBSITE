import AchievementCard from "../components/AchievementCard"

function Achievements() {

  const achievements = [
    {
      title: "Best IEEE Student Chapter",
      year: "2024",
      description: "Recognized for outstanding IEEE activities."
    },
    {
      title: "International Conference Participation",
      year: "2025",
      description: "Members presented research in global IEEE conferences."
    },
    {
      title: "Women Leadership Program",
      year: "2025",
      description: "Organized leadership sessions for women in STEM."
    }
  ]

  return (
    <section
  id="achievements"
  data-aos="fade-left"
  className="py-20 px-8 bg-white"
>

      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            year={achievement.year}
            description={achievement.description}
          />
        ))}

      </div>

    </section>
  )
}

export default Achievements