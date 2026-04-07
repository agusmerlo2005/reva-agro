'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaHistory, FaIndustry, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function NosotrosPage() {
  
  // Arreglo para el scroll automático al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      {/* Navbar Minimalista */}
      <nav className="p-5 border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 text-zinc-600 hover:text-red-600 transition-colors font-black uppercase text-xs tracking-widest">
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
          <div className="text-zinc-900 font-black italic tracking-tighter text-xl">
            REVA <span className="text-red-600">AGRO</span>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-zinc-900">
            Nuestra <span className="text-red-600">Historia</span>
          </h1>
          <div className="w-20 h-2 bg-red-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-24">
          <div className="text-center space-y-8">
            <div className="bg-white w-20 h-20 rounded-3xl shadow-xl flex items-center justify-center mx-auto text-red-600 border border-zinc-100">
              <FaHistory size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase italic text-zinc-900">El Origen</h2>
            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
              ReVa Agro nació de la visión de <strong>Hugo Varela</strong> y <strong>Santiago Recrocio</strong> en Armstrong, Santa Fe. 
              Lo que comenzó como un taller de soluciones a medida se convirtió en una fábrica referente de implementos agrícolas, 
              manteniendo siempre la robustez y la confianza como estandartes.
            </p>
          </div>
          
          <div className="bg-zinc-900 text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <FaIndustry size={120} />
             </div>
            <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">Nuestro Compromiso</h4>
            <p className="text-2xl md:text-3xl italic font-bold leading-tight relative z-10">
              "Fabricamos herramientas para que el productor argentino solo tenga que preocuparse por crecer."
            </p>
          </div>
        </div>
      </section>

      {/* Footer con Firma Agustín + DigitalForge */}
      <footer className="py-16 border-t border-zinc-200 bg-white flex flex-col items-center gap-6">
        <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em]">
          ReVa Agro | Armstrong, Santa Fe
        </div>
        
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-[10px] tracking-widest uppercase font-bold">Desarrollado por</span>
              <span className="text-zinc-600 text-[11px] font-black uppercase italic tracking-tighter">
                Agustín Merlo
              </span>
            </div>
            <a 
              href="https://www.instagram.com/digitall_forge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              className="flex items-center gap-2 text-zinc-400 hover:text-red-600 transition-all group"
            >
              <FaInstagram size={14} className="group-hover:rotate-12" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">DigitalForge</span>
            </a>
          </div>
      </footer>
    </main>
  );
}