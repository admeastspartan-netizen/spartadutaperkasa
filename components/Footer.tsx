import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              SPARTA <span className="text-orange-500">DUTA PERKASA</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mitra terpercaya dalam konstruksi dan perdagangan ekspor-impor komoditas sawit global. Mengutamakan transparansi dan kualitas.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Youtube size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Perusahaan</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><FooterLink href="/tentang-kami">Tentang Kami</FooterLink></li>
              <li><FooterLink href="/main-business">Main Business</FooterLink></li>
              <li><FooterLink href="/produk">Katalog Produk</FooterLink></li>
              <li><FooterLink href="/kontak">Hubungi Kami</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Unit Usaha</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Sparta Agro
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Sparta Biomassa
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Construction Engineer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1 shrink-0"/> 
                <span>Sumatera Barat, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0"/> 
                <span className="break-all">ptspartadutaperkasa@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 mt-1 shrink-0"/> 
                <div className="flex flex-col">
                  <span>+62 822-2094-4474</span>
                  <span>+62 812-7551-3746</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 PT Sparta Duta Perkasa. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Export–Import • Palm Derivatives • Traceable Supply</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a href={href} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all">
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-orange-500" />
    {children}
  </Link>
);

export default Footer;