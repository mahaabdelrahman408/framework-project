import style from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className=" text-white  text-center  ">
      <div className="bg-[#2c3e50] p-9">
          <div className=" container mx-auto flex flex-wrap justify-center gap-6   ">
          {/* Location */}
          <div className=" p-6 leading-10  max-w-[400px] flex-1 min-w-[250px] ">
            <h3 className="text-3xl font-bold uppercase">Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className=" p-6  min-w-0max-w-[400px] flex-1 min-w-[250px]  ">
            <h3 className="text-3xl font-bold uppercase">around the web</h3>
            <div className="flex justify-center items-center ">
              <div className="relative flex justify-center items-center w-10 h-10">
                <div className="absolute rounded-full border border-white w-8 h-8"></div>

                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="relative flex justify-center items-center w-10 h-10">
                <div className="absolute rounded-full border border-white w-8 h-8"></div>

                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="relative flex justify-center items-center w-10 h-10">
                <div className="absolute rounded-full border border-white w-8 h-8"></div>

                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="relative flex justify-center items-center w-10 h-10">
                <div className="absolute rounded-full border border-white w-8 h-8"></div>

                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "18px" }} />
              </div>
            </div>
          </div>

          <div className=" p-6 max-w-[400px] flex-1 min-w-[250px]  ">
            <h3 className="text-3xl font-bold uppercase">about freelancer</h3>
            <p className="text-wrap mx-auto leading-relaxed ">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
         
        </div>
      </div>
         <div className="bg-[#1a252f] py-4 ">
          <div className="container mx-auto text-center">

                   <p>Copyright © Your Website 2021</p>

          </div>
        </div>
      </footer>
    </>
  );
}
