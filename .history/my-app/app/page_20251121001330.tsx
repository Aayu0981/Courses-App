'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import subject from "./Components/Subject";


export default function Home(){
  return(

<nav className="m-5 mt-10 w-full bg-white   flex    text-xl ">

  {/* Left logo */}
<div className="flex gap-10 " >
   <Image src="/F2.png" alt="IconeImage" height={30} width={100}/>

 
  <p>All Degrees</p>
  
<subject
  <p>Qualification</p>
  <p>Resource</p>
</div>

{/* right part of nav */}
<div  className="flex  gap-10 absolute top-0 right-0 mt-10">
  <CiSearch className="h-8 w-10"/>
  <button>Register</button>
</div>
</nav>

 
 )

}