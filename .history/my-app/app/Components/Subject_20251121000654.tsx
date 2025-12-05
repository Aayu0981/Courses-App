'use client'
import { useState } from "react"

export default function subject(){

const[open ,setOpen]=useState(false);


    return(<div className="w-full max-w-sm mx-auto">

    <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cur">
        <span>Subjects</span>
        <span>{open ? }</span>
    </div>
    </div>)
}