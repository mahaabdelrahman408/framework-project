import React, { useEffect, useState } from 'react'
import style from'./Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const [isScroling, setIsScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
useEffect(()=>{


const handleScroll =()=>{

if (window.scrollY>20){
  setIsScrolling(true);
}  else {
  setIsScrolling(false);
}
};
  window.addEventListener("scroll", handleScroll);
   return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <>
  
<nav className={`${isScroling===false?"py-10":"py-6"} transition-[padding] duration-500 fixed top-0 right-0 left-0 z-10 bg-[#2c3e50] `} >
 <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
 <div className="flex justify-between items-center w-full sm:w-auto">
   <h2 ><Link className='text-white text-3xl font-bold' to={""}>Start Framework</Link></h2>
   <button  
   onClick={()=>setIsOpen(!isOpen)} 
                 className="text-white sm:hidden focus:outline-none cursor-pointer border-1 p-3 rounded-xl border-gray-800 "

   >
     <span className="block w-6 h-0.5 bg-gray-800 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-800 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
   </button>

</div>

  <ul 
  className={`${
              isOpen ? "flex" : "hidden"
            } flex-col items-start absolute top-full left-0 w-full bg-[#2c3e50] pb-8 px-7 sm:static sm:flex sm:flex-row sm:items-center sm:w-auto sm:bg-transparent gap-y-4 sm:gap-x-10`}
          >   
           <li><NavLink className={'uppercase text-white font-bold text-1xl p-3'} to={'about'}>about</NavLink>
      </li>
    <li><NavLink className={'uppercase text-white font-bold text-1xl p-3'} to={'portfolio'}>portfolio</NavLink>
      </li>
    <li><NavLink className={'uppercase text-white font-bold text-1xl p-3'} to={'contact'}>contact</NavLink>
      </li>
  </ul>
  
 </div>
</nav>

  </>
  
}
