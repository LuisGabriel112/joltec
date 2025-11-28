import { motion } from "framer-motion";

export default function BotonAnimado() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}  
      
      transition={{ 
        delay: 1.1, 
        duration: 0.5 
      }}

      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}   
      
      className="z-20 mt-6 sm:mt-10 text-lg sm:text-xl font-normal text-white text-center bg-gradient-to-r from-red-500 to-orange-500 px-6 sm:px-7 py-2 rounded-full glow-fuego cursor-pointer hover:shadow-orange-500/50"
    >
      Hablemos
    </motion.button>
  );
}