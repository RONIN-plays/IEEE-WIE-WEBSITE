function OfficerCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 md:p-6 text-center transform hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">

<img
  src={image}
  alt={name}
  className="w-full aspect-square md:w-56 md:h-52 mx-auto rounded-lg object-cover border-2 border-purple-200 shadow-sm mb-4"
/>

      <h3 className="text-base md:text-xl font-semibold text-primary">{role}</h3>

      <p className="text-xs md:text-base text-gray-600">{name}</p>

    </div>
  )
}

export default OfficerCard