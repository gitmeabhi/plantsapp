
import { Link, NavLink } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";

import "./index.css"


const Navbar = () => {



  return (
    <div className='navbar'>
        <div className='navbar-left'>
          <img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1729330215/eefc66cd70960daab6449206c3540858_cuc2ny.png' alt='logo' className='logo'  /> 
         <Link to = "/" className='navbar-brand'>Chaperone</Link>
        </div>
        <div className="navbar-middle">
             <NavLink to = "/" className='navbar-link'>Home</NavLink>
             <Link to = "/" className='navbar-link'>Plants & Pots</Link>
             <Link to = "/" className='navbar-link'>Tools</Link>
             <Link to = "/" className='navbar-link'>Our Services</Link>
             <Link to = "/" className='navbar-link'>Blog</Link>
             <Link to = "/" className='navbar-link'>Our Story</Link>
             <Link to = "/" className='navbar-link'>FAQs</Link>
             
         
        </div>
        <div className="navbar-right">
         
             <Link to = "/" className='navbar-link'> <RiAccountCircleLine size={27}  /> My Profile</Link>
             <Link to = "/" className='navbar-link'> <BsCart size={25} />  Cart</Link>
             
         
        </div>
    </div>
  )
}

export default Navbar