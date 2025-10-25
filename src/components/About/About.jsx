import React from 'react'
import style from'./About.module.css'
import Heading from '../Heading/Heading'
import useTitle from '../../hooks/useTitle'
export default function About() {
  useTitle("About")
  return <>
  <Heading text={' about component'}> </Heading>
 <div className="container mx-auto text-white p-4">
  <div className="flex flex-col  md:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-0">
    <div className="flex-1 flex justify-center items-center  ">
      <p className="max-w-md text-start leading-relaxed">
        Freelancer is a free bootstrap theme created by Route. The download
        includes the complete source files including HTML, CSS, and JavaScript
        as well as optional SASS stylesheets for easy customization.
      </p>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <p className="max-w-md text-start leading-relaxed ">
        Freelancer is a free bootstrap theme created by Route. The download
        includes the complete source files including HTML, CSS, and JavaScript
        as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</div>


  </>
}
