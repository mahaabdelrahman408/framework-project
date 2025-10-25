import React from 'react'
import style from'./Heading.module.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLineChart, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';
import { faGripLines } from '@fortawesome/free-solid-svg-icons/faGripLines';
export default function Heading({text}) {
 const{pathname}= useLocation();
 const isLight=pathname==="/"||pathname==="/about"
 const color= isLight?'white':'#2c3e50'
  
  return <>
      <h1 className={`${isLight? " text-white " : " text-[#2c3e50] "}font-bold text-5xl text-center uppercase mt-5`}>{text}</h1>
      <div className="flex items-center justify-center gap-3 mt-3">
     <div className="w-[100px] h-[4px] "style={{ backgroundColor: color }} ></div>
            <FontAwesomeIcon className='p-3' icon={faStar} style={{ color: color }} ></FontAwesomeIcon>
      <div className="w-[100px] h-[4px] "style={{ backgroundColor: color }}></div>

      </div>
  </>
  
}
