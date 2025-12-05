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

        <div className="  whitespace-normal w-120 md:m-2 text-[16px] " >
            <b >Gain career-advancing skills with online MBAs and Business
             degrees.</b> Earn your degree at a pace that suits you with our flexible, 
             online MBAs and business and management degrees from top universities.
        </div>

        <button className="text-lg text-white py-[8px] px-[16px] rounded-xl font-stretch-normal bg-pink-600 hover:bg-blue-600  font-sans mt-10">Explore business degrees</button>
    

          {/* container div */}
          <div className=' md:my-10 bg-white h-100 w-70 rounded-3xl shadow-md shadow-gray-500 overflow-hidden hover:bg-gray-100 '>
                          <div className='relative inline-block w-full'>
                          <Image src="/image3.webp" alt='image' width={500} height={500} className='w-full h-30 object-cover  ' />
                          <div className='absolute inset-0  mix-blend-multiple  bg-gradient-to-b from-pink-600/80 to-transparent'></div>
                           </div>
                          <h2 className='mx-4 my-6 font-semibold'>MSc Business and Managment</h2>
                          <p className='mx-4 text-gray-600 text-[14px]'>Bolster your practical business skills
                            and boost your management abilities with this online MSc from Cranfield
                            University. This flexible online masters 
                            allows you to advance your career at...
                          </p>
                          <button className='mx-4 bg-gray-200 p-1 rounded-xl font-medium mt-12 '>Degree Program</button>
          
                        </div>


    </div>
          
        <div className=" flex justify-center ">
        <div className="bg-gradient-to-r  from-purple-100 to-pink-100 w-320 h-200 rounded-[90px]  shadow-md shadow-gray-500 md:my-25">
          <div className="px-[64px] my-[124px]">
           {/* heading aytehi yha */}

           <h2 className="text-[40px] -mt-10 font-semibold ml-15">How does it work</h2>
                           <RxDividerHorizontal size={100} className="text-pink-600 -mt-6 ml-15"  />


           <div className="flex gap-8 justify-center text-[16px] my-10">
            <span className="underline-center-hover cursor-pointer ">Short courses</span>
             <span className="underline-center-hover cursor-pointer">ExpertTracks</span>
              <span className="underline-center-hover cursor-pointer">Microcredentials</span>
               <span className="underline-center-hover cursor-pointer">Online degrees</span>
           </div>

           <div className="flex grid grid-cols-4 gap-5 justify-center my-[100px]">
            <div className="flex-col grid gap-10  justify-center ">
              <h1 className="text-[33px] font-bold">1</h1>
              <span className="text-[25px]">Choose a short course</span>
              <p className="text-[16px]">From introductory to advanced, you will find
                high-quality courses across every subject,
                designed and taught by academic advance 
                industry experts.
              </p>
            </div>

            <div className="flex-col grid gap-10 ">
              <h1 className="text-[33px] font-bold">2</h1>
              <span className="text-[25px]">Subscribe or upgrade</span>
              <p className="text-[16px]">Join FutureLearn Unlimited for long-term 
                access to your course and a CV-ready 
                certificate, or upgrade individually on
                 each course.
              </p>
            </div>


            <div className="flex-col grid gap-10  ">
              <h1  className="text-[33px] font-bold">3</h1>
              <span className="text-[25px]">Learn, connect and discuss</span>
              <p className="text-[16px]">Courses are divided into weeks
                 and steps. You’ll be able to connect with 
                 other learners throughout your learning
                 journey.</p>
            </div>


            <div className="flex-col grid gap-10 ">
              <h1  className="text-[33px] font-bold">4</h1>
              <span className="text-[25px]">Find your next course</span>
              <p className="text-[16px]">Now you’ve caught the bug, what will you 
                learn next.</p>
            </div>


           </div>
          </div>
       </div>
       </div>

       {/* Part3 */}

       <div>
        <div>

          <div className="font-normal text-[40px] mx-auto md:m-5">Short courses: <br/>
            <b>flexible, online <br/>
              learning
              <RxDividerHorizontal size={100} className="text-pink-600 -mt-6 -ml-2"  />

            </b>
          </div>
          

          <div>
            <p className="text-[16px] w-[480px] md:mx-5">Explore your next career, upakill in your current role, or pursue a 
              passion with our short courses from top universities and industry 
              experts.
            </p>
          </div>

          <button className="text-lg text-white py-[8px] px-[16px] rounded-xl font-stretch-normal bg-pink-600 hover:bg-blue-600  font-sans md:mt-10 ml-5">View all short couses</button>

        </div>
       </div>

</>
       
    );
}