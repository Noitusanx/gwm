import React from "react";
import logo from "../images/logo.png";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
        <section id="beranda" class="flex md:flex-row flex-col ">
            <div class="flex-1 flexStart flex-col sm:px-16 px-6">
            <div class="flex flex-row justify-between items-center w-full">
                <h1
                class="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                Situs Web <br class="sm:block hidden" />
                <span class="text-gradient">GWM </span>
                </h1>
            </div>
            <h1 class="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
                Stat Marketplace.</h1>
            <p class="paragraph max-w-[570px] mt-5 font-poppins text-justify">Gerai Wirausaha Mandiri (GWM) menjual
                sembako murah dan
                menyediakan jasa pengiriman serta konsultasi bimbingan belajar. Lokasinya strategis dekat universitas,
                menjadikannya pilihan unggul bagi mahasiswa.</p>
            </div>

            <div className="flex-1 w-[100%] flex justify-center items-center md:my-0 my-10 relative">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="w-1/2 md:w-[75%] h-auto rounded-full relative" 
                />
                <div className="z-[0] absolute w-[40%] h-[30%] top-0 pink__gradient"></div>
                <div className="z-[1] absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
                <div className="z-[0] absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
            </div>
        </section>
        </div>
    </div>
  );
};

export default LandingPage;
