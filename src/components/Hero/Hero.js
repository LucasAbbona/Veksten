import First from './First.gif'
import Second from './Second.png'
import Third from './Third.gif'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
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
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper lg:h-600 h-auto"
      >
        <SwiperSlide>
        <img src={First} width={'100%'} alt=""/>
        <div className='absolute top-0 flex flex-col justify-center items-center w-full h-full '>
        <p className='font-bold text-lg md:text-3xl text-white mb-4'>Evolutionate in the technological business world</p>
        <p className='font-ligth text-lg md:text-2xl text-white'>Helping busnisses with technological solutions </p>
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to={'/services'}><button className='px-7 py-1 mt-8 sm:mt-16 rounded-3xl bg-white text-base md:text-xl font-bold hover:bg-gray-300 transition-colors'>Services</button></Link>
        </motion.div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Second} width={'100%'} alt=""/>
          <div className='absolute top-0 flex flex-row justify-between items-end w-full h-full pb-12 sm:pb-20 px-10 sm:px-20'>
          <p className='font-medium text-lg md:text-3xl w-64 text-white mb-4'>Take a look at our latest projects</p>
          <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={'/success'}><button className='px-7 py-1 mt-16 rounded-3xl bg-white text-base md:text-xl font-bold hover:bg-gray-300 transition-colors'>Projects</button></Link>
          </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Third} width={'100%'} alt=""/>
        <div className='absolute top-0 flex flex-col items-start justify-center w-full h-full'>
        <div className='ml-12 sm:ml-16'>
        <p className='font-medium text-lg md:text-3xl text-white mb-9 sm:mb-14 w-1/3'>The best price and the best service you will find in the market.</p>
          <motion.div
          className="box w-1/5"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to={'/'}>
            <button className='px-6 py-1  mb-2 rounded-3xl bg-white text-base md:text-xl font-bold hover:bg-gray-300 transition-colors'>Contact</button>         
            </Link>
          </motion.div>  
        <p className='font-regular text-xs md:text-sm text-white'>Contact us to receive your personalized quote.</p>
        </div>
        </div>
        </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
)}

export default Hero