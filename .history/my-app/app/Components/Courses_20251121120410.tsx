'use client';
import { useState } from "react";

import { IoChevronUpOutline } from "react-icons/io5";

import {IoChevronDownSharp  } from "react-icons/io5";

export default function Courses(){
      const[open ,setOpen]=useState(false);

      return(<div className="w-full max-w-sm mx-auto ">
        
            <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer select-none  text-pink-700 hover:text-blue-800">
                <span className="font-s">Courses</span>
                <span>{open ? <IoChevronUpOutline />:<IoChevronDownSharp/> }</span>
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
    