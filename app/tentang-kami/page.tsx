import React from "react";

export default function About() {
  return (
    <main>
      <div className="bg-slate-900 pt-32 pb-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang Perusahaan</h1>
          <p className="text-slate-400">Dedikasi kami untuk kualitas dan kepercayaan.</p>
        </div>
      </div>

      <section className="py-16 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-6">
          <p>
            <span className="font-bold text-slate-900">PT Sparta Duta Perkasa</span> adalah perusahaan yang bergerak di bidang 
            Konstruksi, Pemasaran, dan Perdagangan Ekspor-Impor. Kami berfokus pada komoditas dan produk turunan sawit, 
            termasuk Oleochemical dan produk samping bernilai industri.
          </p>
          <p>
            Berdomisili operasional di Sumatera Barat, Indonesia, kami hadir untuk melayani kebutuhan buyer domestik 
            maupun internasional melalui jaringan supply & distribusi yang terstruktur.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-xl mb-2 text-slate-900">Visi Kami</h3>
              <p>Menjadi mitra perdagangan global yang mengutamakan kejelasan (clarity), ketelusuran (traceability), dan kemitraan jangka panjang.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-xl mb-2 text-slate-900">Unit Usaha</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Sparta Agro (Pangan & Komoditas)</li>
                <li>Sparta Biomassa (Energi & Fuel)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}