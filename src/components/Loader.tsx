'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loader() {
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
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative h-20 w-60"
      >
        <Image 
          src="/images/reva-agro-logo-nuevo-blanco.png" 
          alt="Cargando ReVa Agro" 
          fill 
          className="object-contain"
        />
      </motion.div>
      <motion.div 
        className="mt-8 h-1 w-48 bg-zinc-800 rounded-full overflow-hidden"
      >
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