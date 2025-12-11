"use client";

import React from 'react';
import Link from 'next/link';
// 1. Import the specific icons you need
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      {/* Top Yellow Bar */}
      <div className="bg-yellow-400 py-2 px-4 text-sm text-gray-800">
        <div className="container mx-auto flex justify-end items-center space-x-4">
          <Link href="#" className="hover:underline">Universitas</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Fakultas</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">UII Gateway</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Admisi</Link>
          <span>|</span>

          {/* Language Flags (Using simple colored divs for now, replace with <img> later) */}
          <div className="flex space-x-2 items-center">
            <div className="w-6 h-4 bg-red-600 border border-gray-300 cursor-pointer" title="Bahasa Indonesia"></div>
            <span>|</span>
            <div className="w-6 h-4 bg-blue-800 border border-gray-300 cursor-pointer" title="English"></div>
          </div>
        </div>
      </div>

      {/* Main Blue Navigation Bar */}
      <div className="bg-blue-900 text-white py-4 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center mb-4 lg:mb-0">
            {/* Replace the src below with your actual logo file path in /public */}
            <img
              src="/V_BW_BG_B.png"
              alt="UII Logo"
              className="h-16 w-auto mr-4"
              // Fallback if no image exists yet:
              onError={(e) => {
                e.currentTarget.style.display = 'none'; // hide broken image
                e.currentTarget.parentElement!.classList.add('bg-white', 'w-16', 'h-16', 'rounded-full'); // add placeholder shape
              }}
            />
          </div>

          {/* Navigation Links and Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase">
            <Link href="#" className="hover:text-yellow-400 transition">Jurusan</Link>
            <Link href="#" className="hover:text-yellow-400 transition">Program Studi</Link>
            <Link href="#" className="hover:text-yellow-400 transition">Alumni</Link>
            <Link href="#" className="hover:text-yellow-400 transition">Info Akademik</Link>

            {/* FAQ Button */}
            <Link href="#" className="border-2 border-white px-3 py-1 hover:bg-white hover:text-blue-900 transition">
              FAQ
            </Link>

            {/* Icons Section */}
            <div className="flex items-center space-x-4 text-lg">
              <button className="hover:text-yellow-400 transition" aria-label="Search">
                <FaSearch />
              </button>

              <div className="h-4 w-px bg-gray-500 mx-2 hidden md:block"></div> {/* Separator */}

              <a href="#" className="hover:text-yellow-400 transition" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 transition" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-400 transition" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;