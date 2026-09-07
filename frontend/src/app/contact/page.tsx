export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ini header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ini form kontak */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-6">Kirim Pesan</h2>
            <form className="space-y-5">
              {/* Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Masukkan nama anda"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Tentang apa?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tulis pesan anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                ></textarea>
              </div>

              {/* tombol submit */}
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 transition-all shadow-lg shadow-indigo-500/25"
              >
                Kirim Pesan
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-4 text-center">
              * Form ini belum fungsional. Akan dikoneksikan ke backend di pertemuan selanjutnya.
            </p>
          </div>

          {/* info kontak */}
          <div className="space-y-6">
            {/* Info Card */}
            {[
              {
                icon: "📧",
                title: "Email",
                value: "aliciajoiceirawanrr@gmail.com",
                description: "Kirim email kapan saja, saya akan membalas secepatnya.",
              },
              {
                icon: "📞",
                title: "Telepon",
                value: "+62 812-4212-1681",
                description: "Tersedia di jam sekolah (08.00 – 23.00 WIB).",
              },
              {
                icon: "📍",
                title: "Lokasi",
                value: "Indonesia",
                description: "Bisa bekerja sama secara remote maupun offline.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-indigo-300 text-sm mt-0.5">{item.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Sosial Media */}
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <h3 className="text-white font-semibold mb-4">Social Media</h3>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 text-sm hover:text-white hover:border-gray-600 transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}