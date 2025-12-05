'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(<div>



 
      <nav className="">
     <div  className="flex"> <Image src="/F2.png" alt={"Icone"} height={100} width={100} className="bg-auto"/>
      <p>All Degrees</p>
      <p>Subjects</p>
      <p>Qualifications</p>
      <p>Resources</p>
</div>
      <p><CiSearch /></p>
      <button>Enquire</button>
  </nav>
  </div>)
}