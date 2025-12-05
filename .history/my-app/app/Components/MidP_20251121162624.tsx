// components/HeroSection.js
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; 
import ColorBox from './ColorDiv';

export default function HeroSection() {
  return (<>
  
    <section className="bg-gradient-to-r from-purple-100 via-pink-200 to-orange-100 py-16 md:py-34 mt-10 p-50 h">
      <div className="container mx-auto px-4">
        
      
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* (Text and Rating) */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 leading-tight">
              Accelerate<br/>
             <h1 className='text-blue-600 text-4xl md:text-5xl font-bold'> your learning</h1>
            </h1>
            
            
            <div className="mt-6">
              <p className="text-4xl font-semibold ">4.57 average rating</p>
              
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
          <div className="pt-4 md:pt-0">
            <p className="text-lg text-gray-700 leading-relaxed">
              Take your career further. Discover 1400+ courses 
              from top universities and master in-demand skills 
              across marketing, tech, business, cybersecurity and 
              more.
            </p>
            
            {/* buttons*/}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300">
                Get Unlimited learning
              </button>
              <button className="bg-white border border-gray-400 hover:text-blue-700 hover:border-blue-700 text-futurelearn-purple font-semibold py-3 px-6 rounded-md transition duration-300">
                Explore courses
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>

    <div>
   <
    </div>

    </>
  );
}