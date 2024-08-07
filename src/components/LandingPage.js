import React from "react";
import logoWebP from "../images/logo_webp.webp"; // Format gambar modern
import logoJPG from "../images/logo.png"; // Format fallback

const LandingPage = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full px-6">
        <section id="beranda" className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col justify-center sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="font-poppins font-semibold text-[52px] sm:text-[72px] leading-[75px] sm:leading-[100px]">
                Situs Web <br className="hidden sm:block" />
                <span className="text-gradient">GWM</span>
              </h1>
            </div>
            <h1 className="font-poppins font-semibold text-[52px] sm:text-[68px] leading-[75px] sm:leading-[100px] w-full">
              Stat Marketplace.
            </h1>
            <p className="paragraph max-w-[570px] mt-5 font-poppins text-justify">
              Gerai Wirausaha Mandiri (GWM) menjual sembako murah dan
              menyediakan jasa pengiriman serta konsultasi bimbingan belajar.
              Lokasinya strategis dekat universitas, menjadikannya pilihan
              unggul bagi mahasiswa.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center relative my-10 md:my-0">
            <picture>
              <source srcSet={logoWebP} type="image/webp" />
              <source srcSet={logoJPG} type="image/jpeg" />
              <img
                src={logoJPG}
                alt="Logo Gerai Wirausaha Mandiri yang menunjukkan branding dan identitas kami"
                className="w-1/2 md:w-[75%] h-auto rounded-full relative"
                loading="lazy"
                width="400" // Tentukan lebar gambar
                height="400" // Tentukan tinggi gambar
              />
            </picture>
            <div className="absolute top-0 w-[40%] h-[30%] z-0 pink__gradient"></div>
            <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full z-1 white__gradient"></div>
            <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
