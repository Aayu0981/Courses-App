// 'use client';
// import Link from "next/link";
// import { useState } from "react";

// import { IoChevronUpOutline } from "react-icons/io5";

// import {IoChevronDownSharp  } from "react-icons/io5";



// export default function Subject(){

// const[open ,setOpen]=useState(false);


//     return(<div className="relatiive w-full max-w-sm mx-auto">

//     <div onClick={()=>setOpen(!open)} className="absolute flex cursor-pointer text-pink-600 hover:text-blue-600 text-2xl">
//         <span className="">Subjects  </span>
//         <span className="">{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
//     </div>


//     {open && (
//         <div  className="bg-gray-100 w-full min-h-screen">
            
//         </div>
//     )}
//     </div>
    
// );
// }


'use client';
import { useState } from "react";
import { IoChevronUpOutline, IoChevronDownSharp } from "react-icons/io5";

export default function Subject() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className=" flex items-center cursor-pointer gap-1 text-pink-600 hover:text-blue-700"
      >
        <span>Subjects</span>
        {open ? <IoChevronUpOutline /> : <IoChevronDownSharp />}
      </div>

      {open && (
        <div className="absolute left-0 top-full bg-white w-72 shadow-xl rounded-lg p-4 z-50">
          <p>Computer Science</p>
          <p>Business Management</p>
          <p>Data Science</p>
          <p>Healthcare</p>
          <p>Psychology</p>
        </div>
      )}
    </div>
  );
}
