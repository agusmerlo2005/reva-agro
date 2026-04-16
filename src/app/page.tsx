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
  FaInstagram,
  FaEnvelope 
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
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['Todos', 'Tanques', 'Grúas', 'Playos'];

  const products = [
    // --- TANQUES ---
    {
      id: 'vare-1400',
      category: 'Tanques',
      name: 'Acoplado Tanque Vare 1400',
      specs: '1400 Litros | Ágil y eficiente',
      image: '/images/1400 - VARE.png',
      wppMsg: 'Hola! Consulto por el Acoplado Tanque Vare 1400lts.',
      fullSpecs: ["Capacidad: 1400 litros", "Transporte de: agua, leche, fertilizantes", "Llantas 4\" x 16\" x 3/16\"", "Color de chasis: a elección", "Color de tanque: Negro - Gris Claro", "Sin cubiertas", "Opcionales: Kit de luces / Lavamanos"]
    },
    {
      id: 'titan-3500',
      category: 'Tanques',
      name: 'Acoplado Tanque Titán 3500',
      specs: '3500 Litros | El estándar del campo',
      image: '/images/3500 - TITAN 2.png',
      wppMsg: 'Hola! Consulto por el Acoplado Tanque Titán 3500lts.',
      fullSpecs: ["Capacidad: 3500 litros", "Transporte de: agua, fertilizantes, fungicida", "Llantas 4\" x 17\" x 1/4\"", "Ejes de 2\" con elásticos para 4tn", "Bidonera trasera y delantera", "Color de chasis: a elección", "Color de tanque: Amarillo - Gris Claro", "Incluye lavamanos de 12lts", "Sin cubiertas", "Opcionales: Kits de luces / Llantas duales"]
    },
    {
      id: 'titan-4550',
      category: 'Tanques',
      name: 'Acoplado Tanque Titán 4550',
      specs: '4550 Litros | Alta capacidad',
      image: '/images/3500 - TITAN 2.png',
      wppMsg: 'Hola! Consulto por el Acoplado Tanque Titán 4550lts.',
      fullSpecs: ["Capacidad: 4550 litros", "Chapa de acero al carbono de 1/8", "Sistema de rompeolas interno", "Boca de carga de 400mm con venteo", "Eje macizo de 2 1/2 pulgadas", "Sin cubiertas"]
    },
    {
      id: 'titan-6000',
      category: 'Tanques',
      name: 'Acoplado Tanque Titán 6000',
      specs: '6000 Litros | Máximo rendimiento',
      image: '/images/3500 - TITAN 2.png',
      wppMsg: 'Hola! Consulto por el Acoplado Tanque Titán 6000lts.',
      fullSpecs: ["Capacidad: 6000 litros", "Eje dual para máxima estabilidad", "Tanque con protección UV de alta densidad", "Ideal para grandes extensiones y logística pesada", "Opcional: Kit de luces reglamentario"]
    },
    // --- GRÚAS ---
    {
      id: 'condor-1',
      category: 'Grúas',
      name: 'Grúa El Cóndor (1 Mov.)',
      specs: 'Capacidad 2tn | Simple y robusta',
      image: '/images/GRUA2M-EL CONDOR.png',
      wppMsg: 'Hola! Consulto por la Grúa El Cóndor de 1 movimiento.',
      fullSpecs: ["1 Movimiento hidráulico", "Capacidad de carga: 2.000 kg", "Altura máxima de elevación: 5.50 metros", "Válvula de seguridad contra sobrecargas", "Pintura poliuretánica de alta resistencia"]
    },
    {
      id: 'condor-2',
      category: 'Grúas',
      name: 'Grúa El Cóndor (2 Mov.)',
      specs: 'Capacidad 2tn | Versatilidad total',
      image: '/images/GRUA2M-EL CONDOR.png',
      wppMsg: 'Hola! Consulto por la Grúa El Cóndor de 2 movimientos.',
      fullSpecs: ["2 Movimientos hidráulicos: Elevación y Extensión", "Capacidad de carga: 2.000 kg", "Giro de 360 grados sobre rodillos", "Ideal para movimiento de bolsones de fertilizante", "Estructura reforzada para uso continuo"]
    },
    {
      id: 'condor-3',
      category: 'Grúas',
      name: 'Grúa El Cóndor (3 Mov.)',
      specs: 'Capacidad 2tn | Máximo alcance',
      image: '/images/GRUA2M-EL CONDOR.png',
      wppMsg: 'Hola! Consulto por la Grúa El Cóndor de 3 movimientos.',
      fullSpecs: ["3 Movimientos hidráulicos: Giro, Elevación y Extensión", "Capacidad de carga: 2.000 kg", "Control de precisión para tareas industriales", "Máximo alcance operativo de la línea", "Giro de 360 grados"]
    },
    // --- PLAYOS ---
    {
      id: 'playo-4tn',
      category: 'Playos',
      name: 'Carro Playo 4TN',
      specs: '4000mm x 1800mm | Puertas Rebatibles',
      image: '/images/4TN - PLAYO.png',
      wppMsg: 'Hola! Consulto por el Carro Playo de 4tn.',
      fullSpecs: ["Dimensiones: largo 4000mm x ancho 1800mm", "Ejes de 2\" con elásticos para 4tn", "Puertas laterales rebatibles", "Llantas simples 16\" x 650", "Capacidad real: 4 toneladas", "Sin cubiertas"]
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
            <a href="#nosotros" className="hover:text-red-500 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-red-500 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center bg-zinc-950 overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/3500-titan-atardecer.jpg" 
            alt="Fondo ReVa Agro" 
            fill 
            className="object-cover opacity-20 blur-sm scale-105" 
            priority
          />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10">
          <h2 className="text-red-600 font-black tracking-[0.4em] uppercase mb-10 text-xs md:text-base">Fabricación en Armstrong</h2>
          
          <div className="relative h-32 w-80 md:h-40 md:w-[26rem] mx-auto mb-10">
            <Image 
              src="/images/reva-agro-logo-nuevo-blanco.png" 
              alt="Logo ReVa Agro" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          <p className="mt-8 text-zinc-300 max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed uppercase tracking-widest">
            Maquinaria diseñada para resistir el trabajo más exigente del campo argentino.
          </p>
        </motion.div>
      </header>

      {/* Grid de Productos */}
      <section id="productos" className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-l-4 border-red-600 pl-6 gap-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Equipamiento Pesado</span>
            <h2 className="text-5xl font-black uppercase text-zinc-900 tracking-tighter mt-1">Línea de Producción</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                  : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {products
              .filter(p => filter === 'Todos' || p.category === filter)
              .map((p) => (
                <motion.div 
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-64 w-full bg-zinc-50 p-8 cursor-pointer overflow-hidden" onClick={() => setSelectedProduct(p)}>
                    <Image src={p.image} alt={p.name} fill className="object-contain group-hover:scale-110 transition-transform duration-700" unoptimized />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-black uppercase text-zinc-900 leading-none">{p.name}</h3>
                    <p className="text-[10px] font-bold text-zinc-400 mt-3 uppercase tracking-widest">{p.specs}</p>
                    <div className="mt-auto pt-6">
                      <button onClick={() => setSelectedProduct(p)} className="text-xs font-black uppercase text-red-600 border-b-2 border-red-600 pb-1 hover:text-zinc-900 hover:border-zinc-900 transition-colors">
                        Ver detalles
                      </button>
                      <a 
                        href={`https://wa.me/543471592559?text=${encodeURIComponent(p.wppMsg)}`}
                        target="_blank"
                        className="mt-6 flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-4 rounded-xl font-black uppercase text-[10px] hover:bg-red-600 transition-all"
                      >
                        <FaWhatsapp size={16} /> Consultar
                      </a>
                    </div>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="bg-zinc-900 py-32 border-y border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-20 w-48 md:h-24 md:w-56 mx-auto mb-8"
          >
            <Image 
              src="/images/reva-agro-logo-nuevo-blanco.png" 
              alt="ReVa Agro Logo" 
              fill 
              className="object-contain"
            />
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter italic mb-20">
            Confianza y <span className="text-red-600">Servicio</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-16 mb-24">
            <div className="flex flex-col items-center gap-4 text-center">
              <FaTools size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase text-sm">Post-Venta</h4>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <FaShieldAlt size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase text-sm">Garantía Real</h4>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <FaTruck size={40} className="text-red-600" />
              <h4 className="text-white font-black uppercase text-sm">Logística Propia</h4>
            </div>
          </div>
          <Link href="/nosotros" className="inline-flex items-center gap-6 bg-zinc-800 hover:bg-white text-white hover:text-zinc-900 px-12 py-7 rounded-full border border-zinc-700 transition-all duration-500">
            <span className="font-black uppercase tracking-[0.2em] text-xs">Conocé nuestra historia</span>
            <FaChevronRight size={10} className="text-red-600" />
          </Link>
        </div>
      </section>

      {/* MODAL FICHA TÉCNICA - CORREGIDO PARA MÓVILES */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-4 bg-zinc-900/90 backdrop-blur-md" 
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9 }} 
              className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden max-w-4xl w-full max-h-[95vh] flex flex-col md:flex-row relative shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar Flotante */}
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full text-zinc-900 hover:text-red-600 transition-colors shadow-sm"
              >
                <FaTimes size={20} />
              </button>

              {/* Imagen: Arriba en móvil, Izquierda en PC */}
              <div className="h-48 md:h-auto md:w-1/2 bg-zinc-50 p-6 md:p-12 flex items-center justify-center relative">
                <div className="relative h-full w-full">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    fill 
                    className="object-contain" 
                    unoptimized 
                  />
                </div>
              </div>

              {/* Contenido: Abajo en móvil con SCROLL, Derecha en PC */}
              <div className="flex-grow md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto">
                <h3 className="text-2xl md:text-4xl font-black uppercase text-zinc-900 mb-4 md:mb-6 italic leading-tight">
                  {selectedProduct.name}
                </h3>
                
                <div className="space-y-2 md:space-y-3 mb-8 md:mb-10">
                  {selectedProduct.fullSpecs.map((spec: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-zinc-600 border-b border-zinc-100 pb-2">
                      <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" size={12} />
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-tight leading-snug">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/543471592559?text=${encodeURIComponent(selectedProduct.wppMsg)}`} 
                    target="_blank" 
                    className="bg-red-600 text-white text-center py-4 md:py-6 rounded-2xl font-black uppercase text-xs md:text-sm shadow-xl hover:bg-zinc-900 transition-all flex items-center justify-center gap-4 active:scale-95"
                  >
                    <FaWhatsapp size={20} /> Consultar Ahora
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contacto" className="bg-zinc-900 text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-24">
          <div>
            <div className="relative h-16 w-56 mb-10">
              <Image 
                src="/images/reva-agro-logo-nuevo-blanco.png" 
                alt="ReVa Agro Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <div className="space-y-8 text-zinc-400">
              <div className="flex items-center gap-6">
                <div className="bg-red-600/10 p-4 rounded-2xl text-red-600"><FaMapMarkerAlt size={24} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-1">Ubicación</p>
                  <p className="text-white text-lg font-bold italic">Armstrong, Santa Fe, Argentina</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-red-600/10 p-4 rounded-2xl text-red-600"><FaWhatsapp size={24} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white text-lg font-bold italic">+54 9 3471 592559</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-red-600/10 p-4 rounded-2xl text-red-600"><FaEnvelope size={24} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-white text-lg font-bold italic">revaagroimplementos@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* MAPA CON W-FULL ASEGURADO */}
          <div className="w-full h-[400px] rounded-[3rem] overflow-hidden grayscale invert-[0.9] border border-zinc-800 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13410.87184281313!2d-61.603314!3d-32.7745964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b77826315582f3%3A0xc34346294709d185!2sArmstrong%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1713137000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* TEXTOS INFERIORES CENTRADOS EN MÓVIL Y TRACKING AJUSTADO */}
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-zinc-600 text-[10px] tracking-widest md:tracking-[0.5em] uppercase font-bold">
            © 2026 REVA AGRO | Armstrong, Santa Fe
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 text-[10px] tracking-widest uppercase font-bold">Desarrollado por</span>
              <span className="text-zinc-400 text-[11px] font-black uppercase italic">Agustín Merlo</span>
            </div>
            <a 
              href="https://www.instagram.com/digitall_forge" 
              target="_blank" 
              className="flex items-center gap-2 text-zinc-500 hover:text-red-600 transition-all"
            >
              <FaInstagram size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">DigitalForge</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}