import ColorBox from "./ColorDiv";
import Image from "next/image";


export default function MidPages2(){
    return(
        <div className="container mx-auto  md:m-40 px-4  items-center justify-center">
    

    <div className="flex items-center justify-center" >
      <span className="text-3xl  ">Learn with <span className="text-pink-600">200+</span> world-classs institutuions<br/>
         and educators
      </span>
        </div>

        <div> 
            <Image src="/kingclg.avif" alt="image" height={200} width={200}/>

              <Image src="/camb.png" alt="image" height={200} width={200}/>

                <Image src="/ucl.png" alt="image" height={200} width={200}/>

                  <Image src="/leed.png" alt="image" height={200} width={200}/>

                    <Image src="/cipd.png" alt="image" height={200} width={200}/>


                    <div>
                      <Image src="/bloom.png" alt="image" height={200} width={200}/>

                        </div>
        </div>
        </div>


       
    );
}