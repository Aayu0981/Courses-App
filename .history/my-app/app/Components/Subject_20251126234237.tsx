'use client';
import Link from "next/link";
import { useState } from "react";

import { IoChevronUpOutline } from "react-icons/io5";

import {IoChevronDownSharp  } from "react-icons/io5";



export default function Subject(){

const[open ,setOpen]=useState(false);


    return(<div className="relatiive w-full max-w-sm mx-auto">

    <div onClick={()=>setOpen(!open)} className="absolute flex cursor-pointer text-pink-600 hover:text-blue-600 text-2xl">
        <span className="">Subjects  </span>
        <span className="">{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
    </div>


    {open && (
        <div  className="bg-gray-100 w-full min-h-screen">
            
        </div>
    )}
    </div>
    
);
}