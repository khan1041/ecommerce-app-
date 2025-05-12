

import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { productItems } from '../Items'
import ProductBrand from './ProductBrand'
import { increment,dicrement,remove } from '../Redux/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BsCartCheck } from "react-icons/bs";

function Navbar({setdata,cart}) {
const dispatch=useDispatch()
 const navigete= useNavigate()
 const togole=useSelector((state)=>state.profile.value)
 console.log(togole)
 const cartlength=useSelector((state)=>state.item.cart)
 console.log(cartlength)
 const location=useLocation()
const navigateTo=useNavigate()
 function Logout(){
  dispatch(remove())
  navigateTo('/login')
}

const [searchTrem,setsearchTrem]=useState("")
  const filtercategory=(category)=>{
  
    const element=productItems.filter((item)=>item.category===category)
    console.log(element)
    setdata(element)

  }

const handelsubmit =(e) =>{

e.preventDefault()
navigete(`/search/${searchTrem}`)
setsearchTrem("")

 }



  return (
    <div className=' w-full h-20 fixed left-0 top-0   '>
     <nav className='w-full h-20  flex bg-black'>
     
        <div className='w-[10%] h-full  sm:flex justify-center items-center '>
          <Link to={`/`}>
            <h1 className='text-blue-400 sm:text-2xl ml-5  font-semibold'>LOGO..</h1>

          </Link>
      </div>
    
     
     <div className='flex w-full h-full gap-2  justify-center items-center'>

     <div className='sm:block hidden'>
      <form onSubmit={handelsubmit}>
         <input value={searchTrem} type="text" 
      onChange={(e)=>setsearchTrem(e.target.value)}
      placeholder='shearch....'  className='bg-white w-64 rounded'/>
      </form>
     
     </div>
     <div className='flex sm:gap-4 gap-3 text-amber-50'>
      <Link to={`/`}>
      <button>Home</button>
      </Link>
      <Link to={'/about'}>
      <button >About</button>
      </Link>
     
   {togole?<Link to={`/cart`}><button className='flex text-shadow-amber-50 text-[17px]'><BsCartCheck className='text-2xl'/><span className='text-red-500'>{cartlength.length}</span></button></Link>:""}
   
   {togole?<button onClick={Logout}>Logout</button>: <Link to={`/login`}><button>Login</button></Link>}

     </div>
     </div>

     </nav>
<div className='w-full  flex justify-center  sm:hidden  bg-black'>
      <div>
       <form onSubmit={handelsubmit}>
         <input value={searchTrem} type="text" 
      onChange={(e)=>setsearchTrem(e.target.value)}
      placeholder='shearch....'  className='bg-white w-44 sm:64 rounded mb-5'/>
      </form> 
      </div>
 
      </div>

     <div className='bg-gray-400 '>
  { location.pathname==="/" && <nav className='w-full h-11 bg-gray  flex justify-center items-center'>
   <ul className='flex sm:gap-4 gap-3 sm:text-[19px]  font-semibold '>
    <li className='bg-yellow-300 rounded text-gray-500 hover:text-white hover:bg-amber-400 ' onClick={()=>setdata(productItems)}>Nofilter</li>
    <li className='bg-yellow-300 rounded text-gray-500 hover:text-white hover:bg-amber-400 ' onClick={()=>filtercategory("mobile")}>Mobile</li>
    <li className='bg-yellow-300 rounded text-gray-500 hover:text-white hover:bg-amber-400  ' onClick={()=>filtercategory("laptop")}> Laptop</li>
    <li className='bg-yellow-300 rounded text-gray-500 hover:text-white hover:bg-amber-400 ' onClick={()=>filtercategory("tablet")}>Tablet</li>
   </ul>
    </nav>}
     </div>

      </div>
  )
}

export default Navbar