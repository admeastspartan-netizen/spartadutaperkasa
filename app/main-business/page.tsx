"use client";
import React from "react";
import Image from "next/image";
import { Leaf, Recycle, Anchor, ArrowRight, ShieldCheck, Droplet, Sprout, Factory } from "lucide-react";
import Link from "next/link";

export default function MainBusiness() {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      <div className="bg-slate-900 pt-36 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 md:flex items-center justify-between">
          <div className="md:w-1/2 pr-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Core Export-Import & <span className="text-orange-500">Trading</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 md:mb-0">
              Fokus kami adalah <strong>clarity</strong> (kejelasan), <strong>traceability</strong> (ketelusuran), dan alur dokumen yang tertib agar transaksi berjalan cepat dan minim risiko.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <UnitUsahaCard 
                title="Sparta Agro" 
                desc="Fokus perdagangan komoditas pangan & agro domestik/ekspor." 
                icon={<Leaf className="text-green-400 mb-2" />}
                bgColor="bg-green-900/40" 
                borderColor="border-green-700/50" 
             />
             <UnitUsahaCard 
                title="Sparta Biomassa" 
                desc="Fokus energi, fuel, dan material industri (Waste to Value)." 
                icon={<Factory className="text-orange-400 mb-2" />}
                bgColor="bg-orange-900/40" 
                borderColor="border-orange-700/50" 
             />
          </div>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        
        <div className="mb-24 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl inline-block mb-4">
                <Droplet size={32}/>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Palm Derivatives Export–Import</h2>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Kami menangani komoditas sawit dari mentah (CPO) hingga produk turunan dan oleochemical. Kami memastikan spesifikasi (Spec-based trading) sesuai permintaan buyer dengan grade Industrial maupun Food.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <DetailItem title="CPO & HACPO" desc="Bulk commodity trading untuk kebutuhan industri & refinery." />
                 <DetailItem title="Palm Olein CP8/CP10" desc="Produk turunan untuk pasar pangan dan industri (Cooking Oil Grade)." />
                 <DetailItem title="Refined POME & PFAD" desc="Produk samping bernilai tinggi untuk bahan baku biodiesel." />
                 <DetailItem title="Glycerin & Oleo" desc="Industrial grade chemical dengan dokumentasi lengkap." />
              </div>
           </div>
           
           <div className="md:w-1/2 w-full order-1 md:order-2 h-[300px] md:h-[500px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl shadow-orange-900/10">
              <Image 
                src="https://images.unsplash.com/photo-1620509400948-f9c2c0a61e37?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Palm Oil Industry" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized 
              />
           </div>
        </div>

        <div className="mb-24 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2 w-full h-[300px] md:h-[500px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl shadow-green-900/10">
              <Image 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
                alt="Biomass PKS" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                unoptimized
              />
           </div>

           <div className="md:w-1/2">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl inline-block mb-4">
                <Recycle size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Biomass Energy & Feed Ingredient</h2>
              <div className="h-1 w-20 bg-green-500 mb-6"></div>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Mengubah produk samping (waste) menjadi nilai tambah ekonomi. Kami menyuplai PKS untuk energi boiler ramah lingkungan dan PKE untuk industri pakan ternak.
              </p>
              
              <div className="space-y-4">
                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4">
                    <div className="mt-1 text-green-600"><Sprout /></div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Palm Kernel Shell (PKS)</h4>
                        <p className="text-slate-600 text-sm">Biomass untuk energi (Energy use). Kualitas ekspor, siap untuk spesifikasi GGL (Green Gold Label) ready.</p>
                    </div>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4">
                    <div className="mt-1 text-green-600"><Leaf /></div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Palm Kernel Expeller (PKE)</h4>
                        <p className="text-slate-600 text-sm">Feed ingredient. Konsistensi spesifikasi protein & fat untuk industri pakan ternak global.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

         <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl inline-block mb-4">
                <Anchor size={32}/>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Commodity Trading</h2>
              <div className="h-1 w-20 bg-blue-500 mb-6"></div>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Memperluas jangkauan dengan komoditas pangan global strategis melalui kemitraan internasional yang kuat (Partnership).
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">Best Seller</div>
                 <h3 className="text-xl font-bold text-blue-900 mb-2">ICUMSA 45 Sugar</h3>
                 <p className="text-slate-600 mb-4 text-sm">
                    <span className="font-semibold text-orange-600">Origin Brazil</span>. White refined sugar untuk kebutuhan export-import trading. Kualitas premium standar internasional.
                 </p>
                 <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-slate-100 text-xs rounded-full text-slate-600 font-medium">Bulk Shipping</span>
                    <span className="px-3 py-1 bg-slate-100 text-xs rounded-full text-slate-600 font-medium">Document Ready</span>
                 </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Thai Jasmine Rice</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Coconut & Kopra</span>
                 </div>
              </div>
           </div>
           
           <div className="md:w-1/2 w-full order-1 md:order-2 h-[300px] md:h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl shadow-blue-900/10">
              <Image 
                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop"
                alt="Sugar Commodity Port" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                unoptimized
              />
           </div>
        </div>

      </section>

      <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-orange-600/10 blur-[100px] rounded-full"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Melakukan Transaksi?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Kami meminimalkan ambiguitas sejak awal. Hubungi kami untuk spesifikasi, MOQ, dan term pembayaran yang jelas.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
                <Link 
                    href="/kontak" 
                    className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2"
                >
                   Hubungi Tim Kami <ArrowRight size={20} />
                </Link>
                <Link 
                    href="/produk" 
                    className="bg-transparent border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2"
                >
                   Lihat Katalog Produk
                </Link>
            </div>
         </div>
      </section>
    </main>
  );
}

function UnitUsahaCard({title, desc, bgColor, borderColor, icon}: any) {
   return (
      <div className={`${bgColor} border ${borderColor} p-6 rounded-2xl backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300`}>
         <div className="flex justify-between items-start">
            <div>
                {icon}
                <h4 className="font-bold text-xl mb-2 text-white">{title}</h4>
            </div>
            <ArrowRight className="text-white/50" size={18}/>
         </div>
         <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
      </div>
   )
}

function DetailItem({title, desc}: any) {
   return (
      <div className="p-5 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg hover:border-orange-100 border border-transparent transition-all duration-300">
         <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <ShieldCheck size={18} className="text-orange-500"/> {title}
         </h4>
         <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
   )
}