'use client';
import Link from "next/link";
import { useState } from "react";

import { IoChevronUpOutline } from "react-icons/io5";

import {IoChevronDownSharp  } from "react-icons/io5";



export default function Subject(){

const[open ,setOpen]=useState(false);


    return(<div className="w-full max-w-sm mx-auto">
<Link href=></Link>
    <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer select-none text-pink-600 hover:text-blue-600 text-2xl">
        <span className="">Subjects </span>
        <span className="">{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
    </div>

    {open && (
        <ul  className="bg-gray-100 p-3 space-y-2">
            <li>Math</li>
              <li>Math</li>
                <li>Math</li>
        </ul>
    )}
    </div>
    
);
}