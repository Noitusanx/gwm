/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import whatsapp from '../images/whatsapp.svg';
import address from '../images/address.png';

const Footer = () => {
  return (
    <footer id="kontak" class="bg-blue-gradient font-poppins pt-1">
    <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mt-8 pt-3">
        <div class="sm:px-16 px-6">
            <a href="" class="font-bold text-3xl">GWM - Stat Marketplace</a>
            <p class="mt-3 text-justify">
                Gerai Wirausaha Mandiri (GWM) menyediakan sembako murah untuk mahasiswa, ibu rumah tangga, guru
                honorer, pekerja buruh, dan anak kos di Darussalam, Banda Aceh, guna membantu mereka menghadapi
                kesulitan ekonomi.</p>
        </div>

        <div class="flex xs:justify-evenly px-6 xs:mt-0 mt-5">
            <ul class="space-y-1">
                <h1 class="font-bold mb-3">Layanan</h1>
                <li>
                    <a href="#beranda">Beranda</a>
                </li>
                <li>
                    <a href="#kategori">Kategori</a>
                </li>
                <li>
                    <a href="#produk">Produk</a>
                </li>
            </ul>
        </div>

        <div class="sm:px-16 px-6 space-y-2 md:mt-0 mt-5">
            <h1 class="font-bold mb-3">Kontak</h1>
            <div>
                <a href="https://wa.me/6281281939361" target="_blank" class="flex" rel="noreferrer">
                    <img src={whatsapp} alt="Whatsapp" class="w-7 h-7" />
                    <p class="ml-2">0812 8193 9361</p>
                </a>
            </div>
            <div class="flex">
                <a href="https://www.google.com/maps/place/Polsek+Lambaro+Angan/@5.5871243,95.3961925,17z/data=!3m1!4b1!4m6!3m5!1s0x304049d7291446bb:0x34dd837a82500540!8m2!3d5.5871243!4d95.3987674!16s%2Fg%2F11g65bzznz?entry=ttu"
                    target="_blank" class="flex" rel="noreferrer">
                    <img src={address} alt="Alamat" class="w-6 h-6 mr-2" />
                    <p>Depan Polsek Lambaro Angan, Lambada Peukan, Kec. Darussalam, Kabupaten Aceh Besar, Aceh.</p>
                </a>
            </div>
        </div>
    </div>

    <p class="text-center py-4 px-2 mt-8">&copy; 2024 GWM - Stat Marketplace. Hak Cipta Dilindungi.</p>
</footer>
  );
};

export default Footer;
