

import React, { useState } from 'react'

function BestUser() {
    //top 5 vest user
    const user=[
   {
  name:"rokcyx",
  email:"rolcy@gamil.com",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHFQRyrmAnmak3EY_CepkNA3M0PcZwieZzQ&s",
  discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis.amet consectetur adipisicing elit. Debitis"
    },
    {
        name:"naimel",
        email:"naimel@gamil.com",
        img:"https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg",
        discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis.amet consectetur adipisicing elit. Debitis"
          },
     {
           name:"gitoo ronald",
            email:"gitoor@gamil.com",
            img:"https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4OTA1NjQyNjg0MDAwMDA3/how-to-be-a-gentleman-a-begginers-guide.png",
            discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis.amet consectetur adipisicing elit. Debitis"
              },
     {
                name:"ogib sen",
                email:"ogib123@gamil.com",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iaf7fkHzHMhWzbrVb4BOpw7btA1nipoTiw&s",
                discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis.amet consectetur adipisicing elit. Debitis"
      },     
]


  return (
    <div className='w-full h-full' >

       <div className=' flex justify-center w-full h-28'>
        <h1 className='mt-10 font-extrabold'>OUR TOP USER</h1>
       </div>
       <div className='flex flex-wrap gap-7 justify-center ml-4  ' >

        {user.map((item)=>{

      return(
        <div className='w-66 h-full shadow-md bg-yellow-50 '>
          <div>
       <div className='flex justify-center ' >
      <img src={item.img} alt="" className='w-44 h-48 rounded mt-4' />
       </div>

      <div>
<h1 className='font-serif'>{item.email}</h1>
        <div className='mt-2'>
      <h1 className='font-extralight'>discription:{item.discription}...</h1>
        </div>
      </div>
          </div>
      
        </div>
      )

        })}
    </div>
    </div>
  )
}

export default BestUser
