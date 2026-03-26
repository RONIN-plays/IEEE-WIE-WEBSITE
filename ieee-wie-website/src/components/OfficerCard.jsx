function OfficerCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">

<img
  src={image}
  alt={name}
  className="w-56 h-52 mx-auto rounded-lg object-cover border-2 border-purple-200 shadow-sm mb-4"
/>

      <h3 className="text-xl font-semibold text-primary">{role}</h3>

      <p className="text-gray-600">{name}</p>

    </div>
  )
}

export default OfficerCard