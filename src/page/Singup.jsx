

import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { increment,dicrement,remove } from '../Redux/profileSlice'
import { Link } from 'react-router-dom'
function Singup() {
  const navigateTo=useNavigate()

  const dispatch=useDispatch()
  console.log(dispatch)

  const useslector=useSelector((state)=>state.profile.value)
console.log(useslector)
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
   const[profile,setprofile]=useState("")
   const[role,setRole]=useState("")
   const [loading, setLoading] = useState(false);
   const Navigateto=useNavigate()
   
   const changePhotoHandler = (e) => {
      console.log(e);
      const file = e.target.files[0];
     setprofile(file)
    };
  
  
   const fetchdata=async(e)=>{
   e.preventDefault();
   const formData = new FormData();
   formData.append("username", username);
   formData.append("email", email);
   formData.append("password", password);
   formData.append("photo", profile);
  formData.append("role",role)
  
  try {
    setLoading(true)
      const { data } = await axios.post(
          "https://blog-app-gbau.onrender.com/app/auth/register",
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            
          })
  console.log(data)
  if(data){
  alert("done")

  navigateTo("/")
  setLoading(false)
  
  }
      } catch (error) {
      console.log(error)
  }
  
  
   }
  


  return (
    <div>
           <div className='w-full h-screen flex justify-center items-center mt-10'>
          
          <form onSubmit={fetchdata} className='grid  grid-flow-row justify-center items-center shadow-lg w-[400px] h-[500px]'>
      <div className='flex justify-center'>
        <h1 className='text-2xl text-purple-700 font-semibold'>Register</h1>
      </div>
      <label htmlFor="">Username</label>
       <input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder='username' className='border border-blue-300  ' />
       <label htmlFor="">Email</label>
      <input type="email" value={email}   onChange={(e) => setemail(e.target.value)} placeholder='email'className='border border-blue-300' />
      <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md"
                  >
                    <option value="">Select Role</option>
                    <option value="user">user</option>
                  </select>
      <label htmlFor="">Password</label>
      <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)} placeholder='password'className='border border-blue-300'  />
      
      <input type="file"   onChange={changePhotoHandler}/>
      
                     {loading ? (
                              <button>
                                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                  Please wait
                              </button>
                          ) : (
                            <button type='submit' className='bg-blue-500 rounded text-yellow-50'>submit</button>
                          )
                      }
       <p className="text-center mb-4">
              Already registered?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login Now
              </Link>
            </p>
          </form>
       
           </div>
    </div>
  )
}

export default Singup