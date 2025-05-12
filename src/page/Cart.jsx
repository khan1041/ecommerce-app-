
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../Redux/CartSlice'
import { TaskAbortError } from '@reduxjs/toolkit'
import { removeitem } from '../Redux/CartSlice'
function Cart() {
  const cart = useSelector((state) => state.item.cart)
  const dispatch = useDispatch()
  console.log(cart)
  const alertfunction = () => {
    alert("baying done")
  }



  return (
    <div className=''>
      <div className='w-full h-full flex gap-4 justify-center mt-30'>
        <div className='w-80 h-full'>
          {cart.length > 0 ? (cart.map((i) => {
            return (
              <div className='w-72 h-72 shadow-md mt-3 '>
                <div>
                  <div className='flex justify-center'>
                    <img src={i.img} alt="" className='w-36 h-36' />
                  </div>
                  <div>
                    <h1>{i.title}</h1>
                  </div>
                  <div>
                    <h1 className='font-extralight'>{i.discription}</h1>
                    <div className='flex gap-5 justify-center'>
                      <button className='bg-green-600 rounded font-mono'>${i.price}</button>
                      <button onClick={alertfunction} className='bg-yellow-400 rounded font-semibold'>Bay now</button>
                      <button onClick={() => dispatch(removeitem(i.id))} className='bg-red-700 rounded font-mono'>DELETE</button>
                    </div>

                  </div>
                  <div>

                  </div>
                </div>
              </div>
            )
          })) : (
            <div>
              <h1>There is no data here</h1>
            </div>
          )}
          <div>
          </div>
          {cart.length != 0 && (
            <div className='flex gap-10 justify-center mt-1.5'>
              <Link to={`/`}> <button className='bg-amber-700 rounded'>Cheak Out</button>   </Link>
            </div>

          )}

        </div>
      </div>
    </div>
  )
}

export default Cart
