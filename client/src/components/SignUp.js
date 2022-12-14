import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { BsBuilding } from "react-icons/bs";

function SignUp({updateUser}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    let navigate = useNavigate()
  
    function handleSubmit(e){
      e.preventDefault()
      fetch('/signup', {
        method: "POST",
        headers:{"Content-Type": "Application/json"},
        body:JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
      }),
      
      })
      .then(res => {
        if(res.ok) {
          res.json().then(user => {
            updateUser({id: user.id, username: user.username})
            navigate('/')
          })

          console.log(res)
        }
      })
    }
    return (

        
        <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-gray-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="https://media.blogto.com/articles/20200311-25york.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" alt="" class="w-full h-full object-cover"/>
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
      <div class="flex"> <BsBuilding size={60}/>
        <h1 class="flex text-3xl font-bold mt-7 ml-4"> Suite Management</h1>
        </div>
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Sign Up</h1>
  
        <form onSubmit={handleSubmit} class="mt-6" action="#" >
        <div class="mt-4">
            <label class="block text-gray-700">Full Name</label>
            <input 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Enter Full Name" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500focus:bg-white focus:outline-none" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter Email Address" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Enter Password" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}     />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Confirm Password</label>
            <input 
            type="password"
            name="password" 
            id="password_confirmation" 
            placeholder="Enter Password" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
  
          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" class="w-full block bg-blue-700 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Sign Up</button>
        </form>
  
        <hr class="my-6 border-gray-300 w-full"/>
  
     
  
        <p class="mt-8">
          Already have an account? {' '}
          <a href="/login" class="text-blue-500 hover:text-blue-700 font-semibold">
            Back to login
          </a>
        </p>
  
        <p class="text-sm text-gray-500 mt-12">&copy; 2022 Joey Faris - All Rights Reserved.</p>
      </div>

    </div>
  
  </section>
    )
}

export default SignUp