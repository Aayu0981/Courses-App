'use client';
import { useState } from "react";

import { IoChevronUpOutline } from "react-icons/io5";

import {IoChevronDownSharp  } from "react-icons/io5";



export default function Subject(){

const[open ,setOpen]=useState(false);


    return(<div className="w-full max-w-sm mx-auto">

    <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer select-none">
        <span className="text-pink-600 hover:text-blue-600">Subjects </span>
        <span className="text-pink-700 hover:text">{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
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