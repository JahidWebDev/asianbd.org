import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-gray-800 text-gray-300 py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* Column 1 */}
    <div className="text-sm leading-relaxed">
      <p>
        Copyright ©2026 All rights reserved | This template is made with{" "}
        <FaHeart className="inline text-[#F0B100] mx-1" />
        by{" "}
        <span className="text-[#F0B100] hover:text-yellow-400 cursor-pointer transition">
          Jahid
        </span>
      </p>
    </div>

    {/* Column 2 */}
    <div className="text-sm space-y-3">
      <div>
        <h4 className="text-white font-semibold mb-1">Address:</h4>
        <p>34 Street Name, City Name Here, United States</p>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-1">Phone:</h4>
        <p>+1 242 4942 290</p>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-1">Fax:</h4>
        <p>+1 242 4942 290</p>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-1">E-mail:</h4>
        <p>info@yourdomain.com</p>
      </div>
    </div>

    {/* Column 3 */}
    <div>
      <h4 className="text-white font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-[#F0B100] cursor-pointer transition">About</li>
        <li className="hover:text-[#F0B100] cursor-pointer transition">Services</li>
        <li className="hover:text-[#F0B100] cursor-pointer transition">Works</li>
        <li className="hover:text-[#F0B100] cursor-pointer transition">Contact</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div>
      <h4 className="text-white font-semibold mb-4">Social</h4>
      <div className="flex space-x-3">
        
        <div className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-[#F0B100] hover:border-[#F0B100] hover:text-black transition cursor-pointer">
          <FaTwitter />
        </div>

        <div className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-[#F0B100] hover:border-[#F0B100] hover:text-black transition cursor-pointer">
          <FaFacebookF />
        </div>

        <div className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-[#F0B100] hover:border-[#F0B100] hover:text-black transition cursor-pointer">
          <FaLinkedinIn />
        </div>

        <div className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-[#F0B100] hover:border-[#F0B100] hover:text-black transition cursor-pointer">
          <FaInstagram />
        </div>

      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;