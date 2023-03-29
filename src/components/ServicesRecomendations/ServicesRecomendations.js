import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ServicesRecomendations = () => {
  return (
    <div className="bg-Secundario px-10 md:px-20">
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div>
        <h2 className="text-xl tmd:text-2xl pt-20 pb-12 text-white w-full">Our recommended Hosting and servers</h2>
        <div className="md:h-80 w-full flex overflow-hidden">
            <img src="https://genuinocloud.com/wp-content/uploads/2019/09/mx-con-datos-de-genuinocloud-hostinger-images-genuinocloud.com.png" className="w-1/2" alt=""/>
            <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/09/como-anadir-un-registro-a-con-godaddy-1024x512.png" alt="" className="w-1/2"/>
        </div>
        <p className="text-white text-base md:text-xl text-center pt-3 md:pt-7">
        We recommend Hostinger and GoDaddy, two of the best hosting services in the world, with optimal search engine optimization and customized plans for your business needs and your budget.
        </p>
        </div>
        </AnimationOnScroll>
        <div>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
        <h2 className="text-xl md:text-2xl pt-20 pb-12 text-white w-full">Payment methods and payment plan</h2>
        <div className="relative w-full overflow-hidden">
            <img src="https://finance.zohocorp.com/wp-content/uploads/2019/01/payment-service-providers-1-1024x512.png" className="w-full" alt="" />
            <div className="bg-Secundario bg-opacity-70 md:bg-opacity-40 h-full absolute bottom-0 flex flex-col justify-end items-center pb-4 md:pb-10">
                <p className="text-white font-medium text-base md:text-2xl pb-5">Payment Plan </p>
                <p className="text-white font-regular text-xs md:text-lg text-center w-5/6">We seek not only to provide the best product to the client, but also security, therefore the initial payment only includes the costs for hosting and a 15% down payment. Once the product is finished and the client is satisfied, the other 85% of the payment is completed.</p>
            </div>
        </div>
        <p className="text-white font-light text-sm md:text-lg w-full text-center pt-4">We accept Mercado Pago, Paypal and bank transfer worldwide.</p>
        </AnimationOnScroll>
        </div>
    </div>
  )
}

export default ServicesRecomendations