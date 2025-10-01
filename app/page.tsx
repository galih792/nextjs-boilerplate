export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <main className="flex flex-col gap-10 items-center p-10">
        {/* Judul */}
        <h1 className="text-center text-5xl font-extrabold tracking-wide drop-shadow-lg bg-gradient-to-r from-red-500 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
          🚘 Galeri Mobil Galll 🚗
        </h1>

        {/* Deskripsi */}
        <p className="text-center text-gray-300 max-w-2xl leading-relaxed">
          Halo nama saya <span className="font-semibold text-red-400">Galih Ardy Pratama</span>.  
          Ini <span className="text-yellow-400">website</span> sederhana yang saya edit sendiri.
        </p>

        {/* Card Mobil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-red-500/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://www.wallpaperbetter.com/wallpaper/823/337/175/mitsubishi-lancer-evolution-9-1080P-wallpaper.jpg"
              alt="evolution 9"
              className="rounded-lg object-cover w-[600px] h-[210px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Evolution 9</h2>
            <p className="text-gray-400 text-sm">⚡ Kecepatan tinggi dengan desain elegan.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://i.pinimg.com/originals/55/3b/08/553b08ac7cf2f0c1d6488881f2d90424.jpg"
              alt="city z"
              className="rounded-lg object-cover w-[400px] h-[300px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">City Z</h2>
            <p className="text-gray-400 text-sm">✨ Nyaman, stylish, dan cocok buat nongki.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://nmaa.co.id/wp-content/uploads/2022/01/Honda-Accord-Ferio-1997-Reinaldi-BDG-4-e1642911829158.jpg"
              alt="civic ferio"
              className="rounded-lg object-cover w-[600px] h-[210px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Civic Ferio</h2>
            <p className="text-gray-400 text-sm">🔥 Ikonik, nyaman, dan kesukaan ciwi".</p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://bringatrailer.com/wp-content/uploads/2022/07/1997_toyota_land-cruiser-fzj80_landcruiser-9-33887.jpg"
              alt="VX 80"
              className="rounded-lg object-cover w-[300px] h-[220px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">VX 80</h2>
            <p className="text-gray-400 text-sm">🔥 Idaman bapak", auto dilirik calon mertua.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-red-500/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://img-ik.cars.co.za/images/2019/3/Suzuki%20Ertiga/tr:n-news_1200x/Suzuki_Ertiga-117.jpg"
              alt="All New Ertiga Hybird"
              className="rounded-lg object-cover w-[370px] h-[210px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">All New Ertiga Hybrid</h2>
            <p className="text-gray-400 text-sm">⚡ Salah satu mobil mpv keluarga paling nyaman.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://wallpaperbat.com/img/146634874-suzuki-jimny.jpg"
              alt="Jimny JB74"
              className="rounded-lg object-cover w-[350px] h-[240px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Jimny JB74</h2>
            <p className="text-gray-400 text-sm">✨ Cocok buat bahan trabas dan ganteng.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-4 flex justify-center border-t border-gray-700">
        <p className="text-sm">
          © 2025 <span className="text-red-400 font-semibold">Galeri Mobil Galll</span> - Semua hak dilindungi 🚘
        </p>
      </footer>
    </div>
  );
}
