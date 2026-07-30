export default function PortfolioPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Beberapa project pilihan yang telah saya kerjakan selama belajar di jurusan RPL.
          </p>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Portfolio v1",
              category: "Web Development",
              description: "Website portofolio pribadi menggunakan Next.js dan Tailwind CSS.",
              tech: ["Next.js", "Tailwind CSS", "TypeScript"],
            },
            {
              title: "Aplikasi Kasir Toko",
              category: "Desktop / Web",
              description: "Sistem point of sales untuk mengelola transaksi dan stok barang.",
              tech: ["React", "Express.js", "MySQL"],
            },
            {
              title: "Landing Page UMKM",
              category: "Frontend",
              description: "Landing page modern yang responsif untuk produk lokal.",
              tech: ["HTML", "CSS", "JavaScript"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center border-b border-gray-800">
                <span className="text-4xl">🚀</span>
              </div>

              <div className="p-6">
                <span className="text-xs text-indigo-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}