import React, {useState, useEffect} from "react"
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineFile} from 'react-icons/ai'
import {BsCreditCard, BsHeadset, BsBuilding} from 'react-icons/bs'
import { BiWrench, BiLogOut } from 'react-icons/bi'
import {Link} from 'react-router-dom'



export default function SideBar({currentUser, onLogout}) {
    const [open, setOpen] = useState(true)
   
    const menus = [
        {name: "Home", link:'/', icon: AiOutlineHome},
        {name: "Payments and Balances", link:'/paymentsandbalances', icon: BsCreditCard},
        {name: "My Lease", link:'/mylease', icon: AiOutlineFile},
        {name: "Maintenance Requests", link:'/maintenance', icon: BiWrench},
        {name: "Contact Us", link:'/contactpage', icon: BsHeadset},
    ]


    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    return (
        <section className="fixed top-0 flex gap=6">
            <div className={`bg-[#18181b] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
            <div className="py-6 flex justify-end">
                    <HiMenuAlt2 
                    size={26} 
                    className="cursor-pointer" 
                    onClick={() =>setOpen(!open)}
                    />
                    
                </div>
                <div class="ml-2 flex">
                <div class="flex ">{React.createElement(BsBuilding, {size: '35'})}</div>
                        <h3 
                        style={{
                            transitionDelay: `${0 + 2}00ms`,
                        }}
                                className={` text-2xl pt-1 whitespace-pre font-bold duration-500 mt-1 ml-2 ${!open && `opacity-0 translate-x-28 overflow-hidden`}`}>Suite Management</h3>
                                <h2 className={` ${open && 'hidden'}  absolute left-48 bg-white fot-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>Hello</h2>
                                </div>
                <div className="mt-10 flex flex-col gap-6 relative">
                    {menus?.map((menu, i) =>(
                    <Link to={menu?.link} key={i} className=" group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                        <div>{React.createElement(menu?.icon, {size: '20'})}</div>
                        <h2 
                        style={{
                            transitionDelay: `${i + 3}00ms`,
                        }}
                                className={`whitespace-pre duration-500 ${!open && `opacity-0 translate-x-28 overflow-hidden`}`}>{menu?.name}</h2>
                                <h2 className={` ${open && 'hidden'} absolute left-48 bg-white fot-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                    </Link>
                        ))
}

                {currentUser ? 
             <div> 
             <Link to={'/'}  className='flex fixed static items-bottom bottom-7 left-5 justify-center whitespace-pre duration-500'>
                 <div>{React.createElement(BiLogOut, {size: '20'})}</div> 
                <h2 
                 style={{
                     transitionDelay: `${0 + 6}00ms`,
                 }} 
                 onClick={handleLogout} className={`whitespace-pre duration-500 ml-2 mb-1 ${!open && `opacity-0 translate-x-28 overflow-hidden`}`}>Logout</h2>
             </Link>
         </div>
                :  
                <div> 
                    <Link to={'/login'}  className='flex fixed static items-bottom bottom-7 left-5 justify-center whitespace-pre duration-500'>
                        <div>{React.createElement(BiLogOut, {size: '20'})}</div> 
                       <h2 
                        style={{
                            transitionDelay: `${0 + 6}00ms`,
                        }} 
                        className={`whitespace-pre duration-500 ml-2 mb-1 ${!open && `opacity-0 translate-x-28 overflow-hidden`}`}>Login</h2>
                    </Link>
                </div>
                }
            
                </div>
                </div>
            </section>
    )
}