import ColorBox from "./ColorDiv";
import Image from "next/image";


export default function MidPages2(){
    return(
        <div className="container mx-auto  md:m-40 px-4  items-center justify-center">
    

    <div className="flex items-center justify-center" >
      <span className="text-3xl font-size  ">Learn with <span className="text-pink-600">200+</span>
       world-classs institutuions<br/>
         and educators
      </span>
        </div>

        <div> 
            <div className="flex justify-center gap-10">
            <Image src="/kingclg.avif" alt="image" height={100} width={100} cl"/>

              <Image src="/cam2.svg" alt="image" height={200} width={200}/>

                <Image src="/ucl2.svg" alt="image" height={200} width={200}/>

                  <Image src="/leed2.svg" alt="image" height={200} width={200}/>

                    <Image src="/cipd2.svg" alt="image" height={200} width={200}  className="text-black"/>
                   </div>

                    <div className="flex justify-center gap-10">
                      <Image src="/bloom2.svg" alt="image" height={200} width={200} className="bg-transparent " />

                        <Image src="/accenture.png" alt="image" height={200} width={200}/>
                          
                             <Image src="/hnc2.svg" alt="image" height={200} width={200} color="black" className="text-black" />




                        </div>
        </div>


   </div>


       
    );
}