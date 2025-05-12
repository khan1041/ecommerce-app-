
import React from 'react'

function ProductBrand() {
const items=[
    {
  img:"https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png"
    },
    {
img:"https://www.shutterstock.com/image-photo/metallic-3d-apple-logo-260nw-2500038617.jpg"
    },
    {
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9srQZav1aRi3xIQKO-IYY3uixrxPMNgOMRg&s"
    },
    {
img:"https://static.vecteezy.com/system/resources/thumbnails/030/963/958/original/walton-logo-animation-show-free-video.jpg"
    },
    {
img:"https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png"
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/020/336/425/non_2x/oppo-logo-oppo-icon-free-free-vector.jpg"
    },
    {
img:"https://logowik.com/content/uploads/images/714_lenovologo_pos_red.jpg"
    },
]

  return (
    <div className=''>
      <div className=' flex  justify-center gap-3 flex-wrap sm:mt-40 mt-44'>
        {items.map((item)=>{

        return(
            <div className='shadow-lg w-14 h-14 sm:w-20 sm:h-20   rounded-full border border-amber-400 flex justify-center items-center'>
                <div className=''>
         <img src={item.img} alt="" className=' w-14 h-14 sm:w-18 sm:h-18 rounded-full'/>

                </div>
            </div>
        )

        })}
      </div>
    </div>
  )
}

export default ProductBrand

