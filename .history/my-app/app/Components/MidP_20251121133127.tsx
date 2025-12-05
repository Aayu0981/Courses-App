import { MdStarRate } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";

500
export default function MidPAges(){
    return(<div className="relative w-full">

        {/* left part */}
        <div  className=" absolute top-60 left-50">
        
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-70  relative  w-full "></div>
      <div className=" font-bold">

        <div className="text-4xl">
        <span className="text-pink-600">Accelerate</span><br/>
        <span>your learning</span>
        </div>

        <br/><br/>
       <span className="text-3xl text-blue-600 "> 4.57 average rating   </span>

       <div className=" flex my-3 ">

        <span  className="text-pink-600 m">
           <div className="flex pr-6 "> <MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /><IoMdStarHalf /></div>  </span>
        <span className="">1,97,142 learner reviews</span>
        </div>
       

        <span className="flex gap-2 ">Powered by <p className="text-blue-600"> yotpo.</p></span>

      </div>

      {/* right part */}
      <div className="relative top-60 right-20 ">
        <div className="absolute ">
            <p>Take you career further. Discover 1400+ courses  <br/>
                from top universities and master in-demand skills <br/>
                across marketing, tech, business, cybersecurity and<br/>
                more.
            </p>
        </div>
      </div>
      </div>



    </div>)
}