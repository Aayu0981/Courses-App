'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import Subject from "./Subject";
import Courses from "./Courses";


export default function Nav(){
  return(

<nav className="m-5 mt-10  bg-white   flex    text-xl ">

  {/* Left logo */}
<div className="flex text-2xl" >
  <div className="bg-amber-500 h-20 w-120 md:m-0 object-contain">
   <Image src="/F2.png" alt="IconeImage" className="w-full h-full object-contain" height={50} width={200}/>
   </div>
   <Subject />
   <Courses/>
  <span className=" text-pink-600 hover:text-blue-700">Degrees</span>
  <span className=" w-full whitespace-nowrap overflow-visible  text-pink-600 hover:text-blue-700">For Business</span>
</div>

{/* right part of nav */}
<div  className="flex  gap-10 absolute top-1 right-10 mt-10 text-pink-600 ">
  <CiSearch className="h-8 w-10 hover:text-blue-600  text-2xl" />
  <button className=" text-white bg-pink-600 hover:bg-blue-600 font-semibold text-lg px-1 py-1 ">Register</button>
</div>
</nav>

 
 )

}