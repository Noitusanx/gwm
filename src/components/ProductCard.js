/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOrderClick = (product) => {
    if (product.harga === 0) {
        const message = `Halo, saya tertarik dengan layanan ${product.nama_produk} Statistika. Apakah saya bisa konsultasi belajar?`;
        
        const whatsappURL = `https://wa.me/${product.nomor_telepon.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    } else {
        navigate(`/orderform/${product.id}`);
    }
};

  return (
    <>
      <div
        className="duration-500 hover:scale-105 hover:shadow-xl product mx-8 font-poppins"
        onClick={openModal}
      >
        <div className="bg-white rounded-lg shadow-md pb-2 pt-6 relative">
          <div>
            <div className="h-[200px] aspect-w-16 aspect-h-9">
              <img
                src={product.gambar}
                alt="Produk"
                className="rounded-t-lg object-contain w-full h-full"
              />
            </div>
            <div className='flex justify-between'>
              <div className="mx-4 py-3">
                <h3>{product.nama_produk}</h3>
                <h3>Rp {product.harga.toLocaleString('id-ID')}</h3>
              </div>
            </div>
          </div>
          <button
              type="button"
              className='absolute bottom-3 right-3 bg-button-gradient text-blue-900 font-medium px-6 py-2 hover:scale-105 hover:bg-button-hover rounded-lg'
              onClick={() => handleOrderClick(product)}>
              Pesan
          </button>
        </div>
      </div>
      {showModal && (
        <Modal closeModal={closeModal}>
          <div className="font-poppins bg-white rounded-lg z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="min-h-[340px] mx-4 shadow-md border-2 border-gray-400 rounded-lg sm:flex">
                <div className="md:flex px-4 justify-center items-start">
                  <div className="flex justify-center overflow-hidden mt-6">
                    <img
                      src={product.gambar}
                      alt="Product Image"
                      className="object-contain w-[300px] md:h-[300px] object-center mx-2"
                    />
                  </div>
                </div>
                <div className="pt-6 sm:border-l-2 md:flex-1 px-4 sm:justify-start justify-center border-gray-400 flex py-3 pb-6 sm:w-2/3 w-full">
                  <div className="ml-4">
                    <h2 className="text-2xl font-semibold mb-2">{product.nama_produk}</h2>
                    <div className="flex mb-4">
                      <div className="mr-4">
                        <span className="text-xl font-bold">Rp {product.harga.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-bold">Deskripsi Produk:</span>
                      <p className="mt-2 w-full">
                        {product.deskripsi}
                      </p>
                      {product.nomor_telepon && (
                        <div>
                          <a
                            href={`https://wa.me/${product.nomor_telepon.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 underline"
                          >
                            {product.nomor_telepon}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
