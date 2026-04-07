'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaTimes, 
  FaCheckCircle, 
  FaTools, 
  FaShieldAlt, 
  FaTruck, 
  FaChevronRight,
  FaInstagram 
} from 'react-icons/fa';

// --- 1. COMPONENTE LOADER ---
function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-zinc-900 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="relative h-20 w-60"
      >
        <Image src="/images/reva-agro-logo-nuevo-blanco.png" alt="ReVa Agro" fill className="object-contain" priority />
      </motion.div>
      <motion.div className="mt-8 h-1 w-48 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-full w-full bg-red-600"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 'grua',
      name: 'Grúa "El Cóndor"',
      specs: 'Capacidad 2tn | Hidráulica reforzada',
      image: '/images/GRUA2M-EL CONDOR.png',
      wppMsg: 'Hola Santiago! Quisiera consultar por el precio y financiación de la Grúa El Cóndor de 2tn. ¿Tienen stock disponible?',
      fullSpecs: [
        "Capacidad de carga: 2.000 kg",
        "Altura máxima de elevación: 5.50 metros",
        "Giro de 360 grados sobre rodillos",
        "Válvula de seguridad contra sobrecargas",
        "Pintura poliuretánica de alta resistencia"
      ]
    },
    {
      id: 'titan',
      name: 'Tanque Titán 3500',
      specs: '3500 Litros | Chapa reforzada',
      image: '/images/3500 - TITAN 2.png',
      wppMsg: 'Hola Santiago! Quisiera consultar por el precio y financiación del Tanque Titán 3500 litros. ¿Tienen stock disponible?',
      fullSpecs: [
        "Capacidad: 3.500 litros",
        "Chapa de acero al carbono de 1/8",
        "Sistema de rompeolas interno",
        "Boca de carga de 400mm con venteo",
        "Eje macizo de 2 1/2 pulgadas"
      ]
    },
    {
      id: 'vare',
      name: 'Tanque VARE 1400',
      specs: '1400 Litros | Ágil y eficiente',
      image: '/images/1400 - VARE.png',
      wppMsg: 'Hola Santiago! Quisiera consultar por el precio y financiación del Tanque VARE 1400. ¿Tienen stock disponible?',
      fullSpecs: [
        "Capacidad: 1.400 litros",
        "Diseño elíptico para mayor estabilidad",
        "Ideal para fertilizante o agua",
        "Chasis reforzado con enganche regulable",
        "Fácil maniobrabilidad en espacios reducidos"
      ]
    }
  ];

  return (
    <main className="min-h-screen font-sans overflow-x-hidden bg-zinc-50">
      
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm p-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="relative h-10 w-40">
            <Image src="/images/reva-agro-logo-nuevo-blanco.png" alt="ReVa Agro Logo" fill className="object-contain" priority />
          </div>
          <div className="hidden md:flex gap-8 text-zinc-400 text-sm font-bold uppercase tracking-widest">
            <a href="#productos" className="hover:text-red-500 transition-colors">Productos</a>
            <a href="#nosotros" className="hover:text-red-500 transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-red-500 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center bg-zinc-900 overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10">
          <h2 className="text-red-600 font-black tracking-[0.4em] uppercase mb-4">Fabricación en Armstrong</h2>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">
            REVA <span className="text-red-600">AGRO</span>
          </h1>
          <p className="mt-8 text-zinc-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            Maquinaria diseñada para resistir el trabajo más exigente del campo argentino.
          </p>
        </motion.div>
      </header>

      {/* Grid de Productos */}
      <section id="productos" className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="flex items-end mb-16 border-l-4 border-red-600 pl-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Equipamiento Pesado</span>
            <h2 className="text-5xl font-black uppercase text-zinc-900 tracking-tighter mt-1">Línea de Producción</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, index) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 w-full bg-zinc-50 p-8 cursor-pointer overflow-hidden" onClick={() => setSelectedProduct(p)}>
                <Image src={p.image} alt={p.name} fill className="object-contain group-hover:scale-110 transition-transform duration-700" unoptimized />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black uppercase text-zinc-900 leading-none">{p.name}</h3>
                <p className="text-xs font-bold text-zinc-400 mt-3 uppercase tracking-widest">{p.specs}</p>
                <button onClick={() => setSelectedProduct(p)} className="mt-6 text-xs font-black uppercase text-red-600 border-b-2 border-red-600 pb-1 hover:text-zinc-900 hover:border-zinc-900 transition-colors">
                  Ver detalles
                </button>
                <a 
                  href={`https://wa.me/543471592559?text=${encodeURIComponent(p.wppMsg)}`}
                  target="_blank"
                  className="mt-8 flex items-center justify-center gap-3 w-full bg-zinc-900 text-white py-5 rounded-2xl font-black uppercase text-xs hover:bg-red-600 transition-all shadow-xl shadow-zinc-200"
                >
                  <FaWhatsapp size={18} /> Consultar por WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="nosotros" className="bg-zinc-900 py-32 border-y border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-red-600 font-black tracking-[0.4em] uppercase mb-4">El Respaldo ReVa</h4>
            <h3 className="text-5xl font-black uppercase text-white tracking-tighter italic">Confianza y <span className="text-red-600">Servicio</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-16 mb-24 text-center">
            <div className="flex flex-col items-center gap-4">
              <FaTools size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase">Post-Venta</h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FaShieldAlt size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase">Garantía Real</h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FaTruck size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase">Logística Propia</h4>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/nosotros" className="group flex items-center gap-6 bg-zinc-800 hover:bg-white text-white hover:text-zinc-900 px-12 py-7 rounded-full border border-zinc-700 transition-all duration-500">
              <span className="font-black uppercase tracking-[0.2em] text-xs">Conocé nuestra historia</span>
              <FaChevronRight size={10} className="text-red-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL FICHA TÉCNICA */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-zinc-900/90 backdrop-blur-md" 
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }} 
              className="bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 z-10 text-zinc-400 hover:text-red-600 transition-colors">
                <FaTimes size={24} />
              </button>
              <div className="md:w-1/2 bg-zinc-50 p-12 flex items-center justify-center">
                <div className="relative h-72 w-full"><Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain" unoptimized /></div>
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-black uppercase text-zinc-900 mb-6 italic">{selectedProduct.name}</h3>
                <div className="space-y-4 mb-10">
                  {selectedProduct.fullSpecs.map((spec: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-zinc-600 border-b border-zinc-100 pb-3">
                      <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-tight">{spec}</span>
                    </div>
                  ))}
                </div>
                <a href={`https://wa.me/543471592559?text=${encodeURIComponent(selectedProduct.wppMsg)}`} target="_blank" className="bg-red-600 text-white text-center py-6 rounded-2xl font-black uppercase shadow-xl hover:bg-zinc-900 transition-all flex items-center justify-center gap-4">
                  <FaWhatsapp size={22} /> Consultar Ahora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer y Mapa */}
      <footer id="contacto" className="bg-zinc-900 text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <h4 className="text-6xl font-black uppercase mb-10 italic tracking-tighter">REVA <span className="text-red-600">AGRO</span></h4>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-red-600/10 p-4 rounded-2xl text-red-600"><FaMapMarkerAlt size={24} /></div>
                <div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-white text-lg font-bold italic">Armstrong, Santa Fe, Argentina</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-red-600/10 p-4 rounded-2xl text-red-600"><FaWhatsapp size={24} /></div>
                <div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Contacto Directo</p>
                  <p className="text-white text-lg font-bold italic">+54 9 3471 592559</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-[3rem] overflow-hidden grayscale invert-[0.9] border border-zinc-800 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13410.647702677145!2d-61.6111162!3d-32.7486111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b77054f9a0c309%3A0xc6c34f2d11440d99!2sArmstrong%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1712520000000!5m2!1ses-419!2sar" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>
        </div>
        
        {/* CRÉDITOS, TU FIRMA Y DIGITALFORGE */}
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase font-bold text-center md:text-left">
            © 2026 REVA AGRO | Armstrong, Santa Fe
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 group">
              <span className="text-zinc-600 text-[10px] tracking-widest uppercase font-bold">Desarrollado por</span>
              <span className="text-zinc-400 text-[11px] font-black uppercase tracking-tighter italic">
                Agustín Merlo
              </span>
            </div>
            <a 
              href="https://www.instagram.com/digitall_forge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              className="flex items-center gap-2 text-zinc-500 hover:text-red-600 transition-all group"
            >
              <FaInstagram size={14} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">DigitalForge</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}