import { useState } from 'react';

function EventCard({ title, date, description, image, images }) {
  const [showGallery, setShowGallery] = useState(false);
  
  // Get main image to display on the card
  const displayImg = image || (images && images.length > 0 ? images[0] : null);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
        
        {displayImg && (
          <img 
            src={displayImg} 
            alt={title} 
            className="w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer" 
            onClick={() => images && images.length > 1 && setShowGallery(true)}
          />
        )}

        <h3 className="text-xl font-bold text-primary mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {date}
        </p>

        <p className="text-gray-700 mb-4">
          {description}
        </p>

        {(images && images.length > 1 || !images) && (
          <button 
            onClick={() => images && images.length > 1 ? setShowGallery(true) : alert('More details coming soon!')}
            className="px-4 py-2 bg-primary text-white rounded-md transition-colors duration-300 hover:bg-[#5a2370]"
          >
            Learn More
          </button>
        )}

      </div>

      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowGallery(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black font-bold text-3xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-primary mb-6">{title} - Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images && images.map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={imgSrc} 
                  alt={`${title} snippet ${idx+1}`} 
                  className="w-full h-auto object-cover rounded shadow-md border"
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowGallery(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EventCard