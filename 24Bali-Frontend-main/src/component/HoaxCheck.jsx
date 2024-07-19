import React from "react";
import { useNavigate } from "react-router-dom";

const HoaxCheck = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div className="p-10">
      <div className="bg-white rounded-2xl p-5 mt-[60px] w-full shadow-lg flex flex-col justify-between h-full">
        
        <div className="flex justify-between flex-grow">
          <div className="flex flex-col items-center flex-1">
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>BMKG</h2>
              <p>
              Gelombang Tinggi 5 Meter Terjang Bali, Pulau Dewata Terancam Hanyut!
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Foto Gurita!</h2>
              <p>
              Foto Gurita Raksasa Terdampar di Pantai Bali!.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Laporan</h2>
              <p>
              Ni Luh Djelantik Minta Ratna Sarumpaet Dikenai Sanksi Adat karena Keluar Rumah Saat Nyepi
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Surat</h2>
              <p>
              Surat Undangan Pelatihan dan Bantuan Modal Kemendag di Bali
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lalulintas</h2>
              <p>
              Macet Horor di Bali Diprediksi Sampai 3 Januari 2024
              </p>
            </div>
            <div className="bg-red-500 text-white p-1 px-5 rounded-lg text-center mt-2 w-1/2">
              HOAX
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>BMKG</h2>
              <p>
              BMKG Wilayah III Denpasar memang mengeluarkan peringatan dini potensi gelombang tinggi di perairan selatan Bali pada 14-15 Maret 2024. 
              Namun, ketinggian maksimum yang diprediksikan adalah 2.5 meter, bukan 5 meter. 
              BMKG juga tidak mengeluarkan peringatan tentang pulau Bali yang terancam hanyut.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Foto Gurita</h2>
              <p>
              Foto gurita raksasa yang beredar di media sosial pada Juni 2024 ternyata bukan di Bali, melainkan di Kepulauan Seribu, DKI Jakarta. 
              Foto tersebut diambil pada tahun 2021.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Laporan</h2>
              <p>
              Ratna Sarumpaet memang sempat keluar rumah saat Nyepi 2024, namun tidak ada bukti bahwa Ni Luh Djelantik meminta Ratna Sarumpaet dikenai sanksi adat. 
              Informasi ini beredar tanpa konfirmasi dari sumber terpercaya.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Surat</h2>
              <p>
              Surat Undangan Pelatihan dan Bantuan Modal Kemendag di Bali	Surat undangan yang beredar dengan kop surat Kementerian Perdagangan (Kemendag) dan mengabarkan pelatihan dan bantuan modal di Bali pada Februari 2024 adalah hoax. 
              Kemendag tidak pernah mengeluarkan surat tersebut.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lalu-lintas</h2>
              <p>
              Benar bahwa terjadi kemacetan parah di beberapa kawasan Bali pada periode Natal dan Tahun Baru 2024. 
              Namun, prediksi bahwa kemacetan akan berlangsung hingga 3 Januari 2024 terlalu berlebihan. 
              Situasi lalu lintas sudah mulai berangsur normal pada awal Januari 2024.
              </p>
            </div>
            <div className="bg-green-300 text-black p-1 px-5 rounded-lg text-center mt-2 w-1/2">
              FACT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoaxCheck;
