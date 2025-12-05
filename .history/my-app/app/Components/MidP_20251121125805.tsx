import { MdStarRate } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";


export default function MidPAges(){
    return(<div>
        
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-70 "></div>
      <div>
        <span>Accelerate</span>
        <span>your learning</span>

        <br/>
       <span> 4.57 average rating   </span>

       <div>
        <span  className="text-pink-600"><MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /><IoMdStarHalf /> </span>
        <span>1,97,142 learner reviews</span>
        </div>

        <span>Powered by yotpo</span>

        

      </div>



    </div>)
}