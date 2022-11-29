import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "flowbite-react";

const Skills = () => {
    return (
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-8">
            <h2 className="underline text-xl font-semibold text-[#0F172A] dark:text-white text-center">
                Skills & My Coding Journey
            </h2>

            <div className="mt-3">
                {/* Image */}
                <Tooltip content="Computer" placement="right">
                    <motion.div
                        initial={{y:"10%", opacity: 0 }}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="ml-10 cursor-pointer"
                    >
                        <Image src="/images/pc.png" alt="pc image" width={100} height={101} className="w-auto h-auto"/>
                    </motion.div>
                </Tooltip>

                {/* Bar */}
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 ml-[5rem] rotate-[-12deg]"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 ml-[6rem] rotate-[-30deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 ml-[7rem] rotate-[-12deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>

                {/* Image */}
                <Tooltip content="Windows" placement="right">
                    <motion.div 
                        className="ml-[6.5rem] mt-2 cursor-pointer"
                        initial={{y:"10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                    >
                        <Image src="/images/windows.png" alt="windows image" width={40} height={45} className="w-auto h-auto"/>
                    </motion.div>
                </Tooltip>

                 {/* Bar */}
                 <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 ml-[8rem] md:rotate-[-25deg] rotate-[-15deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[9.5rem] ml-[8.5rem] md:rotate-[-40deg] rotate-[-10deg] mt-2"  
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[11rem] ml-[9.1rem] md:rotate-[-27deg] rotate-[-20deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>

                {/* Image */}
                <Tooltip content="Linux" placement="right">
                    <motion.div 
                        className="md:ml-[10.5rem] ml-[9rem] mt-2 cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                    >
                        <Image src="/images/linux.png" alt="linux image" width={50} height={65} className="w-auto h-auto"/>
                    </motion.div>
                </Tooltip>

                {/* Bar */}
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[12rem] ml-[11rem] md:rotate-[-13deg] rotate-[-5deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[12.5rem] ml-[11.1rem] rotate-[-1deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[13rem] ml-[11rem] md:rotate-[-7deg] rotate-[1deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>

               {/* Image */}
                <div className="md:ml-[10rem] ml-[7.5rem] mt-2">
                    <Tooltip content="DBMS" placement="top">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/dbms.png" alt="dbms image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Algoirthm" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/algorithm.png" alt="algorithm image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Data structrue" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/data-structure.png" alt="datastructure image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Cpp" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/cpp.png" alt="cpp image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Discreate math" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/discrete-math.png" alt="discretemathmatics image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                </div>

                {/* Bar */}
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[14rem] ml-[11rem] md:rotate-[-20deg] rotate-[-10deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[14.7rem] ml-[11.5rem] md:rotate-[-15deg] rotate-[-5deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[15rem] ml-[11.5rem] md:rotate-[-1deg] rotate-[1deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>

                {/* Image */}
                <div className="md:ml-[11rem] ml-[8rem] mt-2">
                    <Tooltip content="Css" placement="top">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/css.png" alt="css image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Html" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/html.png" alt="html image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Javascipt" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className=" cursor-pointer"                            
                        >
                            <Image src="/images/js.png" alt="javascript image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="React" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/react.png" alt="react image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Svg" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/svg.png" alt="svg image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Redux" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/redux.png" alt="redux image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Git and github" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/git-and-github.png" alt="github image" width={50} height={51} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Tailwindcss" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/tailwind-css.png" alt="tailwindcss image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Nextjs" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className=" cursor-pointer"
                        >
                            <Image src="/images/nextjs.png" alt="nextjs image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                </div>

                {/* Bar */}
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[15rem] ml-[11.5rem] md:rotate-[-13deg] rotate-[-5deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[15.5rem] ml-[11.5rem] md:rotate-[-5deg] rotate-[3deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>
                <motion.div 
                    className=" w-1 h-8 bg-gray-800 dark:bg-gray-200 py-1 px-1 md:ml-[15.5rem] ml-[11.5rem] md:rotate-[-7deg] rotate-[1deg] mt-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                ></motion.div>

                 {/* Image */}
                 <div className="md:ml-[12.5rem] ml-[8rem] mt-2">
                    <Tooltip content="Express" placement="top">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/express.png" alt="express image" width={25} height={25} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Mysql" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/mysql.png" alt="mysql image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Node js" placement="left">
                        <motion.div
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                            className="cursor-pointer"
                        >
                            <Image src="/images/nodejs.png" alt="nodejs image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                    <Tooltip content="Mongodb" placement="right">
                        <motion.div 
                            className="ml-[5rem] cursor-pointer"
                            initial={{y: "10%", opacity: 0 }}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        >
                            <Image src="/images/mongodb.png" alt="mongodb image" width={30} height={31} className="w-auto h-auto"/>
                        </motion.div>
                    </Tooltip>
                </div>
            </div>
        </section>
    )
}

export default Skills;