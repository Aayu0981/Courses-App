import ColorBox from "./ColorDiv";
import Image from "next/image";
import ContainerDiv from "./ContDiv"

import { RxDividerHorizontal } from "react-icons/rx";
import { FiDivideCircle } from "react-icons/fi";



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

          <button className="buttons ml-4">View all short couses</button>


          <div className="flex col-auto md:m-5 gap-30">

            <ContainerDiv  image="/image4.jpg"
             title="Harnessing AI in Marketing and Communication"
             description="Learn how to harness AI technology to 
             plan and deliver compeling content,
             automate marketing processes, and
             boost efficiency. "
             buttonText="Short Course"/>

              <ContainerDiv  image="/image5.jpg"
             title="Dying Well: The Role of
             Palliative care and Sedation in
             End of Life Care"
             description="Improve your care as a healthcare
             professional or family caregiver with
             palliative treatment and sedation best 
             practices. "
             buttonText="Short Course"/>


              <ContainerDiv  image="/image6.jpg"
             title="A Nutritional Approach to
             Agriculture and Food Security"
             description="Develop skills to apply evaluate 
             innovative solutions that place
             nutrition at the heart of a sustainable food system. "
             buttonText="Short Course"/>


              <ContainerDiv  image="/image7.jpg"
             title=" Educating Forces Sustainable 
             Development (ESD) in School and Universities"
             description=" explode the global challenge facing 
             sustainable development worldwide
             And how to introduce them in school
             And HE institutions. "
             buttonText="Short Course" />
            

            
          </div>


          <div>
            <div>

               <div className="md:mx-5">
                 <span className="text-4xl font-normal"> <b>Future-proof </b> your <br/>
                   career with our online <br/>courses
                 
                   <RxDividerHorizontal size={100} className="text-pink-600 -mt-6 -ml-3"  />

                  </span>
                </div>

                 <div className="  whitespace-normal w-120 md:m-2 text-[16px] md:mx-5" >
                    Gain career-enhancing skills and earn a professional certificate from
                     Deakin University with our online specialist courses. In just a few 
                     weeks, you can become an innovative leader, an in-demand data
                     analyst, or an effective climate change communicator.
                 </div>
                      <div>
                      <button className="text-lg text-white py-[8px] px-[16px] rounded-xl  bg-pink-600 hover:bg-blue-600  font-sans mt-10 md:mx-5">Explore Microcredentials</button>
                      <button className="border border-pink-600 rounded-xl text-pink-600  hover hover:text-blue-600 hover:border-blue-600 py-[8px] px-[16px]">Explore ExperTracks</button>
                          </div>


            </div>
          </div>


        </div>
       </div>


       <div className="flex  items-center gap-20 md:m-6">
        <ContainerDiv image="/image8.jpg"
        title="Data Analytics for E-Commerce"
        description="Delve into data science and data anaysis to drive the performance of
        youur e-commerce platform or organisation. "  
        buttonText="Microcredential"/>


          <ContainerDiv image="/image10.jpg"
        title="Change Tools"
        description="Build your knowledge, practical skills,and use of tools to manage
        or lead workplace change. "  
        buttonText="Microcredential"/>


          <ContainerDiv image="/image9.jpg"
        title="Digital Advertising Operations"
        description="Master the fundamentals of ops and gain the skkills to monetise online
        content and audiences through digital advertising.. "  
        buttonText="Microcredential"/>

      </div>



        <div className="w-[90%] mx-auto mt-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-[90px] shadow-md shadow-gray-500 py-10 px-12">
  
  <div className="flex flex-col md:flex-row items-center gap-16">

    {/* Left Image */}
    <div className="flex justify-center md:justify-start">
      <Image 
        src="/image11.webp" 
        alt="image" 
        width={400} 
        height={300} 
        className="rounded-xl"
      />
    </div>

    {/* Right Content */}
    <div className="flex-1">
      <span className="text-[40px] font-semibold leading-tight">
        Ready to take your CV to the next <br /> level?
      </span>

      <RxDividerHorizontal size={100} className="text-pink-600 -mt-4" />

      <p className="text-[20px] mt-3">
        FutureLearn has partnered with leading CV reviewer TopCV, to help boost 
        your employability and enable better course recommendations for you. Get 
        your FREE CV review in two easy steps.
      </p>

      <button className="buttons mt-6">
        Submit your CV
      </button>
    </div>

  </div>
</div>


 <div className="w-[90%] mx-auto mt-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-[90px] shadow-md shadow-gray-500 py-10 px-12">
  
  <div className="flex flex-col md:flex-row items-center gap-16">

    {/* Left Image */}
    <div className="flex justify-center md:justify-start">
      <Image 
        src="/image12.webp" 
        alt="image" 
        width={400} 
        height={300} 
        className="rounded-xl"
      />
    </div>

    {/* Right Content */}
    <div className="flex-1">
      <span className="text-[40px] font-semibold leading-tight">
        Ready to take your CV to the next <br /> level?
      </span>

      <RxDividerHorizontal size={100} className="text-pink-600 -mt-4" />

      <p className="text-[20px] mt-3">
       Explore your career options with FutureBot, the AI-powered chatbot 
       that brings you tailor-made course recommendations. Get started 
       and make your next career move.
      </p>

      <div className="flex md:mt-10 gap-10">
        <p>Powered by</p>
         <Image 
        src="/image13.svg" 
        alt="image" 
        width={250} 
        height={200} 
        className="rounded-xl  -mt-5"
      />
      </div>

      <button className="buttons -mt-5">
       Chat now
      </button>
    </div>

  </div>
