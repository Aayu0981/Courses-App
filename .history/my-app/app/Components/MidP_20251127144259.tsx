// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsHeartPulse } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdTouchApp } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineEngineering } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";








import ColorBox from './ColorDiv';
import { RxDividerVertical } from 'react-icons/rx';

export default function HeroSection() {
  return (<>

    <section >
      <div className="container mx-auto px-4 my-auto ">


        <div className="grid md:grid-cols-2 gap-2 items-start">

          {/* (Text and Rating) */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 leading-tight my-20">
              Accelerate<br />
              <p className='text-blue-600 text-4xl md:text-5xl font-bold mb-0'> your learning</p>
            </h1>


            <div className=' -mt-15'>
              <p className="text-4xl font-semibold  ">4.57 average rating</p>

              {/* star */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < 4.5 ? 'text-pink-600' : 'text-gray-300'}`}

                  />
                ))}
                <span className="ml-2 text-futurelearn-purple text-sm">1,97,142 learner reviews</span>
              </div>

              <p className="text-xs mt-1 text-gray-500">Powered by **yotpo**.</p>
            </div>
          </div>

          {/* right coolum */}
          <div className="pt-4 md:pt-0 my-50">
            <p className="text-lg text-gray-700 leading-relaxed">
              Take your career further. Discover 1400+ courses
              from top universities and master in-demand skills
              across marketing, tech, business, cybersecurity and
              more.
            </p>

            {/* buttons*/}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">

              <Link href="https://www.futurelearn.com/unlimited">
              <button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300">
                Get Unlimited learning
              </button>
              </Link>
              <button className="bg-white border border-gray-400 hover:text-blue-700 hover:border-blue-700 text-futurelearn-purple font-semibold py-3 px-6 rounded-md transition duration-300">
                Explore courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Paage */}

      <div>

        <div className=' bg-white rounded-[50px]  shadow-md shadow-gray-500  h-screen w-full -mt-10 '>
           
          <div className='text-center py-16 md:py34'>
            <span className='text-2xl font-semibold m-5' >Explore top subjects</span>
          </div>



          <div className='flex  gap-15 font-16px m-5 ml-8 -mt-2 cursor-pointer   '>
            <div className='flex  items-center gap-2  relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300  '>
              <PiBookOpenTextLight className='text-pink-600 h-8 w-8 ' />
              <p>Business & Managment</p>
            </div>


            <div className='flex  items-center gap-2 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300'>
              <BsHeartPulse className='text-pink-600 h-8 w-8 ' />
              <p>Healthcare & Medicine</p>
            </div>


            <div className='flex  items-center gap-2  relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300'>
              <PiGraduationCapLight className='text-pink-600 h-7 w-7 ' />
              <p>Teaching</p>
            </div>



            <div className='flex  items-center gap-2  relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300'>
              <MdTouchApp className='text-pink-600 h-7 w-7 ' />
              <p>Tech & IT</p>
            </div>



            <div className='flex  items-center gap-2  relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300'>
              <RiMentalHealthLine className='text-pink-600 h-7 w-7 ' />
              <p>Psychology & Mental Health</p>
            </div>



            <div className='flex  items-center gap-2 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-pink-600 after:to-red-300 hover:after:w-full after:transition-all after:duration-300 '>
              <MdOutlineEngineering className='text-pink-600 h-6 w-7  ' />
              <p>Science, Engineering & Math</p>
            </div>
          </div>
          {/* 
         writing part */}

          <div className='flex  justify-between md:py-10 -mt-5'>

            <div className=' h-120 w-130  px-10 py-10 -mt-10'>
              <h1 className='text-2xl font-bold m-8 ml-0'>Business & Management</h1>
              <p className='font-medium my-10'> Boss it in business with our specialist upscaling courses industry
                Certifications and high flying degrees.
              </p>
              <p className='font-medium'>
                No matter what your goals are leading expert from the likes of
                Accenture AWS Deakin university will guide you to achieve them.

                From data analytics and digital marketing Start learning from the best.

              </p>
              <div className='flex items-center -ml-5'>
                <PiLineVerticalLight className='text-pink-600 text-[150px]' />

               <p className="font-medium relative">
            <RiDoubleQuotesL className="absolute -left-5 top-0 text-xl text-gray-500" />

              The course was beautifully conceptualised, and well presented. The
              videos were lucid, clear, articulate and informative.

             <RiDoubleQuotesR className="absolute -right-5 bottom-0 text-xl  text-gray-500" />
                 </p>


              </div>
              <button className='trasition cursor-pointer bg-pink-600 p-2 text-white font-semibold rounded-xl hover:bg-blue-600 '>Explore Courses</button>


            </div>
            {/* first div */}

            <div className='flex gap-20 mr-10 -pb-10 mt-20'>
              <div className=' h-100 w-70 rounded-3xl shadow-md shadow-gray-500 overflow-hidden hover:bg-gray-100'>
                <div className='relative inline-block w-full'>
                <Image src="/image1.webp" alt='image' width={500} height={500} className='w-full h-30 object-cover  ' />
                <div className='absolute inset-0  mix-blend-multiple  bg-gradient-to-b from-pink-600/80 to-transparent'></div>
                 </div>
                <h2 className='mx-4 my-4 font-semibold'>Finace, Investment and Banking(Online),BSc(Hons)</h2>
                <p className='mx-4 text-gray-600 font-[14px]'>Step into the world of finance ready
                  with practical skills, industry insights,
                  and the recognition of a top-ranked
                  university behind you.
                </p>
                <button className='mx-4 bg-gray-200 p-1 rounded-xl font-medium mt-12 '>Degree Program</button>

              </div>

              {/* Second div */}
              <div className=' h-100 w-70 rounded-3xl shadow-md shadow-gray-500 overflow-hidden hover:bg-gray-100'>

<div className='relative inline-block w-full'>
                <Image src="/image2.jpg" alt='image' width={500} height={500} className='w-full h-30 object-cover  ' />
                <div className='absolute inset-0 bg-gradient-to-b from-pink-600/80 to-transparent mix-blend-multiple '></div>
                 </div>
                <h2 className='mx-4 my-4 font-semibold'>Finace, Investment and Banking(Online),BSc(Hons)</h2>
                <p className='mx-4 text-gray-600 font-[14px]'>Step into the world of finance ready
                  with practical skills, industry insights,
                  and the recognition of a top-ranked
                  university behind you.
                </p>
                <button className='mx-4 bg-gray-200 p-1 rounded-xl font-medium mt-12'>Degree Program</button>

              </div>
            </div>
          </div>


        </div>
        </div>
    </section>

   
  

  </>
  );
}

