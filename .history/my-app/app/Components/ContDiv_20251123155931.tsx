import Image from "next/image";

export default function ContainerDiv({ image, title :str description, buttonText }) {
  return (
    <div className='md:my-10 bg-white h-102 w-70 rounded-3xl shadow-md shadow-gray-500 overflow-hidden hover:bg-gray-100 flex flex-col justify-between'>
      
      {/* Image + overlay */}
      <div className='relative inline-block w-full'>
        <Image 
          src={image} 
          alt='image' 
          width={500} 
          height={500} 
          className='w-full h-30 object-cover' 
        />
        <div className='absolute inset-0 mix-blend-multiple bg-gradient-to-b from-pink-600/80 to-transparent'></div>
      </div>

      {/* Text content */}
      <div className='mx-4 mt-6 flex-1'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-gray-600 text-[14px] mt-4'>{description}</p>
      </div>

      {/* Button always at bottom */}
      <div className='mx-4 mb-4 w-30'>
        <button className='bg-gray-200 p-2 rounded-xl font-medium w-full'>{buttonText}</button>
      </div>

    </div>
  );
}
