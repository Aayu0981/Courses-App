
import { useState } from "react";

export default function subject(){

const[open ,setOpen]=useState(false);


    return(<div className="w-full max-w-sm mx-auto">

    <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer select-none">
        <span>Subjects</span>
        <span>{open ? "<IoChevronUpOutline />":"<IoChevronDownSharp/>" }</span>
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