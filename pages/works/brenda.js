import HeadTag from "../../components/HeadTag";
import Header from "../../components/Header";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Footer from "../../components/Footer";

const Brenda = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#ECFEFF] dark:bg-gray-900">
            {/* Head Tag */}
            <HeadTag title="Brenda - Ukhang Marma" />

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
                                Brenda
                                <span className="text-[0.8rem] ml-2 bg-blue-100 text-gray-700 dark:bg-gray-600 dark:text-white py-0.5 px-1 font-semibold">2022-</span>
                            </h4>
                        </div>
                    </div>

                    <p className="mt-3.5 text-justify text-[#0F172A] dark:text-gray-300">
                        Brenda - The World's Work Marketplace || Front-End Application. I created this inspired by the upwork freelance marketplace
                    </p>

                    <div className="flex flex-wrap gap-3 items-center mt-4 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> live </span>
                        <Link href="https://brenda-sooty.vercel.app/" className="text-blue-600 dark:text-cyan-300 hover:underline" target="_blank">https://brenda-sooty.vercel.app/</Link>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> platform </span>
                        <span className="text-[#0F172A] dark:text-white">Web</span>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200"> stack </span>
                        <span className="text-[#0F172A] dark:text-white flex items-center gap-2">
                            <div className="flex gap-x-0.5">
                                <Image src="/images/next-js.svg" className="dark:hidden" width={17} height={17} alt="react image"/>
                                <Image src="/images/nextjs-white.svg" className="hidden dark:block" width={17} height={17} alt="nextjs image"/>
                                <span>NextJS,</span>
                            </div>

                            <div className="flex gap-x-0.5">
                                <Image src="/images/framer-motion.svg" width={17} height={17} alt="frammermotion image"/>
                                <span>Frammer-Mototion</span>
                            </div>
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-1.5 ml-2">
                        <span className="uppercase text-sm bg-lime-200 dark:bg-[#374e12] font-semibold px-1 text-gray-700 dark:text-lime-200 flex items-center gap-x-1"> 
                            Code <FaGithub/>
                        </span>
                        <Link href="https://github.com/Ukhang/brenda" className="text-blue-600 dark:text-cyan-300 hover:underline" target="_blank">https://github.com/Ukhang/brenda</Link>
                    </div>

                    <div className="mt-5">
                        <Image src="/images/brenda-sub1.PNG" width={1100} height={650} className="w-full rounded-lg" alt="brenda image" />
                        <Image src="/images/brenda-sub2.PNG" width={1100} height={650} className="w-full rounded-lg mt-5" alt="brenda image" />
                        <Image src="/images/brenda-sub3.PNG" width={1100} height={650} className="w-full rounded-lg mt-5" alt="brenda image" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Brenda;