import React from "react";

export default function About() {
  const status = [
    { label: "Siswa Aktif", value: "10K+" },
    { label: "Kursus IT", value: "50+" },
    { label: "Mentor Ahli", value: "30+" },
    { label: "Alumni Bekerja", value: "95%" },
  ];

  const misi = [
    "Menyediakan kurikulum IT yang selalu relevan dengan tren industri global.",
    "Membangun ekosistem belajar yang interaktif bagi semua tingkat kemahiran.",
    "Memberikan sertifikasi kompetensi yang diakui secara luas oleh mitra industri.",
  ];
  return (
    <div className="bg-[#F3F4F4] min-h-screen">
      <div className="relative bg-[#061E29] py-24 overflow-hidden text-[#F3F4F4] text-center">
        <div className="top-0 left-0 absolute bg-[#5F9598]/10 rounded-full w-32 h-32 -translate-x-16 -translate-y-16"></div>
        <div className="right-0 bottom-0 absolute bg-[#1D546D]/10 rounded-full w-64 h-64 translate-x-32 translate-y-32"></div>

        <div className="z-10 relative">
          <h1 className="mb-4 font-extrabold text-4xl md:text-6xl tracking-tight">
            Tentang <span className="text-[#5F9598]">EduCourse</span>
          </h1>
          <div className="bg-[#1D546D] mx-auto mb-8 rounded-full w-24 h-1.5"></div>
          <p className="mx-auto px-6 max-w-3xl text-[#F3F4F4]/70 text-lg leading-relaxed">
            Kami adalah platform pembelajaran IT nomor satu di Indonesia yang
            berkomitmen untuk mencetak talenta digital berkualitas dunia melalui
            kurikulum yang terstruktur dan mudah dipahami.
          </p>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="z-20 relative mx-auto -mt-12 px-6 max-w-5xl">
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
          {status.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 border border-gray-100 rounded-2xl text-center">
              <p className="font-black text-[#1D546D] text-3xl">{item.value}</p>
              <p className="mt-1 font-bold text-gray-500 text-xs uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 text-center">
        <h3 className="opacity-80 font-black text-[#1D546D] text-2xl italic uppercase tracking-[0.3em]">
          "Bridging Potential to Digital Excellence"
        </h3>
        <div className="bg-[#5F9598]/30 mx-auto mt-4 rounded-full w-60 h-1"></div>
      </div>

      {/* Visi & Misi */}
      <div className="mx-auto px-6 py-20 max-w-6xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {/* Visi */}
          <div className="group bg-white shadow-sm hover:shadow-2xl p-10 border border-[#5F9598]/10 rounded-[2.5rem] transition-all duration-500">
            <h2 className="flex items-center gap-3 mb-6 font-black text-[#061E29] text-3xl">
              Visi Kami
            </h2>
            <p className="text-[#061E29]/70 text-lg italic leading-relaxed">
              Menjadi pusat unggulan edukasi teknologi di Asia Tenggara yang
              mampu menjembatani kesenjangan antara kebutuhan industri dan
              ketersediaan tenaga ahli melalui akses pendidikan berkualitas yang
              tanpa batas bagi seluruh masyarakat Indonesia.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-[#061E29] shadow-xl p-10 rounded-[2.5rem] text-white">
            <h2 className="mb-6 font-black text-[#5F9598] text-3xl">
              Misi Kami
            </h2>
            <ul className="space-y-6">
              {misi.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  {/* Bullet menggunakan warna Ocean Blue */}
                  <div className="bg-[#1D546D] shadow-[0_0_8px_rgba(29,84,109,0.5)] mt-1.5 rounded-full w-2.5 h-2.5 shrink-0"></div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
