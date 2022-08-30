import React, {useState} from "react"
import { HiMenuAlt2 } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineFile} from 'react-icons/ai'
import {BsCreditCard, BsHeadset} from 'react-icons/bs'
import { BiWrench, BiLogOut } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import HomePage from "./HomePage"


export default function SideBar() {
    const menus = [
        {name: "Home", link:'/', icon: AiOutlineHome},
        {name: "Payments and Balances", link:'/', icon: BsCreditCard},
        {name: "My Lease", link:'/', icon: AiOutlineFile},
        {name: "Maintenance Request", link:'/', icon: BiWrench},
        {name: "Contact Us", link:'/', icon: BsHeadset},
    ]
    const [open, setOpen] = useState(true)
    return (
        <section className="Z-[999] flex gap=6">
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
                <div className="py-6 flex justify-end">
                    <HiMenuAlt2 
                    size={26} 
                    className="cursor-pointer" 
                    onClick={() =>setOpen(!open)}
                    />
                </div>
                <div className="mt-5 flex flex-col gap-6 relative">
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
                <div> <Link to={'/'}  className='fixed static items-bottom bottom-7 left-5 justify-center whitespace-pre duration-500'>
                        <div>{React.createElement(BiLogOut, {size: '20'})}</div>
                        <h2 
                        style={{
                            transitionDelay: `${0 + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${!open && `opacity-0 translate-x-28 overflow-hidden`}`}>Login/Logout</h2>
                    </Link>
                </div>
                </div>
            </div>
            </section>
    )
}