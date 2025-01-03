"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Award, Users, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const About: React.FC = () => {
  const [openState, setOpenState] = useState<string | null>(null);

  const toggleLocation = (state: string) => {
    setOpenState(openState === state ? null : state);
  };

  return (
    <div className="min-h-screen py-6 px-4 md:px-12">
    <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 p-8 items-center justify-center">
        {/* Owner Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-[#8B4513]">
            <Image
              src="/assets/profile.jpeg"
              alt="Bridal Mehandi Art"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
  
        {/* Achievements & Introduction */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-serif text-[#8B4513] font-bold">
            Bridal Mehandi Art
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Transforming traditions into breathtaking art, one henna design at a
            time. With a passion that spans over a decade, I craft stories through
            intricate mehandi designs that celebrate your unique journey.
          </p>
  
          {/* Achievement Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
            <div className="bg-[#FFF0E5] p-4 rounded-lg flex items-center space-x-3">
              <Users className="text-[#8B4513]" size={36} />
              <div>
                <h3 className="text-2xl font-bold text-[#8B4513]">8000+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
            <div className="bg-[#FFF0E5] p-4 rounded-lg flex items-center space-x-3">
              <Calendar className="text-[#8B4513]" size={36} />
              <div>
                <h3 className="text-2xl font-bold text-[#8B4513]">12+</h3>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>
            <div className="bg-[#FFF0E5] p-4 rounded-lg flex items-center space-x-3">
              <Award className="text-[#8B4513]" size={36} />
              <div>
                <h3 className="text-2xl font-bold text-[#8B4513]">50+</h3>
                <p className="text-sm text-gray-600">Design Styles</p>
              </div>
            </div>
            <div className="bg-[#FFF0E5] p-4 rounded-lg flex items-center space-x-3">
              <MapPin className="text-[#8B4513]" size={36} />
              <div>
                <h3 className="text-2xl font-bold text-[#8B4513]">10+</h3>
                <p className="text-sm text-gray-600">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Locations Accordion */}
      <div className="p-8">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8B4513] mb-6 text-center">
          Our Service Locations
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Tamil Nadu Accordion */}
          <div className="border border-[#8B4513] rounded-lg overflow-hidden">
            <div
              onClick={() => toggleLocation("Tamil Nadu")}
              className="flex justify-between items-center p-4 bg-white cursor-pointer hover:bg-[#FFF0E5] transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold text-[#8B4513]">
                Tamil Nadu
              </span>
              {openState === "Tamil Nadu" ? (
                <ChevronUp className="text-[#8B4513]" />
              ) : (
                <ChevronDown className="text-[#8B4513]" />
              )}
            </div>
            {openState === "Tamil Nadu" && (
              <div className="p-4 bg-[#FFF5E1]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Chennai",
                    "Kanchipuram",
                    "Vellore",
                    "Dharmapuri",
                    "Salem",
                    "Erode",
                    "Coimbatore",
                    "Tiruppur",
                    "Pollachi",
                    "Palani",
                    "Dindigul",
                    "Madurai",
                    "Tuticorin",
                    "Tirunelveli",
                    "Nagercoil",
                    "Kanyakumari",
                    "Puducherry",
                    "Villupuram",
                    "Tiruchirappalli",
                  ].map((city) => (
                    <div
                      key={city}
                      className="bg-white p-2 rounded text-center text-[#8B4513]"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  
      {/* Call to Action */}
      <div className="text-center p-8">
        <Link
          href="/booknow"
          className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-full 
          hover:bg-[#6B3E23] transition-colors duration-300 text-lg shadow-lg"
        >
          Book Your Mehandi Session
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default About;
