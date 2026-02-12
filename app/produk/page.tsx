import React from "react";
import { Check, ArrowUpRight, Package, Droplet, Sprout } from "lucide-react";

const productCategories = [
  {
    id: "palm-derivatives",
    title: "Palm Derivatives (Export-Import)",
    description: "Komoditas sawit utama dengan fokus pada kejelasan dokumen dan transaksi.",
    icon: <Droplet className="w-8 h-8" />,
    accentColor: "from-orange-500 to-yellow-500", 
    items: [
      { name: "CPO (Crude Palm Oil)", desc: "Komoditas dasar untuk kebutuhan trading global." },
      { name: "HACPO (High Acid CPO)", desc: "Untuk kebutuhan industri spesifik." },
      { name: "Palm Olein CP8 & CP10", desc: "Produk turunan untuk pasar pangan dan industri." },
      { name: "Refined POME & PFAD", desc: "Produk samping bernilai industri." },
      { name: "Glycerin & Oleo Chemical", desc: "Grade industri sesuai permintaan buyer." },
    ]
  },
  {
    id: "biomass-feed",
    title: "Biomass & Feed Ingredient",
    description: "Produk samping (waste) bernilai ekonomi untuk energi dan pakan ternak.",
    icon: <Sprout className="w-8 h-8" />,
    accentColor: "from-green-500 to-emerald-500",
    items: [
      { name: "Palm Kernel Shell (PKS)", desc: "Biomass untuk energi boiler industri (GGL spec ready)." },
      { name: "Palm Kernel Expeller (PKE)", desc: "Bahan baku pakan ternak dengan konsistensi spesifikasi." },
    ]
  },
  {
    id: "global-commodity",
    title: "Global Commodity Trading",
    description: "Perdagangan komoditas pangan internasional melalui jaringan terpercaya.",
    icon: <Package className="w-8 h-8" />,
    accentColor: "from-blue-500 to-cyan-500",
    items: [
      { name: "ICUMSA 45 Sugar", desc: "White refined sugar, Origin Brazil." },
      { name: "Thai Jasmine Rice", desc: "Beras kualitas premium untuk pasar internasional." },
      { name: "Kelapa & Kopra", desc: "Komoditas kelapa dan turunannya." },
    ]
  }
];

export default function Products() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <div className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/30 rounded-full blur-[120px] opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
            Produk & Komoditas Unggulan
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Kami memastikan ketersediaan, spesifikasi yang konsisten, dan traceability untuk setiap produk yang kami perdagangkan.
          </p>
        </div>
      </div>

      <section className="py-16 container mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-3 gap-10">
          {productCategories.map((cat) => (
            <div key={cat.id} className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 overflow-hidden hover:border-slate-600 transition-all duration-500">
              
              <div className={`absolute inset-0 bg-linear-to-br ${cat.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${cat.accentColor} text-white mb-6 shadow-lg`}>
                  {cat.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">{cat.description}</p>
                
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <Check className={`w-5 h-5 mt-1 text-slate-500 group-hover:text-white transition-colors shrink-0`} />
                      <div>
                        <h4 className="text-slate-200 font-semibold group-hover/item:text-white transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-slate-800">
                   <a href="/kontak" className="flex items-center justify-between w-full text-slate-300 hover:text-white group/link transition-colors">
                      <span className="text-sm font-semibold">Minta Penawaran</span>
                      <ArrowUpRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}