'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(

<nav className="m-5 w-full bg-white shadow-sm sticky top-0 z-50">

  {/* Left logo */}
<div className="flex mx-auto px-6 py-4 items-center max-w-7xl justify-between" >
  
  <Image src="/F2.png" alt="IconeImage" height={100} width={100}/>

  <p>All Degrees</p>
  <p>subjects</p>
  <p>Qualification</p>
  <p>Resource</p>
</div>

{/* right part of nav */}
<div  className="flext">
  <CiSearch/>
  <button>Enquare</button>
</div>
</nav>

 
 )

}