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
                        <Link href="/" className="flex items-center gap-x-1 font-semibold text-2xl">
                            <Image src={logo} alt="logo image" className="cursor-pointer mb-1" />
                            {/* set google font */}
                            <span className={vt323.className}> Ukhang Marma </span>
                        </Link>
                    </div>

                    {/* List */}
                    <ul className="md:flex hidden items-center pl-8 gap-x-1">
                        <li>
                            <Link href="/works" className={`capitalize py-2.5 px-2.5 hover:bg-[#06B6D4] hover:text-white ${(router.pathname == "/works" && "bg-[#06B6D4] text-white")}`}>
                                Works
                            </Link>
                        </li>
                        {/* future add */}
                        {/* <li>
                            <Link href="/work" className="capitalize py-2.5 px-3 hover:bg-[#06B6D4] hover:text-white">
                                Resume
                            </Link>
                        </li> */}

                        <li>
                            <Link href="/contact" className={`capitalize py-2.5 px-2.5 hover:bg-[#06B6D4] hover:text-white ${(router.pathname == "/contact" && "bg-[#06B6D4] text-white")}`}>
                                Contact
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
                        className={`py-2.5 px-3 border dark:border-gray-600 text-lg text-gray-700 dark:text-white rounded-md md:hidden hover:bg-[#e2f4f8] dark:hover:bg-gray-700 hover:ring-4 ring-[#92e9f8] ${dropdown == true ? "bg-[#e2f4f8] dark:bg-gray-700" : "bg-gray-100 dark:bg-gray-800"}`} 
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <GoThreeBars/>
                    </button>
                </div>


                {/* Dropdown Menu */}
                <div className={`absolute top-[3.8rem] bg-white min-w-[15rem] right-1 py-2.5 rounded-md border shadow-md dark:bg-gray-700 dark:border-gray-500 md:hidden z-10 ${dropdown == true ? "block" : "hidden"}`}>
                    <ul className="space-y-0.5">
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/' className="capitalize">About</Link>
                        </li>
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/works" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/works' className="capitalize">Works</Link>
                        </li>
                        <li className={`py-2 px-3 cursor-pointer hover:bg-[#e2f4f8] dark:hover:bg-gray-600 ${(router.pathname == "/contact" && "bg-[#e2f4f8] dark:bg-gray-600")}`}>
                            <Link href='/contact' className="capitalize">Contact</Link>
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