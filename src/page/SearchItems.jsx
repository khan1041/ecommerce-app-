
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productItems } from '../Items'
import ShowItems from './ShowItems'

function SearchItems({cart,setCart}) {
  const {term}=useParams()
  const location=useLocation()
  console.log(term)

  const[filterData,setfilterData]=useState([])

  useEffect(()=>{
    const filterdata=()=>{
const data=productItems.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
console.log(data)
  setfilterData(data)
    }
    filterdata()

  },[term])

  

  return (
    <div>
      <div className='mt-40'>
     <ShowItems  cart={cart} setCart={setCart} items={filterData}/>

      </div>
    </div>
      
     
  )
}

export default SearchItems
