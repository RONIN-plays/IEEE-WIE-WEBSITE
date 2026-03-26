function OfficerCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-purple-50">
      <img
        src={image}
        alt={name}
        className="w-full aspect-square md:w-64 md:h-64 mx-auto rounded-xl object-cover border-4 border-purple-100 shadow-sm mb-6"
      />
      <h3 className="text-lg md:text-2xl font-bold text-primary mb-2">{role}</h3>
      <p className="text-sm md:text-lg text-gray-600 font-medium">{name}</p>
    </div>
  )
}

export default OfficerCard