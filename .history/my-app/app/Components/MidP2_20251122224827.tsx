import ColorBox from "./ColorDiv";
import Image from "next/image";
import { RxDividerHorizontal } from "react-icons/rx";



export default function MidPages2(){
    return(<>
        <div className="container mx-auto  md:m-40 px-4  items-center justify-center">
    

    <div className="flex items-center justify-center text-center" >
      <span className="text-4xl font-semibold font-size   ">Learn with <span className="text-pink-600">200+ </span>
         world-classs institutuions<br /> 
         and educators
      </span>
        </div>

       


        <div> 
            <div className="flex justify-center gap-15 md:my-20 cursor-pointer">
            <Image src="/kingclg.avif" alt="image" height={100} width={100}  />

              <Image src="/cam2.svg" alt="image" height={200} width={200}/>

                <Image src="/ucl2.svg" alt="image" height={200} width={200}/>

                  <Image src="/leed2.svg" alt="image" height={200} width={200}/>

                    <Image src="/cipd2.svg" alt="image" height={170} width={170}  className="text-black"/>
                   </div>

                    <div className="flex justify-center gap-10 md:my-20 cursor-pointer">
                      <Image src="/bloom2.svg" alt="image" height={200} width={200} className="bg-transparent " />

                      <Image src="/accenture.png" alt="image" height={200} width={200}/>
                          
                       <Image src="/hnc2.svg" alt="image" height={200} width={200} color="black" className="text-black" />



                     </div>
        </div>

    


   </div>
  <div className=" mx-auto md:m-5">
        <div>
            <span className="text-4xl font-normal">Take your knowledge a <br/>
                <b>degree</b> further
                <RxDividerHorizontal size={100} className="text-pink-600 -mt-6 -ml-3"  />

            </span>
        </div>

        <div className="  whitespace-normal w-120 md:m-2 " >
            <b >Gain career-advancing skills with online MBAs and Business
             degrees.</b> Earn your degree at a pace that suits you with our flexible, 
             online MBAs and business and management degrees from top universities.
        </div>

        <button className="text-lg text-white py-[8px] px-[16px] rounded-xl font-stretch-normal bg-pink-600 hover:bg-blue-600  font-sans mt-10">Explore business degrees</button>
    

          div co
    </div>

</>
       
    );
}