import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
    const ComponentDidMount=()=>{
        window.scrollTo(0,0)
    }
  return (
    <div className="bg-white w-full px-20 flex flex-col items-center">
        <div className="w-full flex flex-col items-center sm:items-end sm:flex-row sm:justify-between gap-3 sm:gap-0 pt-10">
        <Link to={'/'} onClick={()=>ComponentDidMount()}><p className="text-Principal text-4xl sm:text-5xl">Veksten;</p></Link>
            <ul className="flex flex-row w-full sm:w-1/3 justify-around items-end">
                <li className="text-Secundario font-medium hover:text-Principal"><Link to={'/success'} onClick={()=>ComponentDidMount()}>Success</Link></li>
                <li className="text-Secundario font-medium hover:text-Principal"><Link to={'/services'} onClick={()=>ComponentDidMount()}>Services</Link></li>
                <li className="text-Secundario font-medium hover:text-Principal"><Link to={'/about'} onClick={()=>ComponentDidMount()}>About</Link></li>
            </ul>
        </div>
        <span className='w-full bg-Secundario h-h-1px mt-5'></span>
        <div className="flex flex-col items-center sm:flex-row w-full sm:justify-between sm:items-end pb-8 sm:h-36">
            <div className="flex flex-col items-center pt-5 sm:pt-0 sm:items-start gap-8">
                <div className='flex gap-2'>
                    <Link to={'https://www.linkedin.com/'}><AiFillLinkedin className='sm:text-2xl text-5xl hover:text-Principal'/></Link>
                    <Link to={'https://www.instagram.com/'}><AiOutlineInstagram className='sm:text-2xl text-5xl hover:text-Principal'/></Link>
                </div>
                <div className="flex gap-8 justify-between">
                    <p className="text-Secundario text-sm hover:text-Principal hover:cursor-pointer">Terms of Service</p>
                    <p className="text-Secundario text-sm hover:text-Principal hover:cursor-pointer">Privacy Polacy</p>
                </div>
            </div>
            <div className="flex sm:flex-col pt-5 sm:pt-0">
                <p className="text-Secundario font-medium">Contact Us:</p>
                <p className="text-Secundario hover:text-Principal hover:cursor-pointer">vekstenint@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer