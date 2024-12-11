import React, { useEffect, useState } from "react";
import Industries from "../components/industries";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// Define your images in an array

export const ImageSlider = () => {
    const images = [
        {
          url: "https://imageio.forbes.com/specials-images/imageserve/61ee398ddc12640fb44cef6b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          text: "Web3 Revolution",
          additionaltext:'Web3 empowers decentralized applications, blockchain innovation, and user data ownership.'
        },
        {
          url: "https://www.shutterstock.com/image-photo/blockchain-technology-concept-revolutionizing-industries-600nw-2481711293.jpg",
          text: "Wind turbine inspections and Monitoring",
          additionaltext:'Blockchain ensures secure, transparent, decentralized data management for various applications'
        },
        {
          url: "https://media.istockphoto.com/id/1492180527/photo/digital-marketing-commerce-online-sale-concept-promotion-of-products-or-services-through.jpg?s=612x612&w=0&k=20&c=s4lmSNsWc6q5ObaiC3Gk_bn-gosVTYn4rukKwa0SE8U=",
          text: "Project Monitoring Application",
          additionaltext:'Tag & track objects, insert data, locate data interactively and collaborate with teams for better project progress monitoring with drone data'
        },
        {
            url: "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            text: "Community Planning and Management",
            additionaltext:'Community planning fosters collaboration, sustainable development, and inclusive decision-making processes.'
        },
        {
            url: "https://t4.ftcdn.net/jpg/03/89/39/17/360_F_389391783_ujJjCn2nGUdeDi2jUl97utjhIeEx7tqr.jpg",
            text: "Growth Provoking Consultation",
            additionaltext:'Nice consultation ensures tailored advice, clear communication, and impactful solutions.'
        },
      ];
      
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all  duration-500 ease-in-out "
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content and Text */}
      <div className="relative z-10 text-white text-center px-6 py-4">
        <h1 className="text-4xl font-bold mb-4">{images[currentIndex].text}</h1>
        <p className="text-lg">{images[currentIndex].additionaltext}</p>
      </div>

      {/* Buttons */}
      <div className="absolute left-4 z-10">
        <button
          onClick={prevImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute right-4 z-10">
        <button
          onClick={nextImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Card = ({ jumpto, Heading, data, image }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
      <img src={image} className="w-full hover:scale-105 transition-all duration-300 h-[60%] rounded-lg" alt={Heading} />
      <h2 className="text-xl font-bold mt-4">{Heading}</h2>
      <p className="text-sm text-gray-700 text-center">{data}</p>
      { (
        <Link to={jumpto} className="mt-2 px-2 py-1 rounded-md bg-black text-white hover:bg-pink-900">
          Explore
        </Link>
      )}
      </div>
  )
}   


// export function Card({ Heading, data, image, jumpto }) {
//   return (
//     <div
//       className="sm:h-[300px] sm:w-[350px] w-full rounded-t-lg hover:shadow-2xl transition-all"
//       style={{ transitionDuration: '0.4s' }}
//     >
//       <img
//         src={image}
//         className="rounded-t-lg sm:h-[200px] h-[150px] w-full object-cover"
//         alt="Card image"
//       />

//       <div className="p-5 bg-white rounded-b-lg shadow-md">
//         <h1 className="text-2xl text-blue-700 sm:w-[330px] w-full">
//           {Heading}
//         </h1>

//         <p className="text-sm sm:text-base mt-2">
//           {data}
//         </p>

//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => {
//               window.location.href = jumpto;
//             }}
//             className="px-3 bg-blue-950 text-white py-1 rounded-md hover:bg-blue-600"
//           >
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



const testimonials = [
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/e/e3/NDTV_logo_v2.png?20201121045520'
  },
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Apple_gray_logo.png/900px-Apple_gray_logo.png?20121106103121'
  },
  {
   image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png?20160213081640'
  },
  {
    image:'https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png'
  },
  {
    image:'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png'
  }
];



const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
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
                className="flex-shrink-0 w-full p-4 sm:p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  className="h-[150px] sm:h-[200px] w-auto mb-4"
                  alt={testimonial.name}
                />
                <p className="text-lg italic text-gray-700 text-center">
                  "{testimonial.feedback}"
                </p>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
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






