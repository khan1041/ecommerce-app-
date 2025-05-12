
import React from 'react'

function Contect() {

  return (

    <div>
    <div className='w-full h-full flex justify-center items-center  sm:ml-0'>
        
<div className='w-72 h-72 flex justify-center items-center bg-blue-100'>
   
    <div>
           <div className='flex w-full justify-center'>
<img src="https://media.istockphoto.com/id/826567080/vector/e-mail-icon-simple-vector-illustration-red-color.jpg?s=612x612&w=0&k=20&c=ysxmzarWz_6a2oyi1ue9p6OUBXAw8W1LQPsyorc_5hY=" alt="" className='w-14 h-14' />
 
    </div>
        <div className="w-full flex justify-center font-semibold">
            <h1>CONTEACT..</h1>
        </div>
          <input type="text" placeholder='username...' className='bg-white w-48 mt-3 border border-amber-200 rounded' />
    <br></br>
    <input type="text" placeholder='email...' className='bg-white mt-3 rounded w-48 border border-amber-200'/>
    <br></br>
    <textarea className='mt-3 bg-white rounded border border-amber-200 w-48'>

    </textarea>
  
  <div className='flex justify-center w-ull'>
      <h1 className='bg-green-600 rounded w-28  flex justify-center'>SUBMIT</h1>

  </div>
    </div>
  
</div> 
    </div> 
    </div>
  )
}

export default Contect
