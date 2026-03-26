function AchievementCard({ title, year, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">

      <h3 className="text-xl font-bold text-primary mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        {year}
      </p>

      <p className="text-gray-700">
        {description}
      </p>

    </div>
  )
}

export default AchievementCard