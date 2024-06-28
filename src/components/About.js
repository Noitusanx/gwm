import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:px-16 px-6 w-4/5 mx-auto py-8">
      <div className="flex-1">
        <h1 className="font-poppins font-semibold text-[52px] leading-[75px] text-center sm:text-left text-blue-900 mb-6">Tentang Kami</h1>
        <p className="text-lg leading-relaxed font-poppins text-justify mb-6 text-gray-700">
          Gerai Wirausaha Mandiri (GWM) adalah Kelontong yang menyediakan berbagai kebutuhan masyarakat seperti Beras, Telur, Gula, minyak makan, dan sayur-sayuran. GWM sangat membantu mahasiswa karena lokasinya yang strategis dekat dengan wilayah universitas, harga ekonomis, dan menyediakan jasa pengiriman produk ke lokasi pelanggan. Hal ini membuat GWM lebih unggul dibandingkan dengan kelontong lainnya. Selain itu, GWM juga menyediakan konsultasi bimbingan belajar Matematika, Statistika, serta Modul Belajar.
        </p>
        <div>
          <h2 className="font-poppins font-semibold text-[24px] leading-[36px] text-blue-900 mb-4">Tujuan</h2>
          <ul className="font-poppins list-disc list-inside space-y-2 text-gray-700">
            <li>Menjadi toko kelontong yang terkemuka di Indonesia, harga ekonomis, inovatif dan dinamis</li>
            <li>Harga ekonomis</li>
            <li>Inovatif dan dinamis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
