'use client';

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  RefreshCcw,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* Left Section - Logo + Social Icons */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start -mt-4">
            <Link href="/" className="inline-block">
              <div className="relative w-[280px] h-[180px] md:w-[350px] md:h-[220px] p-2 animate-float -mt-4 md:-mt-8">
                <Image 
                  src="/logo/logo.PNG" 
                  alt="OPO Travels Logo" 
                  fill
                  className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Social Media Icons near logo */}
            {/* CORRECTED: Increased the left margin dramatically for large screens to ensure a visible horizontal shift. 
               The -mt- classes keep the vertical gap tight. 
               We are using ml-20 which is 5rem (80px) to push the icons far right from the logo's edge. */}
            <div className="flex justify-center lg:justify-start gap-4 -mt-8 md:-mt-10 lg:ml-20"> 
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-purple-600 hover:-translate-y-1 hover:scale-110
                  transition-transform duration-300 shadow-lg hover:shadow-purple-500/25
                `}
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-purple-600 hover:-translate-y-1 hover:scale-110
                  transition-transform duration-300 shadow-lg hover:shadow-purple-500/25
                `}
              >
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-purple-600 hover:-translate-y-1 hover:scale-110
                  transition-transform duration-300 shadow-lg hover:shadow-purple-500/25
                `}
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              
              {/* Company Section */}
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Company
                </h3>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                  <li>
                    <Link
                      href="/about"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <FileText size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <FileText size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>Careers</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <FileText size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Policies Section */}
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Policies
                </h3>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                  <li>
                    <Link
                      href="/terms"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <Shield size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>Terms & Conditions</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <FileText size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund"
                      className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 group"
                    >
                      <RefreshCcw size={18} className="text-purple-500 group-hover:text-purple-400" /> 
                      <span>Refund Policy</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Get In Touch Section */}
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300">
                  <li className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-300 transition-colors">
                    <Phone size={18} className="text-purple-500 flex-shrink-0" /> 
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-300 transition-colors">
                    <Mail size={18} className="text-purple-500 flex-shrink-0" /> 
                    <span>support@opotravels.com</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 hover:text-purple-300 transition-colors">
                    <MapPin size={18} className="text-purple-500 flex-shrink-0" /> 
                    <span>New Delhi, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} OPO Travels. All rights reserved. | 
            <span className="text-purple-400 ml-1">Crafting Unforgettable Journeys</span>
          </p>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}