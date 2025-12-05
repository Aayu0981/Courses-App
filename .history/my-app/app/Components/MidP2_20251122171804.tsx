import ColorBox from "./ColorDiv";
import Image from "next/image";


export default function MidPages2(){
    return(
        <div className="container mx-auto  md:m-40 px-4 flex items-center justify-center">
    

    <div className="f" >
      <span className="text-3xl  ">Learn with <span className="text-pink-600">200+</span> world-classs institutuions<br/>
         and educators
      </span>
        </div>

        <div> 
            <Image src="/kingclg.avif" alt="image" height={200}/>
        </div>
        </div>


       
    );
}