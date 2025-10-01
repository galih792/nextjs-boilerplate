// pages/index.js

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-gray-800">Toko Mobil Njay</h1>
        <p className="text-gray-600 text-center sm:text-left max-w-xl">
          Selamat datang di toko mobil Njay MDF Pro Audio 🚗🔥. 
          Pilih mobil impianmu dengan harga bersahabat dan kualitas terbaik.
        </p>

        {/* Mobil Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {/* Mobil Sport Merah */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.z_RKNfPgoT3pT-_KKziqxwHaE7?pid=Api&P=0&h=220"
              alt="Mobil Sport Merah"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-lg font-semibold">Mobil Sport Merah</h2>
            <p className="text-gray-500 text-sm">
              Kecepatan tinggi dengan desain elegan.
            </p>
          </div>

          {/* Mobil Hitam Mewah */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.Vv4dAdepNzWEcAt8J787hwHaEF?pid=Api&P=0&h=220"
              alt="Mobil Hitam Mewah"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-lg font-semibold">Mobil Hitam Mewah</h2>
            <p className="text-gray-500 text-sm">
              Nyaman, stylish, dan cocok buat bisnis.
            </p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-600">
        <p>© 2025 Toko Mobil Njay - Semua hak dilindungi 🚘</p>
      </footer>
    </div>
  );
}
