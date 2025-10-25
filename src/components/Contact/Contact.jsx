import React from "react";
import style from "./Contact.module.css";
import Heading from "../Heading/Heading";
import useTitle from "../../hooks/useTitle";
export default function Contact() {
    useTitle("Contact")
  
  return (
    <>
      <Heading text={" conatct section"}> </Heading>

      <form className ="max-w-md mx-auto m-7">
        <div className ="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="floating_userName"
            id="floating_userName"
            className ="block py-3.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            for="floating_userName"
            className ="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userName :
          </label>
        </div>
        <div className ="relative z-0 w-full mb-8 group">
          <input
            type="number"
            name="floating_userAge"
            id="floating_userAge"
            className ="block py-3.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            for="floating_userAge"
            className ="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userAge :
          </label>
        </div>
        <div className ="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="floating_userEmail"
            id="floating_userEmail"
            className ="block py-3.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            for="floating_userEmail"
            className ="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userEmail :
          </label>
        </div>
        <div className ="relative z-0 w-full mb-8 group">
          <input
            type="password"
            name="floating_userPassword"
            id="floating_userPassword"
            className ="block py-3.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
            required
          />
          <label
            for="floating_userPassword"
            className ="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-[#1abc9c]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userPassword :
          </label>
        </div>

        <button
          type="submit"
          className ="text-white bg-[#1abc9c] hover:bg-[#1abc9c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer "
        >
          {" "}
          send Message{" "}
        </button>
      </form>
    </>
  );
}
