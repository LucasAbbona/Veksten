import Landing from './Landing.png'
import Website from './Odalis.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const HomeFeatures = () => {
  return (
    <>
    <h2 className="text-xl sm:text-2xl mt-20 mb-24 text-white w-full px-12 md:px-20">Services</h2>
    <div className="flex flex-col md:flex-row gap-5 flex-wrap w-full px-12 md:px-20 items-center md:items-start md:justify-center">
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8" >
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
            <div className='h-52 flex justify-center items-center'>
            <img height={'100%'} src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/best_project_management_software_-_article_image.jpg" alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">Managment Systems</p>
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8">
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
        <div className='h-52 flex justify-center items-center'>
            <img src={Landing} className='h-full' alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">Landing Pages</p>
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8">
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
        <div className='h-52 flex justify-center items-center'>
            <img className='h-full' src={Website} alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">Websites</p>
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8">
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
        <div className='h-52 flex justify-center items-start overflow-hidden'>
            <img className='w-full' src='https://img.freepik.com/vector-gratis/plantilla-banner-venta-muebles-planos-organicos_23-2148948148.jpg?w=2000' alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">Banners</p>
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8">
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
        <div className='h-52 flex justify-center items-center overflow-hidden'>
            <img className='w-full' src='https://img.freepik.com/vector-gratis/conjunto-logotipos_53876-120502.jpg' alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">Logos</p>
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-32% mb-8">
        <motion.div
      className="box"
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}>
        <div className='h-52 flex justify-center items-center'>
            <img className='h-full' src='https://legal.thomsonreuters.com/blog/wp-content/uploads/sites/19/2019/12/Client-Value-Hero-800x450.jpg' alt=""/>
            </div>
      </motion.div>
            <p className="text-white w-full text-xl text-center mt-3">And anything you need</p>
        </div>
    </div>
    <h2 className='text-xl sm:text-2xl mt-10 text-white w-full px-12 md:px-20'>Tools</h2>
    <div className='w-full px-20 pt-6 h-32'>
    <Swiper
      spaceBetween={5}
      slidesPerView={7}
      className=''
      >
      <SwiperSlide>
        <img className='w-2/3 pt-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png' alt='' />
        </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2 h-1/2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/640px-Adobe_Photoshop_Express_logo.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2 pt-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-2/3 pt-2' src='https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-2/3 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-3/5' src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
      <img className='w-1/2 pt-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' alt='' />
      </SwiperSlide>
    </Swiper>
    </div>
    <h2 className='text-xl sm:text-2xl mt-10 text-white md:w-1/2 mb-10 px-12 md:px-20'>Work with us and take your business to the next level</h2>
    <div className='flex flex-col pb-10 gap-20'>
      <AnimationOnScroll animateIn="animate__zoomIn">
      <div className='w-full px-12 md:px-20 flex flex-col md:flex-row justify-around items-center gap-12 md:gap-20'>
            <div className='flex flex-col gap-4 md:pl-10 md:w-1/2'>
            <p className='font-semibold text-white text-lg md:text-xl'>Reinvent and optimize your business</p>
            <p className='font-light text-white text-base lg:text-lg md:w-3/4'>Incorporate digital tools to your business and make it evolve into the new era of technology.</p>
            </div>
            <div className='md:w-1/2 overflow-hidden h-60 md:pr-10 flex justify-center items-center'><img src='https://enzyme.biz/hubfs/iStock-1016779444.jpg' alt='' /></div>
        </div>
      </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className='w-full px-12 md:px-20 flex flex-col md:flex-row justify-around items-center gap-12 md:gap-20'>
            <div className='flex flex-col gap-4 md:pr-10 md:w-1/2 md:order-2'>
            <p className='font-semibold text-white text-lg md:text-xl md:w-4/5'>The world is going digital and you can't be left behind.</p>
            <p className='font-light text-white text-base lg:text-lg md:w-4/5'>Create your service website and show the technological world what you have to offer them</p>
            </div>
            <div className='md:w-1/2 overflow-hidden h-60 md:pl-10 flex justify-center items-center md:order-1'><img src='https://www.docusign.mx/sites/d8/files/styles/body_max_width/public/2020-11/digitalizacion.jpeg?itok=PbZpPA2n' alt='' /></div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className='w-full px-12 md:px-20 flex flex-col md:flex-row justify-around items-center gap-12 md:gap-20'>
            <div className='flex flex-col gap-4 md:pl-10 md:w-1/2'>
            <p className='font-semibold text-white text-lg md:text-xl'>Feel free to show your creativity</p>
            <p className='font-light text-white text-base lg:text-lg md:w-2/3'>Your logo, your banner, your landing page and you can enhance your image to the world in the most innovative way with our help.</p>
            </div>
            <div className='md:w-1/2 overflow-hidden h-60 md:pr-10 flex justify-center items-center'><img src='https://www.ciat.org/wp-content/uploads/2022/03/CIATBlogAFerreiraTostes_mar22.png' alt='' /></div>
        </div>
        </AnimationOnScroll>
    </div>
    </>
    )
}

export default HomeFeatures