export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 pt-12">
        {/* Background Gradient Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects
          </div>

          {/* heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Halo, saya </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Alicia Joice Irawan Rarun Rompas
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Siswa XII RPL 1 yang passionate di bidang web development. Membangun pengalaman melalui project nyata dan terus belajar teknologi terbaru.
          </p>

          {/* action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-300 shadow-lg shadow-indigo-600/25"
            >
              Lihat Portfolio
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 font-medium transition-colors duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* Skills / Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apa yang Saya Lakukan
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Beberapa keahlian dan bidang yang saya tekuni selama belajar di jurusan RPL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-xl">💻</div>
            <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Membangun antarmuka web yang responsif dan interaktif menggunakan React, Next.js, dan Tailwind CSS.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-xl">⚙️</div>
            <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mengembangkan API dan server-side logic dengan Express.js dan mengelola database MySQL.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-xl">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mendesain pengalaman pengguna yang intuitif dan tampilan visual yang modern dan menarik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}