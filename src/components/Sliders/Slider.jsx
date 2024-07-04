import React, { useState } from 'react';
import { FcPrevious, FcNext } from "react-icons/fc";

const Slider = () => {
    const images = [
        'https://m.media-amazon.com/images/I/71VR6c3j2bL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61DenEygBML._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/51Erf4QNwyL._AC_UF1000,1000_QL80_.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg ">
        <div className="flex flex-row items-center gap-4">
            <FcPrevious onClick={prevSlide} className="cursor-pointer text-4xl hover:text-gray-700" />
            <div className="relative w-96 h-64 overflow-hidden rounded-lg">
                <img 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                    className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
            <FcNext onClick={nextSlide} className="cursor-pointer text-4xl hover:text-gray-700" />
        </div>
        <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
                <div 
                    key={index}
                    onMouseEnter={() => goToSlide(index)} 
                    className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400 hover:bg-blue-300'}`}
                />
            ))}
        </div>
    </div>
    );
}

export default Slider;
