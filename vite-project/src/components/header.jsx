
import { useNavigate } from "react-router-dom";
import { DropDownIndus, DropDownSolu } from "./dropdown";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [solution, setSolution] = useState("none");
  const [indus, setIndust] = useState("none");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For hamburger menu

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Change header style if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`flex items-center justify-between transition-all duration-300 p-3 fixed z-20 ${
        isScrolled ? "bg-yellow-400 text-white" : "bg-white"
      } top-0 w-full shadow-xl`}
    >
      {/* Logo */}
      <div className="p-3 ml-20">
        <span className="flex gap-1 text-2xl font-bold w-[250px]">
         Web3India
        </span>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Full Navigation Links (hidden on mobile) */}
      <div className="hidden md:flex gap-6 text-[13.5px] mr-32 font-semibold items-center">
       
       
        
        {/* Other navigation links */}
     
       
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/contactus")}>
          CONTACT US
        </span>
        <span className="hover:text-blue-500 cursor-pointer" >
         SERVICES
        </span>
        <span className="hover:text-blue-500 cursor-pointer" >
          ECOSYSTEM
        </span>
        <span className="hover:text-blue-500 cursor-pointer" >
        EVENTS
        </span>
        <span className="hover:text-blue-500 cursor-pointer" >
          BLOG
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/faqs")}>
          FAQS
        </span>
        
        <span className="hover:text-blue-500 cursor-pointer" onClick={()=> navigate('/aboutus')} >
          ABOUT US
        </span>
      </div>

      {/* Mobile Navigation Menu (visible on mobile when hamburger clicked) */}
      {/* <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden flex flex-col gap-2 mt-4`}>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/home")}>
          HOME
        </span>
        <span className="cursor-pointer" onClick={() => (solution === "flex" ? setSolution("none") : setSolution("flex"))}>
          SOLUTIONS
          <DropDownSolu visible={solution} />
        </span>
        <span className="cursor-pointer" onClick={() => (indus === "flex" ? setIndust("none") : setIndust("flex"))}>
          INDUSTRIES
          <DropDownIndus visible={indus} />
        </span>
        
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/product")}>
          PRODUCT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/worksyte")}>
          WORKSYTE
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => window.location.href = "/pilot"}>
          PILOT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/case")}>
          CASE STUDIES
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/contactus")}>
          CONTACT US
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/faqs")}>
          FAQ
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
          LOGIN
        </span>
      </div> */}
    </header>
  );
}
