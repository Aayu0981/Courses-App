'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(

<nav className="m-5 w-full bg-white shadow-sm sticky flex ">

  {/* Left logo */}
<div className="flex gap-5" >
   <Image src="/F2.png" alt="IconeImage" height={30} width={90}/>

 
  <p>All Degrees</p>
  <p>subjects</p>
  <p>Qualification</p>
  <p>Resource</p>
</div>

{/* right part of nav */}
<div  className="flex  gap-5 absolute top-0 right-0">
  <CiSearch/>
  <button>Enquare</button>
</div>
</nav>

 
 )

}