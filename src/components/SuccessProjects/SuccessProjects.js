import Cintia from './CintiaPalermo.png'
import Landing from '../HomeFeatures/Landing.png'
import Odalis from './Odalis.png'
const SuccessProjects = () => {
  return (
    <div>
      <h1 className="text-2xl mt-10 md:mt-20 mb-12 md:mb-24 text-white w-full px-10 md:px-20">Most Recent Jobs</h1>
      <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start w-full px-10 md:px-20 gap-8 pb-8 md:pb-24">
        <div className='md:w-1/3'>
            <div className='w-full relative overflow-hidden'>
              <img src={Cintia} className='w-full' alt="" />
              <div className='absolute bottom-0 bg-Secundario bg-opacity-40 w-full h-full flex justify-center items-end'>
                <p className="text-white pb-3 text-xl">Cintia Palermo Modista</p>
              </div>
            </div>
            <p className="text-white pt-5">Website for a dressmaker who was looking to optimize her business with the website allowing her customers to contact her and see what she had to offer.</p>
          </div>
          <div className='md:w-1/3'>
            <div className='w-full relative overflow-hidden'>
              <img src={Landing} className='w-full' alt="" />
              <div className='absolute bottom-0 bg-Secundario bg-opacity-40 w-full h-full flex justify-center items-end'>
                <p className="text-white pb-3 text-xl">Nouble Exchange</p>
              </div>
            </div>
            <p className="text-white pt-5">Landing Page for exchange that wanted to show their products in a modern, dynamic and attractive way.</p>
          </div>
          <div className='md:w-1/3'>
            <div className='w-full relative overflow-hidden'>
              <img src={Odalis} className='w-full' alt="" />
              <div className='absolute bottom-0 bg-Secundario bg-opacity-40 w-full h-full flex justify-center items-end'>
                <p className="text-white pb-3 text-xl">Odalis Alta Costura</p>
              </div>
            </div>
            <p className="text-white pt-5">Website for haute couture dressmaker who wanted to globalize their services in the digital world, allowing to see everything they offer, their customers, and their contact.</p>
          </div>
        </div>
    </div>
  )
}

export default SuccessProjects