import React from 'react';
// If using a local image, import it:
// import bannerImage from './assets/banner.jpg';

import {FaFileAlt, FaHammer, FaBuilding, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
export const Home = () => {
  return (
<div className="relative w-full h-screen ">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80"
    alt="Asianbd.com Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>  

  {/* Content Container */}
  <div className="relative  h-full flex items-center">
    <div className="max-w-[1508px] w-full mx-auto px-6">

      {/* Right Side Content */}
      <div className="flex justify-center">
  <div className="max-w-xl text-center text-white space-y-6">

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold leading-tight"
    >
      Building The Future <br />
      <span className="text-yellow-400">With Innovation</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="text-lg text-gray-300"
    >
      We provide high quality digital solutions and modern business
      strategies to grow your company faster than ever before.
    </motion.p>

  
    {/* Buttons */}
    <div className="flex justify-center space-x-4">

      <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300">
        Get Started
      </button>

      <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
        Learn More
      </button>

    </div>

  </div>
</div>

    </div>
  </div>
<section className="py-24 px-4 md:px-8 construction-expert-section bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left Content */}
    <div className="space-y-6">
     <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="space-y-6"
>
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
  >
    We Are Expert in <br />Construction Field
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="text-gray-600 leading-relaxed"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam similique repellat dignissimos, omnis at ducimus pariatur odio praesentium eveniet porro sit quod, sequi unde atque magnam voluptate quae voluptatum. Delectus.
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="text-gray-600 leading-relaxed"
  >
    At sed impedit, ab a officia blanditiis, fuga commodi delectus veniam architecto in nihil numquam eum maiores. Amet nihil, dolorum sit vitae fugit maxime earum optio culpa eum. Voluptates, labore.
  </motion.p>

  
</motion.div>
    </div>

    {/* Right Image */}
    <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format" 
        alt="Construction, paint, and chemical products"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
  
</section>
<section className="py-12 px-4 md:px-8 b">
  <div className="max-w-6xl mx-auto">
    {/* Header with title, description, and CTA link */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          Recent Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
          necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
        </p>
      </div>
      <a
        href="#"
        className="mt-4 md:mt-0 inline-flex items-center text-[#F0B100] font-medium transition-colors group"
      >
        See All Projects
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>

    {/* Project cards grid with random images */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 - Modern Office Tower */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src="https://source.unsplash.com/featured/800x600?modern,office,building"
            alt="Modern Office Tower"
            className="w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'} // Fallback if image fails
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900">Modern Office Tower</h3>
          <p className="text-gray-500 text-sm">Commercial</p>
        </div>
      </div>

      {/* Card 2 - Industrial Warehouse */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src="https://source.unsplash.com/featured/800x600?industrial,warehouse"
            alt="Industrial Warehouse"
            className="w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900">Industrial Warehouse</h3>
          <p className="text-gray-500 text-sm">Industrial</p>
        </div>
      </div>

      {/* Card 3 - Eco-Friendly Housing */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src="https://source.unsplash.com/featured/800x600?eco,friendly,housing"
            alt="Eco-Friendly Housing"
            className="w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900">Eco-Friendly Housing</h3>
          <p className="text-gray-500 text-sm">Residential</p>
        </div>
      </div>
    </div>
  </div>
</section>
  <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
          SERVICES
        </h2>

        {/* Blue Underline */}
        <div className="w-12 h-1 bg-[#F0B100] mx-auto mt-3 mb-6 rounded"></div>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus soluta sit quam minima expedita atque corrupti
          reiciendis.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          
          {/* Service 1 */}
          <div className="space-y-4">
            <FaFileAlt className="mx-auto text-[#F0B100] w-14 h-14" />
            <h3 className="font-semibold text-gray-800 tracking-wide">
              PRE-CONSTRUCTION
            </h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="border border-[#F0B100] text-[#F0B100] px-4 py-1 text-sm rounded hover:bg-[#F0B100] hover:text-white transition duration-300">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="space-y-4">
            <FaHammer className="mx-auto text-[#F0B100] w-14 h-14" />
            <h3 className="font-semibold text-gray-800 tracking-wide">
              HOUSE RENOVATION
            </h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="border border-[#F0B100] text-[#F0B100] px-4 py-1 text-sm rounded hover:bg-[#F0B100] hover:text-white transition duration-300">
              Learn More
            </button>
          </div>

          {/* Service 3 */}
          <div className="space-y-4">
            <FaBuilding className="mx-auto text-[#F0B100] w-14 h-14" />
            <h3 className="font-semibold text-gray-800 tracking-wide">
              GENERAL CONTRACTING
            </h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="border border-[#F0B100]  px-4 py-1 text-sm rounded hover:bg-[#F0B100] hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-16">
          <button className="bg-[#F0B100] text-white px-8 py-3 rounded-md hover:bg-[#F0B100] transition duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
          HAPPY CUSTOMER SAYS
        </h2>

        {/* Blue Underline */}
        <div className="w-12 h-1 bg-[#F0B100] mx-auto mt-3 mb-6 rounded"></div>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque corrupti
          reiciendis.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-16 mt-16">
          
          {/* Testimonial 1 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Jane Doe"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />

            <h4 className="mt-4 text-gray-700 font-medium">
              Jane Doe,{" "}
              <span className="text-[#F0B100]">XYZ Inc.</span>
            </h4>

            <p className="mt-6 text-gray-600 italic leading-relaxed max-w-md mx-auto">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi unde impedit, necessitatibus, soluta sit quam minima
              expedita atque corrupti reiciendis.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="John Doe"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />

            <h4 className="mt-4 text-gray-700 font-medium">
              John Doe,{" "}
              <span className="text-[#F0B100]">XYZ Inc.</span>
            </h4>

            <p className="mt-6 text-gray-600 italic leading-relaxed max-w-md mx-auto">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi unde impedit, necessitatibus, soluta sit quam minima
              expedita atque corrupti reiciendis.”
            </p>
          </div>

        </div>
      </div>
    </section>
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
</div>
  );
};