import Nav from './Components/Nav'
import MidPAges from './Components/MidP'
import MidPages2 from './Components/MidP2'



export default function Home(){

  return(<div className='  '>  
   <Nav/>
   <div className='bg-gradient-to-r from-purple-100 via-pink-200 to-orange-100 min-h-screen w-full'>
   <MidPAges/>
   <div >
   <MidPages2/>
   </div>
   
    </div>
  </div>)
}