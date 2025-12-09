import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.4, 
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, 
  visible: { y: 0, opacity: 1 }  
};

export default function GridServicios() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-3 sm:gap-6 mt-10 z-20 w-full max-w-4xl px-4" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tarjeta 1 */}
      <motion.div variants={itemVariants} className="h-28 sm:h-32 w-full bg-gray-600/50 rounded-md border border-gray-100/30 flex flex-col justify-center items-center backdrop-blur-md hover:bg-gray-600/70 transition-colors">
        <span className="material-symbols-outlined text-white text-3xl sm:text-4xl! mb-2">emoji_objects</span>
        <h1 className="text-white text-[10px] sm:text-xs font-bold text-center px-1">SOLUCIONES TI</h1>
      </motion.div>

      {/* Tarjeta 2 */}
      <motion.div variants={itemVariants} className="h-28 sm:h-32 w-full bg-gray-600/50 rounded-md border border-gray-100/30 flex flex-col justify-center items-center backdrop-blur-md hover:bg-gray-600/70 transition-colors">
        <span className="material-symbols-outlined text-white text-3xl sm:text-4xl! mb-2">code</span>
        <h1 className="text-white text-[10px] sm:text-xs font-bold text-center px-1">DESARROLLO WEB</h1>
      </motion.div>

      {/* Tarjeta 3 */}
      <motion.div variants={itemVariants} className="h-28 sm:h-32 w-full bg-gray-600/50 rounded-md border border-gray-100/30 flex flex-col justify-center items-center backdrop-blur-md hover:bg-gray-600/70 transition-colors">
         <span className="material-symbols-outlined text-white text-3xl sm:text-4xl! mb-2">deployed_code</span>
         <h1 className="text-white text-[10px] sm:text-xs font-bold text-center px-1">SOFTWARE</h1>
      </motion.div>

      {/* Tarjeta 4 */}
      <motion.div variants={itemVariants} className="h-28 sm:h-32 w-full bg-gray-600/50 rounded-md border border-gray-100/30 flex flex-col justify-center items-center backdrop-blur-md hover:bg-gray-600/70 transition-colors">
         <span className="material-symbols-outlined text-white text-3xl sm:text-4xl! mb-2">build</span>
         <h1 className="text-white text-[10px] sm:text-xs font-bold text-center px-1">HARDWARE</h1>
      </motion.div>

    </motion.div>
  );
}