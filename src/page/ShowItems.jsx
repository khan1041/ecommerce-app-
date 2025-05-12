

import React, { useEffect, useState } from 'react'
import { productItems } from '../Items'
import { Link, useNavigate } from 'react-router-dom'
import BestUser from './BestUser'
import Newlunch from './Newlunch'
import Adminpage from './Adminpage'
import { useDispatch, useSelector } from 'react-redux'
import Contect from './Contect'
import { addtoCart } from '../Redux/CartSlice'
function ShowItems({items,cart,setCart}) {
  console.log(cart)
  const navigateTo=useNavigate()

 const dispatch=useDispatch()
  const usesleacor=useSelector((state)=>state.profile.value)
  console.log(usesleacor)
  

  const cheak=useSelector((item)=>item)
 console.log(cheak)



  const navigate=()=>{
  
    navigateTo("/login")


  }


    const [data,setData]=useState(productItems)
    console.log(data)
   useEffect(()=>{


 },[])

  return (
    <div>
    <div className='flex justify-center flex-wrap gap-3.5 mt-20 ml-5 '>
        {items.length >0?(items.map((item)=>{
            return(
                <div className='shadow-lg h-60 w-67 bg-white '>
                 <div className='w-full h-full'>
                  <div className='w-full h-40 flex justify-center items-center'>
                 <img src={item.img} alt="" className='w-40 h-44 flex justify-center items-center mt-6 gap-6' />

                  </div>
                  <div className='flex gap-7 justify-center mt-8'>
                  <Link to={usesleacor? `/details/${item.id}`:`/login`} className='w-20 bg-gray-300 font-extrabold flex justify-center rounded'>
                    Details
                    </Link>
                <button className='bg-blue-400 rounded font-extrabold' onClick={usesleacor?()=>dispatch(addtoCart(item)):navigate}>ADD TO CART</button>
                  </div>
                 </div>
               
                </div>
             
            )
     })):(
      <div>
       <h1>Search No Result</h1> 
 <h1>We're sorry. We cannot find any matches for your search term. </h1>

      </div>
     )}
      </div>
   <div className='mt-4'>
         {location.pathname==="/"  && <BestUser/>} 

        
       {location.pathname==="/" && <Adminpage/>}

{location.pathname==="/"&& <Contect/>}
      </div>  
      

    </div>
  )
}

export default ShowItems











