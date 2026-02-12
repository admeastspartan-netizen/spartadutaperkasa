"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Leaf, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1576473511969-6ea4136f27c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Background Sawit" 
            fill
            className="object-cover"
            priority
            unoptimized 
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              PT SPARTA DUTA PERKASA
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Membangun Masa Depan,<br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200">
                Menghubungkan Dunia.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Spesialis Konstruksi dan Ekspor-Impor Produk Turunan Sawit (Palm Derivatives) Terpercaya di Indonesia.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/kontak" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/50 hover:scale-105">
              Hubungi Kami <ArrowRight size={20} />
            </Link>
            <Link href="/main-business" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-md">
              Lihat Layanan
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
           <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bidang Usaha Unggulan</h2>
            <p className="text-slate-600 text-lg">Solusi terintegrasi dari konstruksi hingga komoditas global dengan standar mutu internasional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Hammer className="w-10 h-10 text-orange-500" />}
              title="Konstruksi & Engineering"
              desc="Layanan konstruksi profesional dengan standar keamanan tinggi untuk berbagai kebutuhan industri dan infrastruktur."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Leaf className="w-10 h-10 text-green-600" />}
              title="Ekspor Sawit & Turunan"
              desc="Trading CPO, Palm Olein, PKS (Shell), dan PKE dengan spesifikasi yang jelas, dokumen lengkap, dan traceability terjamin."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Globe className="w-10 h-10 text-blue-600" />}
              title="Perdagangan Global"
              desc="Jaringan ekspor-impor yang kuat mencakup gula (ICUMSA 45), beras, dan komoditas lainnya dari berbagai negara."
              delay={0.3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/main-business" className="inline-flex items-center gap-2 text-blue-900 font-bold hover:text-orange-600 transition-colors border-b-2 border-blue-900 hover:border-orange-600 pb-1">
              Pelajari Selengkapnya <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Kenapa Kami?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
                Mitra Strategis dengan Integritas & Kejelasan Dokumen
              </h2>
              
              <div className="space-y-8">
                <FeatureItem 
                  title="Clarity & Traceability" 
                  desc="Setiap transaksi transparan dengan alur dokumen yang tertib. Kami meminimalkan risiko ambiguitas sejak awal negosiasi." 
                />
                <FeatureItem 
                  title="Quality Assurance" 
                  desc="Produk seperti CPO, CP8, dan CP10 kami sesuai spesifikasi buyer (Spec-based trading) dengan kontrol kualitas ketat." 
                />
                <FeatureItem 
                  title="Global Network Access" 
                  desc="Berdomisili di Sumatera Barat namun memiliki jaringan supply domestik dan internasional yang luas." 
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
               <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                  alt="Business Meeting Construction"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized 
               />
               <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-orange-500">
                  <p className="text-slate-500 text-sm mb-1">Fokus Utama</p>
                  <p className="font-bold text-slate-900 text-lg">Kepercayaan & Kemitraan Jangka Panjang.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image 
              src="https://www.transparenttextures.com/patterns/cubes.png"
              alt="pattern"
              fill
              className="object-cover"
              unoptimized
           />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Siap Bekerjasama dengan Kami?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Dapatkan penawaran harga terbaik untuk kebutuhan konstruksi atau komoditas Anda hari ini.</p>
          <Link href="/kontak" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:shadow-lg hover:shadow-orange-600/30">
            Minta Penawaran
          </Link>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-8 border border-slate-200 rounded-2xl hover:shadow-xl hover:border-orange-200 transition-all bg-white group cursor-pointer"
    >
      <div className="mb-6 bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
      <div className="w-10 h-1 bg-slate-200 group-hover:bg-orange-500 transition-all rounded-full"></div>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-3 mt-2 bg-orange-500 rounded-full shrink-0 h-[50px]"></div> 
      <div>
        <h4 className="font-bold text-xl text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}