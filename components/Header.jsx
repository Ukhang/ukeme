import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import Link from "next/link";
import { GoMarkGithub, GoThreeBars } from "react-icons/go";
import { useTheme } from "next-themes";
import { VT323 } from "@next/font/google";
import { useRouter } from "next/router";

// Google font
const vt323 = VT323({
  weight: '400'
});

const Header = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [dropdown, setDropdown] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
       <header className="bg-[#F4FEFF] border-b border-[#E5D7D7] dark:border-gray-700 dark:bg-gray-800 fixed w-full z-20">
            <nav className="max-w-4xl mx-auto py-2.5 px-4 flex justify-between items-center relative">
                {/* Left part */}
                <div className="flex items-center">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center gap-x-1 font-semibold text-2xl hover:scale-[101%] transition">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6556 21.1865L17.0658 21.1961L18.9559 21.2003L18.9594 19.6252L18.9628 18.0501L18.9683 15.53L18.9759 12.0649L18.98 10.1748L18.9842 8.28467L18.046 5.13245L18.0488 3.87239L16.4779 1.97885L12.6997 1.02553L9.5496 1.01863L7.97452 1.01518L2.93084 2.57922L1.03523 5.0952L1.02833 8.24535L1.02005 12.0255L1.96165 13.6027L3.84553 16.442L3.84208 18.017L3.83863 19.5921L3.83518 21.1672L7.93038 21.1761L7.93383 19.6011L7.94072 16.4509L9.5158 16.4544L12.6659 16.4613L12.6625 18.0363L12.6556 21.1865Z" fill="url(#paint0_linear_214_49)" className="cursor-pointer mb-1 dark:stroke-white" stroke="#0F172A" strokeWidth="1.5"/>
                                <path d="M7.78019 7H4.63003L4 8.57508V10.1502L5.57508 10.7802H7.78019V8.57508V7Z" fill="#06B6D4" stroke="black" className="cursor-pointer mb-1"/>
                                <path d="M11 7H14.3333L15 8.66667V10.3333L13.3333 11H11V8.66667V7Z" fill="#06B6D4" stroke="black" className="cursor-pointer mb-1"/>
                                <defs>
                                <linearGradient id="paint0_linear_214_49" x1="8" y1="3.5" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7EE1F2"/>
                                <stop offset="1" stopColor="#1CC4E0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <span className={vt323.className}> Ukhang Marma </span>
                        </Link>
                    </div>

                    {/* List */}
                    <ul className="lg:flex hidden items-center pl-8 gap-x-1">
                        <li>
                            <Link href="/works" className={`capitalize py-2.5 px-2.5 hover:bg-[#06B6D4] hover:text-white ${(router.pathname == "/works" && "bg-[#06B6D4] text-white")}`}>
                                <span className="text-sm">💼</span> Works
                            </Link>
                        </li>
                        
                        {/* <li>
                            <Link href="https://drive.google.com/file/d/1ioxNPLML9NqfaKkURyPLKlC6zCCSzjYl/view" className="capitalize py-2.5 px-3 hover:bg-[#06B6D4] hover:text-white" target="_blank">
                                <span className="text-sm">📄</span> Resume
                            </Link>
                        </li> */}

                        <li>
                            <Link href="/contact" className={`capitalize py-2.5 px-2.5 hover:bg-[#06B6D4] hover:text-white ${(router.pathname == "/contact" && "bg-[#06B6D4] text-white")}`}>
                                📧 Contact
                            </Link>
                        </li>

                        <li>
                            <Link href="https://github.com/Ukhang/ukeme" target="_blank" className={`capitalize py-2.5 px-2.5 hover:bg-[#06B6D4] hover:text-white flex items-center gap-x-1 ${(router.pathname == "/source" && "bg-[#06B6D4] text-white")}`}>
                                <GoMarkGithub className="h-3.5"/> source
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right part */}
                <div className="flex flex-wrap items-center gap-1.5">
                    {/* Dark and light mode */}
                    <button 
                        className="bg-gradient-to-tr from-[#66dff5] to-[#06B6D4] hover:from-[#06aac7] hover:to-[#06B6D4] hover:ring-4 ring-[#92e9f8] py-1.5 px-2.5 text-lg rounded-md"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        >
                            { theme === "light" ? "🌙" : "🌞" }
                    </button>
                    {/* Dropdown button */}
                    <button 
                        className={`py-2.5 px-3 border dark:border-gray-600 text-lg text-gray-700 dark:text-white rounded-md lg:hidden hover:bg-[#e2f4f8] dark:hover:bg-gray-700 hover:ring-4 ring-[#92e9f8] ${dropdown == true ? "bg-[#e2f4f8] dark:bg-gray-700" : "bg-gray-100 dark:bg-gray-800"}`} 
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <GoThreeBars/>
                    </button>
                </div>


                {/* Dropdown Menu */}
                <div className={`absolute top-[3.8rem] bg-white min-w-[15rem] right-1 py-2.5 rounded-md border shadow-md dark:bg-gray-700 dark:border-gray-500 lg:hidden z-10 ${dropdown == true ? "block" : "hidden"}`}>
                    <ul className="space-y-0.5">
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/' className="capitalize">
                                <span className="text-sm">👨‍💻</span> About
                            </Link>
                        </li>
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/works" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/works' className="capitalize">
                                <span className="text-sm">💼</span> Works
                            </Link>
                        </li>
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/contact" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/contact' className="capitalize">
                                📧 Contact
                            </Link>
                        </li>
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/source" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='https://github.com/Ukhang/ukeme' target="_blank" className="flex items-center gap-x-1 capitalize">
                                <GoMarkGithub className="h-3.5"/> source
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
       </header>
    )
}

export default Header;