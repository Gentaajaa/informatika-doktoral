import React from 'react';
import { FaThLarge, FaHeart, FaUniversity, FaClock, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const MainContent = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">

      {/* LEFT COLUMN: Main Information (Timeline Style) */}
      <div className="w-full lg:w-2/3">
        <div className="relative border-l-2 border-gray-200 ml-6 md:ml-10 space-y-12">

          {/* Item 1: Profil Lulusan (Source: PDF Page 1) */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Icon Bubble */}
            <div className="absolute -left-[21px] top-0 w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm text-gray-400 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
              <FaThLarge />
            </div>

            {/* Content Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Profil Lulusan Program Studi
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lulusan Program Studi Informatika Program Doktor diharapkan memiliki kapabilitas yang baik dalam melakukan riset dan pengembangan keilmuan bidang informatika dalam konteks sistem informasi enterprise dan informatika medis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan kapabilitas tersebut, lulusan diharapkan dapat berperan aktif dalam pengembangan dan implementasi informatika kontekstual untuk kepentingan masyarakat luas, baik sebagai akademisi, peneliti, maupun praktisi industri.
              </p>
            </div>
          </div>

          {/* Item 2: Visi Misi (Source: PDF Page 1) */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Icon Bubble */}
            <div className="absolute -left-[21px] top-0 w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm text-gray-400 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
              <FaHeart />
            </div>

            {/* Content Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Visi Keilmuan
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Visi keilmuan PSIPD adalah menjadi pionir dalam ilmu informatika kontekstual dan mencetak lulusan doktor berkarakter ulul albab yang inovatif serta adaptif dalam menghadapi tantangan global. [cite: 5]
              </p>
              <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2">
                <li>
                  <strong>Pertama,</strong> PSIPD menjadi yang pertama atau yang terdepan dalam mengembangkan pengetahuan informatika yang relevan dan sesuai dengan konteks kebutuhan akademik, masyarakat, dan industri. Oleh karena itu, PSIPD berfokus pada pemahaman yang mendalam konteks situasi nyata dan mampu menghasilkan solusi inovatif yang berdampak.
                </li>
                <li>
                  <strong>Kedua,</strong> PSIPD mampu menghasilkan lulusan doktor yang tidak hanya memiliki keunggulan dalam hal kontekstual bidang informatika, tetapi juga memiliki karakter yang sesuai dengan nilai-nilai distingtif ulul albab, yaitu integritas, kejujuran, dan moralitas tinggi.
                </li>
                <li>
                  <strong>Ketiga,</strong> PSIPD juga menekankan pada kreativitas dan kemampuan beradaptasi bagi lulusannya dalam menghadapi tantangan dunia global yang terus berubah. Lulusan doktor PSIPD memiliki kompetensi dalam mengembangkan solusi inovatif untuk masalah nyata dan kompleks di tingkat internasional.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN: Sidebar Info */}
      <div className="w-full lg:w-1/3 space-y-6">

        {/* Sidebar Item 1: Gelar */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-yellow-400 p-3 text-center font-bold text-gray-800">
            Gelar & Strata
          </div>
          <div className="p-6 text-center text-gray-700">
            <FaUniversity className="inline-block text-3xl mb-2 text-blue-900" />
            <p className="font-semibold">Dr. - Doktor (S3)</p>
            <p className="text-sm text-gray-500 mt-1">Program Studi Informatika [cite: 1]</p>
          </div>
        </div>

        {/* Sidebar Item 2: Biaya Studi (Source: PDF Page 2) */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-yellow-400 p-3 text-center font-bold text-gray-800">
            Biaya Studi
          </div>
          <div className="p-6 text-gray-700 text-sm space-y-4">
            <div className="flex items-start">
              <FaMoneyBillWave className="mt-1 mr-3 text-blue-900 flex-shrink-0" />
              <div>
                <p className="font-bold">Biaya Pendidikan</p>
                <p>Rp 15.000.000 / semester</p>
                <p className="text-xs text-gray-500">(Dapat diangsur 2x) [cite: 21]</p>
              </div>
            </div>
            <div className="border-t pt-3 flex items-start">
              <FaMoneyBillWave className="mt-1 mr-3 text-blue-900 flex-shrink-0" />
              <div>
                <p className="font-bold">Biaya Pendaftaran</p>
                <p>Rp 1.000.000 [cite: 22]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Item 3: Kampus */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-yellow-400 p-3 text-center font-bold text-gray-800">
            Kampus
          </div>
          <div className="p-6 text-gray-700 text-sm flex items-start">
            <FaMapMarkerAlt className="mt-1 mr-3 text-blue-900 flex-shrink-0" />
            <p>
              Gedung K.H. Mas Mansyur<br />
              Kampus Terpadu UII<br />
              Jalan Kaliurang KM 14,5<br />
              Sleman, Yogyakarta 55584
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainContent;