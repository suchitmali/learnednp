import { useState } from 'react';


const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    { id: 1, src: "/src/assets/images/img-1.JPG", title: "At Markhu" },
    { id: 2, src: "/src/assets/images/landing-page.jpg", title: "At Beni" },
    { id: 3, src: "/src/assets/images/calculator-app.JPG", title: "Dancing" },
    { id: 4, src: "/src/assets/images/img-9.jpg", title: "Tutoring" },
    { id: 5, src: "/src/assets/images/react.JPG", title: "Learning Computer" },
    { id: 6, src: "/src/assets/images/img-20.JPG", title: "Window of Change" },
    { id: 7, src: "/src/assets/images/about-img-4.JPG", title: "Playing" },
    { id: 8, src: "/src/assets/images/img-12.jpg", title: "Assembly" },
    { id: 9, src: "/src/assets/images/img-8.jpg", title: "Smiles" }
  ];

  const visibleImages = showAll ? allImages : allImages.slice(0, 6);

  const renderImageRow = (images) => (
    <div className="flex flex-col md:flex-row gap-7 md:my-8 my-6">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative w-full md:w-1/3 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              alt={image.title}
              src={image.src}
              className="h-full w-full object-cover sm:h-64 lg:h-72 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
              <strong className="text-white font-medium md:text-xl lg:text-2xl block text-center">
                {image.title}
              </strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const chunkedImages = [];
  for (let i = 0; i < visibleImages.length; i += 3) {
    chunkedImages.push(visibleImages.slice(i, i + 3));
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12" id='gallery'>
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-Monst">
              Gallery
            </h2>
          </div>  
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            Capturing moments of learning, growth, and joy in our journey of making a difference.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-8">
          {chunkedImages.map((row, index) => (
            <div key={index}>{renderImageRow(row)}</div>
          ))}
        </div>

        {/* Enhanced Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg font-"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;