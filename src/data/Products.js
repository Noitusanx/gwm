import berasbermerek from "../images/beras1_75.jpg";
import beras from "../images/beras1_70.jpg";
import minyakmakan from "../images/minyakmakan.jpg";
import sayurkangkung from "../images/kankung.jpg";
import sayurbayam from "../images/bayam.jpeg";
import plastikminyak from "../images/plastikminyak.jpg";
import plastikminyaksetengah from "../images/plastikminyaksetengah.jpg";
import telur from "../images/telur.jpg";
import pisaucutter from "../images/pisaucutter.jpg";
import pisaudaging from "../images/pisaudaging.jpg";
import gula from "../images/gula.jpg";
import matematika from "../images/matematika.jpg";
import statistika from "../images/statistika.jpg";
import telurayamkampung from "../images/telur_ayamkampung.jpeg";
import konsultasibelajar from "../images/konsultasibelajar.jpg";

const products = [
  {
    id: 1,
    nama_produk: "Beras Bermerek 5 Kg",
    harga: 75000,
    gambar: berasbermerek,
    category: "Bahan Pokok",
    total: 20,
    deskripsi:
      "Harganya 75.000/5kg dengan jumlah barang yang tersedia 20 unit beras",
  },
  {
    id: 2,
    nama_produk: "Beras 5 Kg",
    harga: 70000,
    gambar: beras,
    category: "Bahan Pokok",
    total: 20,
    deskripsi:
      "Harganya 70.000/5kg dengan jumlah barang yang tersedia 20 unit beras",
  },
  {
    id: 3,
    nama_produk: "Minyak Makan",
    harga: 15000,
    gambar: minyakmakan,
    category: "Bahan Pokok",
    total: 20,
    deskripsi:
      "Harganya 15.000/liter dengan jumlah barang yang tersedia 20 liter",
  },
  {
    id: 4,
    nama_produk: "Sayur Kangkung",
    harga: 3000,
    gambar: sayurkangkung,
    category: "Bahan Pokok",
    total: 84,
    deskripsi: "Harganya 3.000/ikat dengan jumlah barang yang tersedia 84 ikat",
  },
  {
    id: 5,
    nama_produk: "Sayur Bayam",
    harga: 3000,
    gambar: sayurbayam,
    category: "Bahan Pokok",
    total: 84,
    deskripsi: "Harganya 3.000/ikat dengan jumlah barang yang tersedia 84 ikat",
  },
  {
    id: 6,
    nama_produk: "Plastik Minyak (1 kg)",
    harga: 60000,
    gambar: plastikminyak,
    category: "Bahan Pokok",
    total: 5,
    deskripsi: "Harganya 60.000/pack dengan jumlah barang yang tersedia 5 pack",
  },
  {
    id: 7,
    nama_produk: "Plastik Minyak (1/2 kg)",
    harga: 50000,
    gambar: plastikminyaksetengah,
    category: "Bahan Pokok",
    total: 6,
    deskripsi: "Harganya 50.000/pack dengan jumlah barang yang tersedia 6 pack",
  },
  {
    id: 8,
    nama_produk: "Telur",
    harga: 2000,
    gambar: telur,
    category: "Bahan Pokok",
    total: 90,
    deskripsi:
      "Harganya 2000/butir dengan jumlah barang yang tersedia 90 butir",
  },
  {
    id: 9,
    nama_produk: "Telur Ayam Kampung",
    harga: 3000,
    gambar: telurayamkampung,
    category: "Bahan Pokok",
    total: 90,
    deskripsi:
      "Harganya 3000/butir dengan jumlah barang yang tersedia 90 butir",
  },
  {
    id: 10,
    nama_produk: "Pisau Cutter",
    harga: 2500,
    gambar: pisaucutter,
    category: "Bahan Pokok",
    total: 48,
    deskripsi: "Harganya 2.500/pcs dengan jumlah barang yang tersedia 48 pcs",
  },
  {
    id: 11,
    nama_produk: "Pisau Daging",
    harga: 33000,
    gambar: pisaudaging,
    category: "Bahan Pokok",
    total: 3,
    deskripsi: "Harganya 33.000/unit dengan jumlah barang yang tersedia 3 unit",
  },
  {
    id: 12,
    nama_produk: "Gula",
    harga: 18000,
    gambar: gula,
    category: "Bahan Pokok",
    total: 20,
    deskripsi:
      "Harganya 18.000/kg dengan jumlah barang yang tersedia 20kg gula",
  },
  {
    id: 13,
    nama_produk: "Matematika",
    harga: 120000,
    gambar: matematika,
    category: "Modul Belajar",
    total: 1,
    deskripsi: "Buku matematika dengan harga 120.000/buku",
  },
  {
    id: 14,
    nama_produk: "Statistika",
    harga: 120000,
    gambar: statistika,
    category: "Modul Belajar",
    total: 1,
    deskripsi: "Buku matematika dengan harga 120.000/buku",
  },
  {
    id: 15,
    nama_produk: "Konsultasi Belajar",
    harga: 0,
    gambar: konsultasibelajar,
    category: "Konsultasi Belajar",
    deskripsi:
      "Konsultasi belajar Statistika secara gratis! Caranya dengan menghubungi nomor berikut: ",
    nomor_telepon: "+62 812-8193-9361",
  },
];

export default products;
