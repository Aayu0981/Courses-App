'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(

<nav className="m-5 w-full bg-white shadow-sm sticky top-0 z-50 flex">
 <Image src="/F2.png" alt="IconeImage" height={50} width={100}/>

  {/* Left logo */}
<div className="flex mx-auto px-6 py-4 gap-4 max-w-7xl justify-between" >
  
 
  <p>All Degrees</p>
  <p>subjects</p>
  <p>Qualification</p>
  <p>Resource</p>
</div>

{/* right part of nav */}
<div  className="flex items-center gap-4">
  <CiSearch/>
  <button>Enquare</button>
</div>
</nav>

 
 )

}