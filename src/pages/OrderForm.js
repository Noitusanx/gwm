import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import products from '../data/Products';
import address from '../images/address.png';
import whatsapp from '../images/whatsapp.svg';
import bank from '../images/bank.png';
import leftarrow from '../images/leftarrow.png';

const OrderForm = () => {
  const { productId } = useParams();
  const selectedProduct = products.find((p) => p.id === parseInt(productId));

  const [jumlah, setJumlah] = useState(1);
  const [harga, setHarga] = useState(selectedProduct ? selectedProduct.harga : 0);

  useEffect(() => {
    if (selectedProduct) {
      setHarga(selectedProduct.harga * jumlah);
    }
  }, [jumlah, selectedProduct]);

  useEffect(() => {
    const formElement = document.getElementById('checkout-form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
}, []);

  if (!selectedProduct) {
    return <p>Produk tidak ditemukan</p>;
  }

  const handleJumlahChange = (event) => {
    const newJumlah = parseInt(event.target.value);
    if (newJumlah <= selectedProduct.total) {
      setJumlah(newJumlah);
    } else {
      alert(`Jumlah yang dimasukkan melebihi stok yang tersedia [${selectedProduct.total}].`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const address = formData.get('address');
    const phone = formData.get('phone');
    const jumlah = formData.get('jumlah');
    const harga = formData.get('harga');
    const paymentMethod = formData.get('paymentMethod');
    
    const productName = selectedProduct.nama_produk;

    const message = `Halo, saya ingin memesan produk ${productName}. Berikut rincian pesanan saya:\n\nNama: ${name}\nAlamat Pengiriman: ${address}\nNomor Telepon: ${phone}\njumlah: ${jumlah}\nHarga: ${harga}\nMetode Pembayaran: ${paymentMethod}`;

    const whatsappURL = `https://wa.me/6281281939361?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
};


  return (
    <section className="bg-gray-100 text-gray-900 relative min-h-screen font-poppins">
        <Link to="/">
            <img src={leftarrow} alt="left arrow" className="w-6 ml-6 pt-8"/>
        </Link>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
            <div className="md:order-2 md:py-0 md:px-6 my-4">
                <form id="checkout-form" onSubmit={handleSubmit} className="w-full space-y-6 md:mx-0 mx-8">
                <h1 className="text-4xl font-bold pt-3 mr-6">Formulir Pesanan untuk <span className='text-gradient'>{selectedProduct.nama_produk}</span></h1>
                    <input type="hidden" name="product_id" value={selectedProduct.id} />
                    <label className="block mr-8">
                        <span className="mb-1">Nama:</span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nama Anda"
                            className="block w-full bg-gray-100 pl-2 py-2"
                            required
                        />
                    </label>
                    <label className="block mr-8">
                        <span className="mb-1">Alamat Pengiriman:</span>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Alamat Pengiriman Anda"
                            className="block w-full bg-gray-100 pl-2 py-2"
                            required
                        />
                    </label>
                    <label className="block mr-8">
                        <span className="mb-1">Nomor Telepon:</span>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Nomor Telepon Anda"
                            className="block w-full bg-gray-100 pl-2 py-2"
                            required
                        />
                    </label>
                    <label className="block mr-8">
                        <span className="mb-1">jumlah:</span>
                        <input
                            type="number"
                            id="jumlah"
                            name="jumlah"
                            value={jumlah}
                            onChange={handleJumlahChange}
                            max={selectedProduct.jumlah}
                            min={1}
                            placeholder="Jumlah barang yang dipesan"
                            className="block w-full bg-gray-100 pl-2 py-2 pr-4"
                            required
                        />
                    </label>
                    <label className="block mr-8">
                        <span className="mb-1">Harga:</span>
                        <input
                            type="number"
                            id="harga"
                            name="harga"
                            value={harga}
                            readOnly
                            className="block w-full bg-gray-100 pl-2 py-2"
                        />
                    </label>
                    <label className="block mr-8">
                        <span className="mb-1">Metode Pembayaran:</span><br />
                        <input type="radio" id="transfer" name="paymentMethod" value="Transfer Bank" required className="mr-2" />
                        <label htmlFor="transfer">Transfer Bank</label><br />
                        <input type="radio" id="cod" name="paymentMethod" value="COD" required className="mr-2" />
                        <label htmlFor="cod">COD (Cash on Delivery)</label><br />
                    </label>

                    <div className='flex justify-end pt-8'>
                        <button type="submit" className="self-center px-6 py-3 text-lg bg-button-gradient text-gray-600 md:mr-0 mr-6 hover:opacity-70 font-medium rounded-lg">
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
            <div className="md:order-1 md:py-0 md:px-6 my-4 flex justify-center items-center mx-8 md:mx-0">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold mb-5">Kontak</h1>
                    <p className="pt-2 pb-4">Hubungi kontak berikut apabila anda ingin memesan atau memiliki pertanyaan mengenai produk:</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <a href="https://www.google.com/maps/place/Polsek+Lambaro+Angan/@5.5871243,95.3961925,17z/data=!3m1!4b1!4m6!3m5!1s0x304049d7291446bb:0x34dd837a82500540!8m2!3d5.5871243!4d95.3987674!16s%2Fg%2F11g65bzznz?entry=ttu"
                                target="_blank" className="flex" rel="noreferrer">
                                <img src={address} alt="Alamat" className="w-10 h-10 mr-4" />
                                <p>Depan Polsek Lambaro Angan, Lambada Peukan, Kec. Darussalam, Kabupaten Aceh Besar, Aceh.</p>
                            </a>
                        </p>
                        <p className="flex items-center">
                            <a href="https://wa.me/6281281939361" target="_blank" className="flex" rel="noreferrer">
                                <img src={whatsapp} alt="Whatsapp" className="w-10 h-10 mr-4" />
                                <p className='mt-2'>0812 8193 9361</p>
                            </a>
                        </p>
                        <p className="flex items-center">
                            <img src={bank} alt="Bank BSI" className='w-10 mr-4' />
                            <span className='mt-1'>7153050273 - BSI (Sabaruddin)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default OrderForm;
