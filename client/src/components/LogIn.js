import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'


function LogIn({updateUser}) {

    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const userObj = {
            user: {
            username: username,
            email: email,
            password: password
            }
        }
        fetch('/login', {
          method: "POST",
          headers:{"Content-Type": "Application/json"},
          body:JSON.stringify(userObj)
        })
        .then(res => {
            if(res.ok) {
              res.json().then(user => {
                updateUser({id: user.id, username: user.username})
                navigate(`/`)
                // will add redirect
              })
            } else {
              res.json().then(json => setErrors(Object.entries(json.errors)))
            }
          })
        
   
}
    return (

        
        <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-gray-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="./components/commercial-building.jpg" alt="" class="w-full h-full object-cover"/>
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
        <h1 class="text-xl font-bold">Tailwind Login</h1>
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
  
        <form onSubmit={handleSubmit}class="mt-6" action="#" method="POST">
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <div>
            <label class="block text-gray-700">Full Name</label>
            <input 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Enter Full Name" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter Email Address" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input 
            type="password" 
            name="" 
            id="email" 
            placeholder="Enter Password" 
            minlength="6" 
            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" class="w-full block bg-blue-700 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>
  
        <hr class="my-6 border-gray-300 w-full"/>
  
        <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div class="flex items-center justify-center">
           <span class="ml-4">
              Log in
              with
              Google
              </span>
          </div>
        </button>
  
        <p class="mt-8">
          Need an account? {' '}
          <a href="/signup" class="text-blue-500 hover:text-blue-700 font-semibold">
            Create an account
          </a>
        </p>
  
        <p class="text-sm text-gray-500 mt-12">&copy; 2022 Joey Faris - All Rights Reserved.</p>
      </div>

    </div>
  
  </section>
    )
}

export default LogIn