'use client'

import Link from "next/link"
import {Navbaritem} from './activenavbar'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState } from 'react';
//import PropTypes from 'prop-types'

export default function Navbar(props){
    const Navbaritems = [
        { title: "About", path: "/about" },
        { title: "Participate", path: "/participate"},
        { title: "Resourcess", path: "/resources" },
        { title: "Get involved", path: "/involvement" },
        { title: "Donate", path: "/donate" },
        { title: "Contact", path: "/contact" }
        ]

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const router = useRouter
    const currentPath = router.pathname

    return (

        <div className = {`${props.className} my-auto flex flex-wrap justify-between mt-10 space-y-2 w-screen text-gray-900`}>
            <div className = "justify-between">
                <Link href = "/">{/*<a>*/}
                    <Image
                className = "m-2"
                src = "/vercel.svg"
                alt = "logo"
                width = "70"
                height = "70"
                priority = {true}
                />{/*</a>*/}</Link>
            </div>
            <div className = "hidden sm:flex">
            {Navbaritems.map(
                (item, key) =>{
                    const isActive = item.path === currentPath;
                
                return (
                    <Link href={item.path} key={key}>
                        {/* <a> */}
                            <Navbaritem className = ""title={item.title} isActive={isActive}/>
                        {/* </a> */}
                    </Link>
                )
                })} {/*//so react knows to evaluate the items in {} */}
                {/* and pass it on as components */}
            </div>
            <div className = "flex my-auto mx-2  mt-10 sm:hidden  ">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" 
                viewBox="0 -960 960 960" 
                width="24px" 
                fill="#e8eaed"
                className = " inline hover:cursor-pointer" 
                onClick={() =>{setDropdownIsOpen(!dropdownIsOpen)}}>
                    <path 
                    d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>

                {dropdownIsOpen &&
                    <div className="flex flex-col  absolute z-999 max-w-16 items-center justify-between fill-slate-500" >
                        {/* <svg className="hover:cursor-pointer" onClick={()=>{setDropdownIsOpen(!dropdownIsOpen)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> */}
                        {Navbaritems.map(
                            (item, key) =>{
                                const isActive = item.path === currentPath;
                            
                            return (
                                <Link href={item.path} key={key}>
                                    {/* <a> */}
                                        <Navbaritem className = " w-full h-full py-2"title={item.title} isActive={isActive}/>
                                    {/* </a> */}
                                </Link>
                            )
                        })}
                    </div>
                }
            </div>

        </div>
    )
}