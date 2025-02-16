import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: { url: string; caption: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setCurrentIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-h-[80vh] w-auto mx-auto"
            />
            <p className="text-white text-center mt-4">{images[currentIndex].caption}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;