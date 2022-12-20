import HeadTag from "../../components/HeadTag";
import Header from "../../components/Header";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Footer from "../../components/Footer";

const SnakeGame = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#ECFEFF] dark:bg-gray-900">
            {/* Head Tag */}
            <HeadTag title="SnakeGame - Ukhang Marma" />

            {/* Header */}
            <Header/>

            {/* Main */}
            <main className="mt-16 mb-14">
                <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-24">
                    <div className="flex flex-wrap gap-1">
                        <div className="flex items-center gap-x-1">
                            <Link href="/works" className="text-blue-600 dark:text-cyan-300 hover:underline">Works</Link>
                            <BiChevronRight className="mt-1 text-lg text-gray-700 dark:text-gray-200"/>
                        </div>
                        <div>
                            <h4 className="font-[700] text-lg text-[#0F172A] dark:text-white"> 
                                Code_tracker
                                <span className="text-[0.8rem] ml-2 bg-blue-100 text-gray-700 dark:bg-gray-600 dark:text-white py-0.5 px-1 font-semibold">2021-</span>
                            </h4>
                        </div>
                    </div>

                    <p className="mt-3.5 text-justify text-[#0F172A] dark:text-gray-300">
                        Code - tracker this allows users to add code issues or code reports. It is built with Vanilla Js, Bootstrap and Custom CSS
                    </p>

                    <div className="flex flex-wrap gap-3 items-center mt-4 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> live </span>
                        <Link href="https://code-tracker-ukhang.netlify.app/" className="text-blue-600 dark:text-cyan-300 hover:underline" target="_blank">https://code-tracker-ukhang.netlify.app/</Link>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> platform </span>
                        <span className="text-[#0F172A] dark:text-white">Web</span>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> stack </span>
                        <span className="text-[#0F172A] dark:text-white flex items-center gap-2">
                            <div className="flex gap-x-1 items-center">
                                <Image src="/images/js.png" className="w-[17px] h-[17px]" width={17} height={17} alt="js image"/>
                                <span>VanilaJs</span>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <Image src="/images/bootstrap.png" className="w-[20px] h-[17px]" width={17} height={17} alt="js image"/>
                                <span>Bootstrap</span>
                            </div>
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200 flex items-center gap-x-1"> 
                            Code <FaGithub/>
                        </span>
                        <Link href="https://github.com/Ukhang/code_tracker" className="text-blue-600 dark:text-cyan-300 hover:underline" target="_blank">https://github.com/Ukhang/code_tracker</Link>
                    </div>

                    <div className="mt-5">
                        <Image src="/images/code-tracker-sub1.PNG" width={1100} height={650} className="w-full rounded-lg" alt="snakegame image" />
                        <Image src="/images/code-tracker-sub2.PNG" width={1100} height={650} className="w-full rounded-lg mt-5" alt="snakegame image" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default SnakeGame;