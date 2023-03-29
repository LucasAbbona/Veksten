import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css/animate.min.css";

const AboutText = () => {
  return (
    <div className="w-full px-10 md:px-20 flex flex-col gap-14">
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
        <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white w-full">Why you should select us</h3>
        <p className="text-white leading-relaxed text-base md:text-lg">Veksten is the perfect choice for businesses looking to streamline their operations and enhance their productivity. With our state-of-the-art technology solutions and expert team, we provide customized software development, IT consulting, and digital marketing services to help you achieve your goals. Our focus on innovation, quality, and customer satisfaction makes us stand out from the competition. Choose Veksten for reliable, efficient, and cost-effective solutions that will take your business to the next level.</p>
        </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
    <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white w-full">What we believe in</h3>
        <p className="text-white leading-relaxed text-base md:text-lg">In the future, IT solutions will play an even more critical role in businesses than they do today. As an IT solution company, we envision a world where our clients can automate and optimize their operations with cutting-edge technology, allowing them to focus on what really matters: innovation and growth. 
        We see a future where artificial intelligence, machine learning, and the Internet of Things will transform the way businesses operate, providing real-time data insights and improving decision-making processes. <br/>
        We aim to be at the forefront of this technological revolution, providing our clients with the latest tools and solutions to stay ahead of the competition. <br/>
        With our expert team of developers and consultants, we will continue to push the boundaries of what is possible and help our clients achieve their goals in this fast-paced and ever-evolving digital world.
        Welcome to the future of IT solutions, where anything is possible.</p>
        </div>
    </AnimationOnScroll>
    </div>
  )
}

export default AboutText