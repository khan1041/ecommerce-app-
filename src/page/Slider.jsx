

import React, { useState } from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.avif"
function Slider() {
  const [slider,setSlider]=useState(2)
  const data=[img1,img2,img3]

  const incressplus=()=>{

    setSlider(slider===data.length-1?0:slider+1)

  }
  const dicrement=()=>{
    setSlider(slider===0?data.length-1:slider-1)
  }




  return (
    <div className='w-full'>
      <div>
    <div>
   <div className='w-full h-[488px]  flex justify-center'>
    <img src={data[slider]} alt="" className='w-full h-full  ' />
   </div>
 
 {/* <div className='  w-full h-[270px] top-0 left-0 mt-20  '>
  <div className='flex justify-center gap-96 items-center w-full h-full'>
     <button onClick={dicrement}>-----</button>
  <button onClick={incressplus} className='text-3xl '>+</button>
  </div>
 
 </div> */}

    </div>

      </div>
    </div>
  )
}

export default Slider
