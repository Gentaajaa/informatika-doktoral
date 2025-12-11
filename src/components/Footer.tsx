"use client";

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaChevronUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-yellow-400 text-blue-900 font-sans">
      
      {/* Scroll to Top Button (Floating) */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-blue-700 text-white p-3 rounded shadow-lg hover:bg-blue-800 transition-colors z-10"
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* COLUMN 1: Hubungi Kami */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Hubungi Kami</h3>
            
            <div className="space-y-4 text-sm font-medium leading-relaxed">
              <p className="font-bold text-lg">
                Jurusan Informatika
              </p>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-900 opacity-70" />
                <span>
                  Gedung KH Mas Mansyur Lantai 1<br/>
                  Kampus Terpadu UII<br/>
                  Jalan Kaliurang km. 14,5 Sleman<br/>
                  Yogyakarta 55584
                </span>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-900 opacity-70" />
                <span>+62 274 895287 ext. 118</span>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-900 opacity-70" />
                {/* Updated email to match context */}
                <a href="mailto:informatika@uii.ac.id" className="hover:underline">informatika@uii.ac.id</a>
              </div>
            </div>

            {/* Badges / Logos Section */}
            <div className="mt-8 flex items-center space-x-4">
              {/* Placeholders for "Unggul" and "Kampus Merdeka" logos */}
               <div className="h-16 w-auto bg-white/20 border-2 border-blue-900/10 rounded p-1 flex items-center justify-center">
                  <span className="text-xs font-bold text-center px-2">AKREDITASI<br/>UNGGUL</span>
               </div>
               <div className="h-16 w-auto bg-white/20 border-2 border-blue-900/10 rounded p-1 flex items-center justify-center">
                  <span className="text-xs font-bold text-center px-2">Kampus<br/>Merdeka</span>
               </div>
            </div>
          </div>

          {/* COLUMN 2: Informasi Penting */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Informasi Penting</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Universitas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fakultas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Akademik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perpustakaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal Jurnal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Keagamaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kemahasiswaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pengabdian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kewirausahaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teknologi Informasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UII Gateway</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mahasiswa Baru</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Sosial Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Sosial Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-900 text-white py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; Hak Cipta {new Date().getFullYear()} - Jurusan Informatika Universitas Islam Indonesia</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;