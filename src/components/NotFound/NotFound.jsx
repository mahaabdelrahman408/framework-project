import React from 'react'
import style from'./NotFound.module.css'
export default function NotFound() {
  return <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h2 className="text-5xl font-bold text-[#2c3e50] mb-4">404</h2>
      <p className="text-lg text-[#2c3e50] mb-6">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-2 bg-[#1abc9c] text-white rounded-lg hover:bg-[#1abc9c]/80 transition"
      >
        Go Home
      </a>
    </div>

  </>
  
}
