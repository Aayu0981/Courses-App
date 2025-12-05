import { MdStarRate } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";

500
export default function MidPAges(){
    return(<div>
        
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-70  relative  w-full "></div>
      <div className="absolute top-60 left-30 font-bold">

        <div className="text-3xl">
        <span className="text-pink-600">Accelerate</span><br/>
        <span>your learning</span>
        </div>

        <br/><br/>
       <span className="text-2xl text-blue-600 "> 4.57 average rating   </span>

       <div className="m-4">

        <span  className="text-pink-600 m">
           <div className="flex pr-6 "> <MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /><IoMdStarHalf /></div>  </span>
        <span className="">1,97,142 learner reviews</span>
        </div>
       

        <span>Powered by yotpo</span>

        

      </div>



    </div>)
}