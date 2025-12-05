// // 'use client';
// // import Link from "next/link";
// // import { useState } from "react";

// // import { IoChevronUpOutline } from "react-icons/io5";

// // import {IoChevronDownSharp  } from "react-icons/io5";



// // export default function Subject(){

// // const[open ,setOpen]=useState(false);


// //     return(<div className="relatiive w-full max-w-sm mx-auto">

// //     <div onClick={()=>setOpen(!open)} className="absolute flex cursor-pointer text-pink-600 hover:text-blue-600 text-2xl">
// //         <span className="">Subjects  </span>
// //         <span className="">{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
// //     </div>


// //     {open && (
// //         <div  className="bg-gray-100 w-full min-h-screen">
            
// //         </div>
// //     )}
// //     </div>
    
// // );
// // }


// 'use client';
// import { useState } from "react";
// import { IoChevronUpOutline, IoChevronDownSharp } from "react-icons/io5";

// export default function Subject() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative">
//       <div
//         onClick={() => setOpen(!open)}
//         className="text-2xl flex items-center cursor-pointer gap-1 text-pink-600 hover:text-blue-700"
        
         
//       >
//         <span>Subjects</span>
//         {open ? <IoChevronUpOutline /> : <IoChevronDownSharp />}
//       </div>

//       {open && (
//         <div className={`fixed left-0  bg-gray-100  shadow-xl rounded-lg p-10 z-50 mt-5 w-full min-h-screen
        
//          `}>
//           <p>Computer Science</p>
//           <p>Business Management</p>
//           <p>Data Science</p>
//           <p>Healthcare</p>
//           <p>Psychology</p>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';
import Image from "next/image";
import { useState } from "react";
import { IoChevronUpOutline, IoChevronDownSharp } from "react-icons/io5";
import { PiGreaterThanThin } from "react-icons/pi";


export default function Subject() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Subject button */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 cursor-pointer text-[20px] font-medium rounded-md
          ${open ? "bg-gray-100  px-3 py-4" : "text-pink-600 hover:text-blue-700 px-3 py-2"}`}
      >
        <span>Subjects</span>
        {open ? <IoChevronUpOutline /> : <IoChevronDownSharp />}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="fixed left-0 top-20 bg-gray-100 shadow-xl p-10 z-50 w-full min-h-screen">
         
  <div className="flex ">
         <div className="text-black text-[16px] font-medium  w-150 ml-20 px-30">

            <p className="font-semibold">Subjects</p>

            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Business & Managment </p>
              <PiGreaterThanThin />
            </div>
            
               <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Creative Arts & Media </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Healthcare & Medicine </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>History</p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>IT & Computer Science </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 justify-between items-center hover:bg-gray-200 my-3">
                <p>Language </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Low </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Literature </p>
              <PiGreaterThanThin />
            </div>
            <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Nature & Enviroment</p>
              <PiGreaterThanThin />
            </div>


                <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Politics & Society</p>
              <PiGreaterThanThin />
            </div>

             <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Psychology & Mental Health</p>
              <PiGreaterThanThin />
            </div>

              <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Science, Engineering & Maths</p>
              <PiGreaterThanThin />
            </div>

              <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Study Skills</p>
              <PiGreaterThanThin />
            </div>

             <div className="flex gap-30 items-center justify-between hover:bg-gray-200 my-3">
                <p>Teaching</p>
              <PiGreaterThanThin />
            </div>

        </div>

        <div className="grid grid-cols-2 font-normal">
         
          <div className="text-black"> 
           <p className="my-5">Feature</p> 

           <div className="bg-white py-10">

            <Image src="/image14.webp" alt="image" height={200} width={250}/>
            <p className="text-[14px] text-gray-500">Short Course</p>
            <p>Becoming a Teacher</p>
           </div>
           </div>
           
           
           
           
           </div>

        </div>
        
     </div>
      )}
    </div>
  );
}
