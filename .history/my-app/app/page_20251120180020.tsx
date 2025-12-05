'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(<div>



 
      <nav className="">
     <div  className="flex justify-between text-2xl m-5  justify-basel"> <Image src="/F2.png" alt={"Icone"} height={100} width={100} className="bg-auto"/>
      <p>All Degrees</p>
      <p>Subjects</p>
      <p>Qualifications</p>
      <p>Resources</p>
     </div>
      

      <div className=""><p><CiSearch /></p>
      <button>Enquire</button></div>
  </nav>
  </div>)
}