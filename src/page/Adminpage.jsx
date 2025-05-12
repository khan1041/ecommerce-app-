
import React from 'react'

function Adminpage() {

    const admin=[
        {
       name:"skkhan",
       vaner:"https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg",
       img:"https://www.shutterstock.com/image-photo/portrait-mid-adult-business-man-260nw-2229469615.jpg",
       email:"skkhan@gamil.com",
       role:"admin"
         },
         {
             name:"rondal",
             vaner:"https://media.gettyimages.com/id/1357444217/vector/set-of-the-ribbons.jpg?s=612x612&w=gi&k=20&c=cxWHU_oR5bYxG7Uj7tQNG-qQ7tSguN898CR2hE2XyPg=",
             img:"https://img.freepik.com/premium-photo/accountant-portrait-happy-man-office-with-finance-career-professional-experience-confidence-asian-consultant-financial-advisor-with-pride-investment-advice-business-workplace_590464-467493.jpg?semt=ais_hybrid&w=740",
             email:"ronald1233@gamil.com",
             role:"admin"
               },
          {
                name:"farid",
                 vaner:"https://static.vecteezy.com/system/resources/thumbnails/049/626/932/small/dandelion-seeds-close-up-colorful-floral-banner-photo.jpg",
                 img:"https://static.vecteezy.com/system/resources/thumbnails/035/752/590/small/ai-generated-handsome-businessman-happy-and-smiling-young-man-in-smart-suit-posing-in-office-with-suit-ai-generated-free-photo.jpg",
                 email:"farid777@gamil.com",
                 role:"admin"
                   },
         
     ]
     
     

  return (
    <div>
      <div className='mt-5 w-full flex justify-center items-center'>
        <h1 className='mt-14 text-2xl font-sans text-gray-700'>APP ADMIN</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center my-20">
      {admin.map((creator) => (
        <div
          key={creator._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full m-2"
        >
          <div className=" ">
            <img
              src={creator.vaner}
              alt="avatar"
              className="w-full h-32 object-cover"
            />
            <div className="w-full h-14 ">
            <img
                src={creator.img}
                alt=""
                className="w-16 h-16 rounded-full mx-auto border-4 border-gray-700 mb-5"
              />
            </div>
          </div>
          <div className="px-4 py-6 ">
            <h2 className="text-center text-xl font-semibold text-gray-800">
              {creator.name}
            </h2>
            <p className="text-center text-gray-600 ">{creator.email}</p>
            <div className='w-full flex justify-center'>
              <h1>Role:{creator.role}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Adminpage
