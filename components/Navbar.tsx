"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tighter">
          SPARTA <span className="text-orange-500">DUTA PERKASA</span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="/" label="Home" scrolled={scrolled} />
          <NavLink href="/tentang-kami" label="Tentang Kami" scrolled={scrolled} />
          <NavLink href="/main-business" label="Main Business" scrolled={scrolled} />
          <NavLink href="/produk" label="Produk" scrolled={scrolled} />
          
          <Link 
            href="/kontak" 
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              scrolled 
                ? "bg-orange-600 text-white hover:bg-orange-700" 
                : "bg-white text-orange-600 hover:bg-orange-50"
            }`}
          >
            Kontak
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? "text-slate-800" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-slate-800" : "text-white"} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-slate-100">
          <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/tentang-kami" label="Tentang Kami" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/main-business" label="Main Business" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/produk" label="Produk" onClick={() => setIsOpen(false)} />
          <Link
            href="/kontak"
            className="bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, scrolled }: { href: string, label: string, scrolled: boolean }) => (
  <Link
    href={href}
    className={`font-medium hover:text-orange-500 transition-colors ${
      scrolled ? "text-slate-700" : "text-white/90 hover:text-white"
    }`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, label, onClick }: { href: string, label: string, onClick: () => void }) => (
  <Link
    href={href}
    className="text-slate-700 font-medium hover:text-orange-500 py-2 border-b border-slate-50"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;