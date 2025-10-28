import style from'./Home.module.css'
import Heading from '../Heading/Heading'
import test from'../../assets/avataaars.svg'
import useTitle from '../../hooks/useTitle'
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
    document.title = "Framework"; 
  }, []);
  return <>
  <img src={test} className=' w-1/5 mx-auto mt-5' alt="" />
  <Heading text=" start Framework"/> 
   <div className="text-white font-normal text-center ">Graphic Artist - Web Designer - Illustrator</div>
  </>
  
}
