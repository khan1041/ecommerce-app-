

import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productItems } from '../Items'
function ProductDetails() {
  const {id} = useParams()
  const [details,setdetails]=useState({})
  const [relatedProduct,setreletedProduct]=useState([])

 useEffect(()=>{

    const itemsfilter=productItems.filter((item)=>item.id == id)
    setdetails(itemsfilter[0])
    console.log(itemsfilter)

    const releteditems=productItems.filter((item)=>item.title===details.title)
    setreletedProduct(releteditems)

 },[id,details.title])

  return (
    <div>
      <div className='w-full h-full flex gap-2 justify-center mt-20'>
   
      <div className='w-96 h-96 mt-4 shadow-lg'>
   <img src={details.img} alt=""  className='w-full h-full'/>
      </div>
      <div className='w-96 h-96 mt-4 flex justify-center items-center'>
        <div>

          <div className='w-full h-full flex justify-center'>
           <h1 className='text-2xl font-serif'>{details.title}</h1>
          </div>

         <div className='flex justify-center items-center' >
         <h1><span className='text-green-500 text-2xl font-bold'>$</span>
         
         <span className='text-2xl font-mono'>{details.price}</span></h1>
         </div>
        <div className='flex justify-center w-full h-full'>
                  <h1 className='text-[17px] font-extralight text-gray-500 '>{details.discription}</h1>

        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ProductDetails
