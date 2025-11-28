import { motion } from "framer-motion";

export default function TituloAnimado() {
  const textoTitulo = "JOLTEC";
  const letras = textoTitulo.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
        delayChildren: 0,
      },
    },
  };

  const letraVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,  
      rotate: -10 
    }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      transition: {
        type: "spring",
        damping: 15,   
        stiffness: 600, 
      }
    },
  };

  return (
    <div className="flex flex-col items-center z-20 px-4 w-full">
      
      <motion.h1
        className="flex flex-wrap justify-center overflow-hidden font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-center glow-fuego 
        text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-tight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letras.map((letra, index) => (
          <motion.span key={index} variants={letraVariants}>
            {letra}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{ delay: 1, duration: 1.5 }} 
        className="text-base sm:text-xl font-normal text-white text-center glow-blanco mt-2 sm:mt-4 max-w-lg px-2"
      >
        Software inteligente para un futuro brillante
      </motion.p>
    </div>
  );
}