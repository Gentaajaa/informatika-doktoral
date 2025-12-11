"use client";

import React, { useState } from 'react';
import { FaChalkboardTeacher, FaWallet, FaChartLine, FaUserTie, FaUniversity, FaFlask, FaIndustry } from 'react-icons/fa';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('dosen');

  // Data from PDF Page 1 (Dosen)
  const lecturers = [
    { name: "Prof. Fathul Wahid", role: "Professor", image: "/photo_profile/Fathul-Wahid-1.png" },
    { name: "Prof. Sri Kusumadewi", role: "Professor", image: "/photo_profile/Sri-Kusumadewi.png" },
    { name: "Izzati Muhimmah, Ph.D", role: "Doctoral Lecturer", image: "/photo_profile/Izzati-Muhimmah.png" },
    { name: "Dr. R. Teduh Dirgahayu", role: "Doctoral Lecturer", image: "/photo_profile/R-Teduh-Dirgahayu.png" },
    { name: "Ir. Dhomas Hatta Fudholi, Ph.D", role: "Doctoral Lecturer", image: "/photo_profile/Dhomas-Hatta.png" },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Tab Navigation Headers */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('dosen')}
            className={`flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all border-b-4 ${activeTab === 'dosen'
              ? 'border-blue-900 text-blue-900 bg-gray-50'
              : 'border-transparent text-gray-500 hover:text-blue-900'
              }`}
          >
            <FaChalkboardTeacher className="text-xl" /> Dosen
          </button>

          <button
            onClick={() => setActiveTab('biaya')}
            className={`flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all border-b-4 ${activeTab === 'biaya'
              ? 'border-blue-900 text-blue-900 bg-gray-50'
              : 'border-transparent text-gray-500 hover:text-blue-900'
              }`}
          >
            <FaWallet className="text-xl" /> Perkiraan Biaya
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[300px]">

          {/* TAB 1: DOSEN (Refined Grid Layout) */}
          {activeTab === 'dosen' && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Tim Pengajar Ahli</h3>
                <p className="text-gray-600">Dibimbing oleh para profesor dan doktor berpengalaman di bidangnya.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lecturers.map((dosen, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
                    <div className="h-24 bg-blue-900 relative">
                      {/* Decorative circle for avatar background */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full p-1">
                        <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                          {/* Replace src below with actual photo later */}
                          <img
                            src={dosen.image.startsWith("/")
                              ? dosen.image
                              : `https://ui-avatars.com/api/?name=${dosen.name}&background=random`}
                            alt={dosen.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-12 pb-6 px-4 text-center">
                      <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {dosen.name}
                      </h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{dosen.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: BIAYA (Source: PDF Page 2) */}
          {activeTab === 'biaya' && (
            <div className="animate-fade-in max-w-3xl mx-auto">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <FaWallet /> Rincian Biaya Studi
                </h3>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-sm">
                    <div>
                      <p className="text-gray-500 text-sm uppercase font-bold">Biaya Pendaftaran</p>
                      <p className="text-gray-600 text-sm">Dibayarkan satu kali saat mendaftar</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mt-2 md:mt-0">
                      Rp 1.000.000
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <div>
                      <p className="text-gray-500 text-sm uppercase font-bold">Biaya Pendidikan (Per Semester)</p>
                      <p className="text-gray-600 text-sm">Dapat diangsur 2x dalam satu semester</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-900 mt-2 md:mt-0">
                      Rp 15.000.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TabSection;