export default function Home() {
  return (
    <div className="relative w-full h-[400px] bg-slate-400">
      <ImageSlider />

      
      <div className="text-gray-600 mt-10 sm:mx-12 lg:mx-48 px-5 lg:px-0">
      <h1 className="text-4xl font-bold mb-6 flex justify-center">About Web3India</h1>
      <p className="text-lg leading-relaxed">
          Web3India is a global platform dedicated to empowering Web3 blockchain companies by promoting their brands and products to a broader audience. With a vibrant community of over <span className="font-semibold">300,000 students</span> and partnerships with more than <span className="font-semibold">1,400 colleges</span>, we are at the forefront of blockchain innovation. Currently, we are actively engaged in <span className="font-semibold">five major Web3 projects</span>, underscoring our commitment to advancing blockchain technology.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          As a service-based blockchain enterprise, Web3India offers end-to-end support for blockchain projects, helping businesses achieve their goals in the Web3 space. Our mission is to become the go-to destination for collaboration, innovation, and growth in the blockchain ecosystem.
        </p>
      </div>

      <div className="mt-10 bg-gray-200 flex flex-col items-center py-10">
        <h1 className="flex justify-center text-2xl font-bold mb-10">Services We Offer</h1>
        <h1 className="flex justify-center text-xl max-w-[660px] text-gray-700 text-center  font-semibold ">
        Web3India is a service-based blockchain company that provides comprehensive support for blockchain projects and helps brands and products thrive in the Web3 ecosystem.
        </h1>

        <div className="flex gap-10 mt-20 sm:mx-10 lg:mx-48 justify-center">
          {/* First Set of Cards */}
          <Card
            jumpto={"/"}
            Heading={"Blockchain Development"}
            data={
              "Custom blockchain project development from idea to execution."
            }
            image={
              "https://www.q3tech.com/wp-content/uploads/2024/02/Block-chain.jpg"
            }
          />
          <Card
            Heading={"Community Building & Management"}
            data={
              "Access to our 300K+ student community and 1,400+ college network."
            }
            image={
              "https://www.shutterstock.com/image-photo/people-hands-fist-bump-workplace-600nw-2472842693.jpg"
            }
          />
          <Card
            Heading={"Brand Promotion"}
            data={
              "Strategic promotion of your brand, product, or service in the Web3 ecosystem."
            }
            image={"https://5.imimg.com/data5/SELLER/Default/2021/6/OF/WP/OW/122678404/brand-promotion-service.jpg"}
          />
        </div>

        <div className="flex  gap-10 mt-10 sm:mx-10 lg:mx-48 justify-center">
          {/* Second Set of Cards */}
          <Card
            jumpto={"/aerialphoto"}
            Heading={"Project Consulting"}
            data={
              "Expert guidance on launching and scaling blockchain projects."
            }
            image={
              "https://emeritus.org/wp-content/uploads/2023/02/a4.png"
            }
          />
          <Card
            Heading={"Marketing & Growth Hacking"}
            data={
              "Driving visibility and growth for Web3 projects and brands."
            }
            image={
              "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/10/11125418/growth-hacking-2.jpg"
            }
          />
          <Card
            Heading={"Educational Webinars & Workshops"}
            data={
              "Training sessions for students and companies to understand blockchain and Web3."
            }
            image={
              "https://www.uni-bell.org/portals/0/Upcoming-Webinars.jpg?ver=2022-11-17-145117-373"
            }
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center font-semibold text-2xl mt-10">
          <h1>Associations and Partners</h1>
        </div>

        <div className="flex flex-wrap items-center justify-around mx-5 sm:mx-20 lg:mx-40 mt-8 gap-5">
          <img
            src="https://cdnbbsr.s3waas.gov.in/s312b1e42dc0746f22cf361267de07073f/uploads/2023/07/2023071196.jpg"
            className="h-[100px] sm:h-[150px] lg:h-[200px]"
          />
          <img
            src="https://cdn1.vc4a.com/media/2018/11/AIRBUS.jpg"
            className="h-[100px] sm:h-[150px] lg:h-[200px]"
          />
          <img
            src="https://media.licdn.com/dms/image/D5612AQEfaoOAXPaerA/article-cover_image-shrink_600_2000/0/1693850337611?e=2147483647&v=beta&t=hIR9tY4fBRjqj1bvrlDQJdyyY2EQBAar3zssDEu73c8"
            className="h-[70px] sm:h-[100px] lg:h-[150px]"
          />
          <img
            src="https://unicorn-nest.com/wp-content/uploads/2021/11/Axilor-Ventures.jpg"
            className="h-[80px] sm:h-[110px] lg:h-[150px]"
          />
          <img
            src="https://lobbymap.org/site//data/001/361/1361973.png"
            className="h-[100px] sm:h-[130px] lg:h-[170px]"
          />
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="flex justify-center font-semibold text-3xl mt-10">
          <h1>Our clients</h1>
        </div>

        <div className="mt-5">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>

    
      <Footer />
    </div>
  );
}
