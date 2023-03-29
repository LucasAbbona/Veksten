import AboutText from '../../components/AboutText/AboutText'
import Presentation from './company-values-and-business-principles.mp4'
import { motion } from "framer-motion";

const About = () => {
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
                <video className='px-10 md:px-20 w-full pt-10 pb-14 md:pb-24' autoPlay controls src={Presentation} alt='' />
      </motion.div>
        <AboutText />
    </div>
  )
}

export default About