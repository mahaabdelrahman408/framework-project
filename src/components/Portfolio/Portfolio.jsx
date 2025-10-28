import React, { useState } from "react";
import style from "./Portfolio.module.css";
import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useTitle from "../../hooks/useTitle";

const images = Object.values(
  import.meta.glob("../../assets/*.png", {
    as: "url",
    eager: true,
  })
);

export default function Portfolio() {
  const [isModalOpan, setisModalOpan] = useState(false);
  const [imageSource, setimageSource] = useState("");
  useTitle("Portfolio")

  return (
    <>
     

      <Heading text={"portfolio component"}> </Heading>
      <div className="row ">
        {images.map((image, index) => (
          <div key={index} className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
            <div className="relative group rounded-md overflow-hidden">
              <img
                src={image}
                className="w-full rounded-md transition-transform duration-300 group-hover:scale-105 "
                onClick={(e) => {
                  setimageSource(e.target.getAttribute("src"));
                  setisModalOpan(true);
                }}
              />
              <div className="absolute inset-0 bg-[#1abc9c]/0 group-hover:bg-[#1abc9c]/60 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <FontAwesomeIcon
                  className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                  icon={faPlus}
                  size="6x"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpan && (
        <div className="fixed inset-0 z-20 center">
          <div
            className="bg-sky-950 opacity-75 absolute w-full h-full"
            onClick={() => {
              setisModalOpan(false);
            }}
          ></div>
          <img src={imageSource} className="w-1/3 z-30 relative" alt="" />
        </div>
      )}
    </>
  );
}