</div>


<div className="bg-white">

<div className="md:my-40 mx-20 px-10 py-10 bg-white">

  <div className="flex justify-center gap-20 text-center">

    {/* ITEM 1 */}
    <div className="flex flex-col">
      <span className="text-pink-600 text-[20px] font-semibold mb-3">Subjects</span>
      <p className="text-[15px]">Courses grouped by subject</p>
    </div>

    {/* ITEM 2 */}
    <div className="flex flex-col">
      <span className="text-pink-600 text-[20px] font-semibold  mb-3">Short courses</span>
      <p className="text-[15px]">Learn new skills with a flexible online course</p>
    </div>

    {/* ITEM 3 */}
    <div className="flex flex-col">
      <span className="text-pink-600 text-[20px] font-semibold  mb-3">ExpertTracks</span>
      <p className="text-[15px]">Upskill with a series of specialist courses</p>
    </div>

    {/* ITEM 4 */}
    <div className="flex flex-col">
      <span className="text-pink-600 text-[20px] font-semibold  mb-3">Microcredentials</span>
      <p className="text-[15px]">Earn professional or academic accreditation</p>
    </div>

    {/* ITEM 5 */}
    <div className="flex flex-col">
      <span className="text-pink-600 text-[20px] font-semibold  mb-3">Online degrees</span>
      <p className="text-[15px]">Study flexibly online as you build to a degree</p>
    </div>

  </div>

  

  <div className="flex gap-18">

{/* first */}
  <div className=" w-40 md:my-10 space-y-10 mx-3 ">
  <p className="text-[17px] hover:underline cursor-pointer font-medium">Discover our range of  courses</p>
  <p className="hover:underline cursor-pointer">Online Courses</p>
    <p className="hover:underline cursor-pointer">Online Certifications</p>
      <p className="hover:underline cursor-pointer">Microcredentials</p>
        <p className="hover:underline cursor-pointer">Online Bootcamps</p>
          <p className="hover:underline cursor-pointer">Online Degrees</p>
            <p className="hover:underline cursor-pointer">Online Master's Degrees</p>
              <p className="hover:underline cursor-pointer">Online Bachelor's Degrees</p>
                <p className="hover:underline cursor-pointer">Online Postgraduate Certificates</p>
</div>
{/* 2nd */}
<br/>

  <div className=" w-40 md:my-10 space-y-10  -ml-10 ">
  <p className="text-[17px] hover:underline cursor-pointer font-medium">Course Subjects</p>
  <p className="hover:underline cursor-pointer">Business and Managment</p>
    <p className="hover:underline cursor-pointer">Healthcare and Medecine</p>
      <p className="hover:underline cursor-pointer">Teaching</p>
        <p className="hover:underline cursor-pointer">Psychology and Mental Health</p>
          <p className="hover:underline cursor-pointer">IT and Computer Science</p>
            <p className="hover:underline cursor-pointer">Language</p>
              <p className="hover:underline cursor-pointer">Creative Arts & Media</p>
                <p className="hover:underline cursor-pointer">Science, Engineering & Maths</p>
</div>
<br/>
 <div className=" w-40 md:my-10 space-y-10  ">
  <p className="text-[17px] hover:underline cursor-pointer font-medium">Learn a new skill</p>
  <p className="hover:underline cursor-pointer">Digital Marketing</p>
    <p className="hover:underline cursor-pointer">Data Analytics</p>
      <p className="hover:underline cursor-pointer">Artificial Intelligence (AI)</p>
        <p className="hover:underline cursor-pointer">Data Science</p>
          <p className="hover:underline cursor-pointer">Human REsources (HR)</p>
            <p className="hover:underline cursor-pointer">Cyber Security</p>
              <p className="hover:underline cursor-pointer">Project Managment</p>
                <p className="hover:underline cursor-pointer">Coding & Programming</p>
</div>
<br/>



 <div className=" w-40 md:my-10 space-y-10  ">
  <p className="text-[17px] hover:underline cursor-pointer font-medium">Explore our online degrees</p>
  <p className="hover:underline cursor-pointer">MBA</p>
      <p className="hover:underline cursor-pointer">Microcredentials</p>
        <p className="hover:underline cursor-pointer">Online Bootcamps</p>
          <p className="hover:underline cursor-pointer">Online Degrees</p>
            <p className="hover:underline cursor-pointer">Online Master's Degrees</p>
              <p className="hover:underline cursor-pointer">Online Bachelor's Degrees</p>
                <p className="hover:underline cursor-pointer">Online Postgraduate Certificates</p>
</div>
<br/>


 <div className=" w-40 md:my-10 space-y-10 ml-9 ">
  <p className="text-[17px] hover:underline cursor-pointer font-medium">Discover our range of  courses</p>
  <p className="hover:underline cursor-pointer">Online Courses</p>
    <p className="hover:underline cursor-pointer">Online Certifications</p>
      <p className="hover:underline cursor-pointer">Microcredentials</p>
        <p className="hover:underline cursor-pointer">Online Bootcamps</p>
          <p className="hover:underline cursor-pointer">Online Degrees</p>
            <p className="hover:underline cursor-pointer">Online Master's Degrees</p>
              <p className="hover:underline cursor-pointer">Online Bachelor's Degrees</p>
                <p className="hover:underline cursor-pointer">Online Postgraduate Certificates</p>
</div>




</div>
</div>
</div>







      

</>
       
    );
}