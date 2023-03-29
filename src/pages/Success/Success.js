import { Link } from 'react-router-dom'
import SuccessProjects from '../../components/SuccessProjects/SuccessProjects'
import HeroBack from './bannerProyects.png'
import ContactAdvs from './reunion-oficina-planificacion.jpg'
import { motion } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Success = () => {
  return (
    <div className="bg-Secundario">
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
        <div className='w-full relative md:h-600 flex items-center overflow-hidden'>
            <img className='w-full' src={HeroBack} alt='' />
            <div className='bg-Secundario bg-opacity-40 w-full h-full absolute top-0 flex items-end justify-between px-10 md:px-24 pb-5 md:pb-20'>
                <p className='text-white font-extrabold text-xl md:text-3xl w-1/2 pb-20'>Our services helping the world to evolve and innovate</p>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to={'https://odalisaltaconstura.000webhostapp.com/'} target='_blank' rel='noopener noreferrer'><button className='px-6 py-2 rounded-3xl bg-white text-Secundario opacity-100 text-lg md:text-xl font-medium hover:bg-gray-300 transition-colors'>Odalis's Case</button></Link>
                </motion.div>
            </div>
        </div>
      </motion.div>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
        <SuccessProjects />  
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
        <div>
              <div className='relative w-full pt-5 md:pt-0 md:h-600 flex overflow-hidden items-center'>
              <img src={ContactAdvs} className='w-full' alt=''/>
              <div className='bg-Secundario bg-opacity-40 w-full h-full absolute top-0 flex items-center px-10 sm:px-24 '>
              <p className='text-white font-semibold text-xl sm:text-3xl w-1/2 '>Contact us and evolve your business to the next level</p>
              </div>
              </div>    
          </div>
      </AnimationOnScroll>
    </div>

  )
}

export default Success