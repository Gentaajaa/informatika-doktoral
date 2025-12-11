"use client";

import React from 'react';

const RegistrationSection = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b pb-4">
          Pendaftaran & Seleksi
        </h2>

        {/* Introduction */}
        <p className="text-gray-800 mb-6 text-lg">
          Berikut adalah beberapa persyaratan admisi untuk calon mahasiswa PSI-PD:
        </p>

        {/* List 1: Persyaratan Admisi (1-6) */}
        <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-700 text-lg mb-10">
          <li>
            Berasal dari prodi magister rumpun ilmu Informatika dan komputer.
          </li>
          <li>
            Bagi calon mahasiswa PSI-PD yang berasal dari rumpun ilmu non-informatika dan komputer wajib mengikuti program matrikulasi.
          </li>
          <li>
            Memiliki bukti kemampuan bahasa Inggris minimal skor TOEFL 450 (ITP).
          </li>
          <li>
            Memiliki bukti kemampuan akademik minimal skor TPA 475.
          </li>
          <li>
            Memiliki IPK studi program Magister (S2) minimal 3,0.
          </li>
          <li>
            Memiliki jejak rekam penelitian dan publikasi ilmiah (lebih diutamakan).
          </li>
        </ol>

      </div>
    </section>
  );
};

export default RegistrationSection;