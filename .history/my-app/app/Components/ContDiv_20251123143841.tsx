import Image from "next/image";


export default function ContainerDiv(){
    return(
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
    );
}