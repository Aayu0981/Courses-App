'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import Subject from "./Components/Subject";
import Courses from "./Components/Courses";


export default function Home(){
  return(

<nav className="m-5 mt-10  bg-white   flex    text-xl ">

  {/* Left logo */}
<div className="flex gap-10 text-2xl" >
   <Image src="/F2.png" alt="IconeImage" height={50} width={110}/>
   <Subject />
   <Courses/>
  <span className=" text-pink-600 hover:text-blue-700">Degrees</span>
  <span className=" w-full whitespace-nowrap overflow-visible  text-pink-600 hover:text-blue-700">For Business</span>
</div>

{/* right part of nav */}
<div  className="flex  gap-10 absolute top-0 right-0 mt-10 text-2xl text-pink-600 ">
  <CiSearch className="h-8 w-10 hover:text-blue-600" />
  <button className=" text-white bg-pink-600 hover:bg-blue-600 p-3 text-xl">Register</button>
</div>
</nav>

 
 )

}