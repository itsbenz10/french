'use client'

import Link from "next/link"
import { Navbaritem } from './activenavbar'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState } from 'react';

export default function Navbar(props) {
    const Navbaritems = [
        { title: "About", path: "/about" },
        { title: "Participate", path: "/participate" },
        { title: "Resources", path: "/resources" },
        { title: "Get involved", path: "/involvement" },
        { title: "Donate", path: "/donate" },
        { title: "Contact", path: "/contact" }
    ];

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const router = useRouter;
    const currentPath = router.pathname;

    return (
        <div className={`${props.className} my-auto flex flex-wrap items-center justify-center w-screen shadow-lg bg-white`}> {/* Added shadow and background color */}
            {/* Logo Section */}
            <div className="pr-4"> {/* Adjusted padding to bring the logo closer */}
                <Link href="/">
                    <Image
                        className="space-x-4"
                        src="/ENSEMBLE logo.png"
                        alt="logo"
                        width="90" // Increased size
                        height="90" // Increased size
                        priority={true}
                    />
                </Link>
            </div>

            {/* Desktop Navbar Items */}
            <div className="hidden sm:flex space-x-4"> {/* Removed left padding to center items */}
                {Navbaritems.map((item, key) => {
                    const isActive = item.path === currentPath;

                    return (
                        <Link href={item.path} key={key}>
                            <Navbaritem
                                className="hover:text-yellow-500"
                                title={item.title}
                                isActive={isActive}
                            />
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Dropdown Icon */}
            <div className="flex my-auto mx-2 mt-10 sm:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    className="inline hover:cursor-pointer"
                    onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                >
                    <path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                    />
                </svg>

                {/* Mobile Dropdown */}
                {dropdownIsOpen && (
                    <div
                        className={`flex flex-col absolute top-12 right-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-out transform ${
                            dropdownIsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                    >
                        <div className="text-center">
                            {Navbaritems.map((item, key) => {
                                const isActive = item.path === currentPath;

                                return (
                                    <Link href={item.path} key={key}>
                                        <div
                                            className={`w-full h-full py-2 border-b border-gray-200 ${
                                                isActive ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-100'
                                            } transition-colors duration-200 ease-in-out`}
                                            onClick={() => setDropdownIsOpen(false)} // Close menu on item click
                                        >
                                            <Navbaritem title={item.title} isActive={isActive} />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
