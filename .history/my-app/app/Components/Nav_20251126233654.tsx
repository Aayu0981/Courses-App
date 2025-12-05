// 'use client'
// import Image from "next/image"
// import { CiSearch } from "react-icons/ci";
// import Subject from "./Subject";
// import Courses from "./Courses";


// export default function Nav(){
//   return(

// <nav className="m-5 mt-10  bg-white   flex    text-xl ">

//   {/* Left logo */}
// <div className="flex text-2xl" >
//   <div className="h-20 w-120 -mt-5">
//    <Image src="/F2.png" alt="IconeImage" className="w-full h-full object-contain" height={50} width={200}/>
//    </div>
   
//    <Subject />
//    <Courses/>
//   <span className=" text-pink-600 hover:text-blue-700">Degrees</span>
//   <span className=" w-full whitespace-nowrap overflow-visible  text-pink-600 hover:text-blue-700">For Business</span>
// </div>

// {/* right part of nav */}
// <div  className="flex  gap-10 absolute top-1 right-10 mt-10 text-pink-600 ">
//   <CiSearch className="h-8 w-10 hover:text-blue-600  text-2xl" />
//   <button className=" text-white bg-pink-600 hover:bg-blue-600 font-semibold text-lg px-1 py-1 ">Register</button>
// </div>
// </nav>

 
//  )

// }
'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import Subject from "./Subject";
import Courses from "./Courses";

export default function Nav() {
  return (
    <nav className="w-full bg-white px-8 py-4 shadow-md flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-8 text-xl">

        {/* Logo */}
        <div className="h-14 w-36">
          <Image
            src="/F2.png"
            alt="IconeImage"
            className="w-full h-full object-contain"
            width={200}
            height={50}
          />
        </div>

        {/* Navbar Items */}
        <div className="flex items-center gap-6 text-pink-600 font-semibold top-0 l">

          <Subject />
          <Courses />

          <span className="cursor-pointer hover:text-blue-700">Degrees</span>
          <span className="cursor-pointer hover:text-blue-700 whitespace-nowrap">For Business</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-pink-600">
        <CiSearch className="h-7 w-7 cursor-pointer hover:text-blue-600" />

        <button className="text-pink-600 font-semibold hover:text-blue-700">
          Sign in
        </button>

        <button className="text-white bg-pink-600 hover:bg-blue-600 font-semibold px-4 py-2 rounded-md">
          Register
        </button>
      </div>
    </nav>
  );
}
