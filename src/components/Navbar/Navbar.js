import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <ul className="w-full h-16 bg-white flex flex-row items-center justify-center gap-24 ">
            <li className="text-Secundario text-lg hover:text-Principal"><Link to={'/services'}>Services</Link></li>
            <li className="text-Secundario text-lg hover:text-Principal"><Link to={'/success'}>Success</Link></li>
            <li className="text-Secundario text-lg hover:text-Principal"><Link to={'/about'}>About</Link></li>
        </ul>
  )
}

export default Navbar