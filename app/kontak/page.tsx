"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const templateText = `Subject: Inquiry - [Product] - [Qty] - [Destination]

Hello PT Sparta Duta Perkasa Team,

1) Product: (CPO / HACPO / Refined POME / PFAD / Oleo Chemical / Palm Olein CP8 / CP10 / Glycerin / PKS / PKE)
2) Quantity:
3) Spec Requirement:
4) Incoterm:
5) Destination (Port, Country):
6) Payment Term:
7) Buyer Profile: (Company name + brief profile + end buyer if applicable)

Thank you.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const waLink = "https://api.whatsapp.com/send/?phone=%2B6282364476265&text=Halo+PT+Sparta+Duta+Perkasa%2C+saya+ingin+inquiry.+Produk%3A+%5B..%5D%2C+Qty%3A+%5B..%5D%2C+Spec%3A+%5B..%5D%2C+Incoterm%3A+%5B..%5D%2C+Destination%3A+%5B..%5D.+Terima+kasih.&type=phone_number&app_absent=0";

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi <span className="text-orange-500">Kami</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Diskusikan kebutuhan ekspor-impor atau konstruksi Anda. Kami memprioritaskan komunikasi yang jelas dan respon cepat.
          </p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Informasi Kantor</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Domisili Operasional</h3>
                    <p className="text-slate-600 leading-relaxed">Sumatera Barat, Indonesia.<br/>Melayani jaringan supply domestik & internasional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Telepon & WhatsApp</h3>
                    <div className="flex flex-col text-slate-600 space-y-1 font-medium">
                      <span>+62 822-2094-4474</span>
                      <span>+62 812-7551-3746</span>
                      <span>+62 823-6447-6265</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email Inquiry</h3>
                    <a href="mailto:ptspartadutaperkasa@gmail.com" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                      ptspartadutaperkasa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link 
                  href={waLink}
                  target="_blank"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 transition-transform hover:-translate-y-1"
               >
                  <MessageCircle size={20} /> Chat WhatsApp Sekarang
               </Link>
               <a 
                  href="mailto:ptspartadutaperkasa@gmail.com"
                  className="flex-1 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
               >
                  <Mail size={20} /> Kirim Email Manual
               </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-32 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Template Inquiry Cepat</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Salin format ini untuk mempercepat proses penawaran harga (Quotation) dari tim kami.
              </p>

              <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 font-mono text-sm leading-relaxed text-slate-300 shadow-inner overflow-x-auto">
                <pre className="whitespace-pre-wrap">{templateText}</pre>
              </div>

              <button 
                onClick={handleCopy}
                className={`mt-6 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isCopied 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105" 
                    : "bg-white text-slate-900 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check size={20} /> Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy size={20} /> Salin Format Teks
                  </>
                )}
              </button>
              
              <p className="mt-4 text-center text-xs text-slate-500">
                Setelah disalin, paste ke WhatsApp atau Email Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Butuh Bantuan Lain?</h3>
            <p className="text-slate-500 mb-8">Tim support kami siap membantu pertanyaan teknis maupun umum.</p>
            <div className="flex justify-center gap-6 text-sm text-slate-400">
               <span className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Fast Response</span>
               <span className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Document Support</span>
               <span className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Global Shipping Info</span>
            </div>
         </div>
      </section>
    </main>
  );
}