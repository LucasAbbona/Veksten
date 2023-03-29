import ServicesAcordion from '../../components/ServicesAcordion/ServicesAcordion'
import ServicesFeatures from '../../components/ServicesFeatures/ServicesFeatures'
import ServicesRecomendations from '../../components/ServicesRecomendations/ServicesRecomendations'
import Presentation from './presentacion.mp4'
import { motion } from "framer-motion";
const Services = () => {
  return (
    <>
    <div className='w-full  lg:h-600 overflow-hidden flex items-end bg-Secundario'>
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
                <video className='w-full' src={Presentation} controls autoPlay />
      </motion.div>
    </div>
    <ServicesFeatures />
    <ServicesAcordion />
    <ServicesRecomendations />
    </>
  )
}

export default Services