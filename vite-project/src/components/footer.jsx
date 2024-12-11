import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
export default function Footer() {
    return (
      <div className="w-full">
        {/* Footer content */}
        <div className="p-10 md:p-14 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 bg-black mt-16">
          
          {/* Links Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Link</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/home';
                }}
                className="hover:text-white cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => {
                  window.location.href = '/mining';
                }}
                className="hover:text-white cursor-pointer"
              >
                About Us
              </span>
              <span
                onClick={() => {
                  window.location.href = '/pilot';
                }}
                className="hover:text-white cursor-pointer"
              >
                Services
              </span>
              <span
                onClick={() => {
                  window.location.href = '/contactUs';
                }}
                className="hover:text-white cursor-pointer"
              >
              Ecosystem
              </span>
              <span
                onClick={() => {
                  window.location.href = '/contactUs';
                }}
                className="hover:text-white cursor-pointer"
              >
              Events
              </span>
              <span
                onClick={() => {
                  window.location.href = '/contactUs';
                }}
                className="hover:text-white cursor-pointer"
              >
              Blogs
              </span>
              <span
                onClick={() => {
                  window.location.href = '/contactUs';
                }}
                className="hover:text-white cursor-pointer"
              >
              Contact Us
              </span>
            </div>
          </div>
  
          {/* Solutions Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Legal Links</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/';
                }}
                className="hover:text-white cursor-pointer"
              >
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">Terms of services</span>
              <span className="hover:text-white cursor-pointer">Cookies policy</span>
              
              
            </div>
          </div>
  
          {/* Products & Resources Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Social Links</span>
            <div className="flex flex-col gap-3 items-center text-2xl  text-white">
              <FaFacebookSquare className="hover:text-pink-700 cursor-pointer"/>
              <FaInstagram className="hover:text-pink-700 cursor-pointer"/>
              <FaLinkedin className="hover:text-pink-700 cursor-pointer"/>
              <FaSquareXTwitter className="hover:text-pink-700 cursor-pointer"/>
              <FaYoutube className="hover:text-pink-700 cursor-pointer"/>
            </div>
  
          
          </div>
  
          {/* Contact Information Column */}
          <div className="flex flex-col gap-5">
            <span className="font-semibold tracking-widest text-2xl text-yellow-400">
              WEB3<span className="text-blue-500">India</span>
            </span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span className="hover:text-white cursor-pointer">
                Address: A 503, Kukreja Plaza, Sector 11
              </span>
              <span className="hover:text-white cursor-pointer">
                CBD Belapur, Navi Mumbai - 400614
              </span>
              <span className="hover:text-white cursor-pointer">
                Phone: +91 9619123020
              </span>
              <span className="hover:text-white cursor-pointer">
                Email: contact@airpix.in
              </span>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <footer>
          <div className="flex justify-center p-4 text-gray-300 font-bold font-sans bg-black">
            <span>&#169; 2024 Web3India. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    );
  }
  