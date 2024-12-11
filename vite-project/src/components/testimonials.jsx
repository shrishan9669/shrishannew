import { useEffect, useState } from "react";


  
 export  const TestimonialsCarousel = ({testimonials}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Automatically change the testimonial every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5000ms = 5 seconds
      return () => clearInterval(interval); // Clear interval when component unmounts
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center w-full p-6 ">
        <div className="relative w-full max-w-xl">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="testimonial-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full p-6  rounded-lg shadow-md flex justify-center"
                >
                  <img src={testimonial.image}  className="h-full w-full rounded-lg"/>
                  {/* <p className="text-lg italic text-gray-700">"{testimonial.feedback}"</p> */}
                  {/* <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Dots for navigation */}
        <div className="flex mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };