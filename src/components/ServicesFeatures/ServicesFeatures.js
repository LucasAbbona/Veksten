import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css/animate.min.css";

const ServicesFeatures = () => {
  return (
    <div className="bg-Secundario w-full">
        <AnimationOnScroll animateIn="animate__fadeInUp">
        <h2 className="text-2xl pt-10 md:pt-20 pb-24 text-white w-full px-10 md:px-20">Services</h2>
        </AnimationOnScroll>
        <div className='flex flex-col gap-12 md:gap-24'>
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pr-10 md:w-1/2 md:order-1'>
                <p className='font-semibold text-white text-xl'>Managment Systems</p>
                <p className='font-light text-white text-base lg:text-lg '>Take control of your entire business, from logistics and administration to customers, income, expenses and much more. <br/> Stop doing math with a calculator at the end of the month and let technology do it for you. We offer you management systems for whatever you need, and this way your business will be much more optimized.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pl-10 flex justify-center items-center'><img src='https://niuoffice.com/wp-content/uploads/2022/09/monday.com-project-management-software-complete-list.jpg' alt='' /></div>
            </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pl-10 md:w-1/2'>
                <p className='font-semibold text-white text-xl '>Your website</p>
                <p className='font-light text-white text-base lg:text-lg '>Create your own website with our help and promote your services and products easily. With responsive design, dynamic, animated and many more features, you can take full advantage of the digital world.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pr-10 flex justify-center items-center'><img src='http://morweb.org/get/files/image/galleries/ngo-website-development.jpg' alt='' /></div>
            </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pr-10 md:w-1/2 md:order-1'>
                <p className='font-semibold text-white text-xl'>Landing Pages</p>
                <p className='font-light text-white text-base lg:text-lg '>If you are looking for a cheaper and less complex alternative to a platform, here is the solution. <br /> You will have your landing page where you can show the world in a concise way everything you have to offer. <br /> With responsive design, cheaper and just as beautiful.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pl-10 flex justify-center items-center'><img src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/04/Landing-Page-Examples.png' alt='' /></div>
            </div>
            </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pl-10 md:w-1/2'>
                <p className='font-semibold text-white text-xl'>Banners</p>
                <p className='font-light text-white text-base lg:text-lg '>We create your banner, either to advertise your business, linkedin, youtube, or whatever you want. Modern designs, in a short time and in the best Veksten style.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pr-10 flex justify-center items-center'><img src='https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg' alt='' /></div>
            </div>
            </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pr-10 md:w-1/2 md:order-2'>
                <p className='font-semibold text-white text-xl'>Logos</p>
                <p className='font-light text-white text-base lg:text-lg '>Creation of logos for youtube, discord, personal brands, companies, and for everything you need. <br /> Modern designs and in an instant so you can show your renewed image.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pl-10 flex justify-center items-center order-1'><img src='https://static-cse.canva.com/blob/664364/gaminglogomaker.jpg' alt='' /></div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='w-full px-10 md:px-20 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20'>
                <div className='flex flex-col items-center gap-4 md:pl-10 md:w-1/2'>
                <p className='font-semibold text-white text-xl'>More digital solutions</p>
                <p className='font-light text-white text-base lg:text-lg '>We also do photo editing, mockups, and all kinds of digital products. <br /> For more information please fill out the contact form and we will get back to you in less than 24 hours.</p>
                </div>
                <div className='md:w-1/2 overflow-hidden h-60 md:pr-10 flex justify-center items-center'><img src='https://www.greenbook.org/mr/wp-content/uploads/2020/12/7-Tips-to-Improve-Online-Customer-Service-Increase-Sales-1024x683.png' alt='' /></div>
            </div>
            </AnimationOnScroll>
        </div>
    </div>
  )
}

export default ServicesFeatures