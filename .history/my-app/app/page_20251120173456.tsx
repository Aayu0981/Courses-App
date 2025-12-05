'use client'
import Image from "next/image"
import { CiSearch } from "react-icons/ci";


export default function Home(){
  return(<div>



 
      <nav className="flex text-2xl gap-3 m-5  jus">
      <Image src="/F2.png" alt={"Icone"} height={100} width={100} className="bg-auto"/>
      <p>All Degrees</p>
      <p>Subjects</p>
      <p>Qualifications</p>
      <p>Resources</p>

      <p><CiSearch /></p>
      <button>Enquire</button>
  </nav>
  </div>)
}