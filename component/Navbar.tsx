"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CurrentOfferTicker from "./CurrentOfferTicker";
import { Phone, Menu, X } from "lucide-react";
import { mobile_number } from "./sections/HeroSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTickerVisible, setIsTickerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsTickerVisible(currentScroll < 50);
      setIsScrolled(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mehandi-services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/mehandi-design-gallery", label: "Gallery" },
    { href: "/client-feedback", label: "Feedback" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-darkBrown">
      {/* Announcement Ticker */}
      <div
        className={`
          w-full
          bg-darkBrown
          transition-all
          duration-300
          ease-in-out
          ${isTickerVisible ? "h-[50px] opacity-100" : "h-0 opacity-0"}
          overflow-hidden
        `}
      >
        <CurrentOfferTicker />
      </div>

      {/* Main Navbar */}
      <div
        className={`
          w-full
          transition-all
          duration-300
          ease-in-out
          ${isScrolled
            ? "bg-primaryBg/95 backdrop-blur-md shadow-md"
            : "bg-primaryBg"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex  items-center  gap-3">
              <img
                src="/assets/logo.jpg"
                alt="Bridal Mehandi Art"
                className="h-12 w-auto"
              />
              <h4 className="font-bold text-2xl text-darkBrown">
                {" "}
                Bridal Mehandi Art
              </h4>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-lg
                    font-medium
                    text-darkBrown
                    hover:text-lightYellow
                    transition-colors
                    duration-300
                  "
                >
                  {link.label}
                </Link>
              ))}
              {/* Call Button */}
              <a
                href="tel:+917417245847"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-2.5
                  text-lg
                  font-semibold
                  text-white
                  bg-darkBrown
                  rounded-lg
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-darkBrown/90
                  focus:outline-none
                  focus:ring-4
                  focus:ring-lightYellow
                  focus:ring-opacity-50
                "
              >
                <Phone size={20} />
                <span>Call Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`
              md:hidden
              absolute
              top-[100%]  /* Directly below the navbar */
              left-0
              w-full
              bg-primaryBg
              shadow-lg
              transition-all
              duration-300
              ${isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
              }
              overflow-hidden
            `}
          >
            <ul className="flex flex-col items-center space-y-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-lg
                      font-medium
                      text-darkBrown
                      hover:text-lightYellow
                      transition-colors
                      duration-300
                    "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Call Button */}
              <li>
                <a
                  href={`tel:${mobile_number}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-2.5
                    text-lg
                    font-semibold
                    text-white
                    bg-darkBrown
                    rounded-lg
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-darkBrown/90
                    focus:outline-none
                    focus:ring-4
                    focus:ring-lightYellow
                    focus:ring-opacity-50
                  "
                >
                  <Phone size={20} />
                  <span>Call Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
