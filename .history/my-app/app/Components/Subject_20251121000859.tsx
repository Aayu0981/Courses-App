'use client'
import { useState } from "react"

export default function subject(){

const[open ,setOpen]=useState(false);


    return(<div className="w-full max-w-sm mx-auto">

    <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer select-none">
        <span>Subjects</span>
        <span>{open ? 
io5/IoChevronDownSharp
x
#fff/#000
#000/#fff
#ddd/#333
#333/#ddd
#ff0/#fff
#000/#ff0
#0ff/#fff
#000/#0ff
#f0f/#fff
#000/#f0f
Code
import { IoChevronDownSharp } from "react-icons/io5";
<IoChevronDownSharp /> }</span>
    </div>
    </div>)
}