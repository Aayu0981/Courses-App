'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(

<nav className="m-5 w-full bg-white shadow-sm sticky">

  {/* Left logo */}
<div className=" justify-between" >
  
  <Image src="/F2.png" alt="IconeImage" height={100} width={100}/>

  <p>All Degrees</p>
  <p>subjects</p>
  <p>Qualification</p>
  <p>Resource</p>
</div>

{/* right part of nav */}
<div >
  <CiSearch/>
  <button>Enquare</button>
</div>
</nav>

 
 )

}