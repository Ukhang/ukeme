import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
    return (
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-8">
            <h2 className="underline text-xl font-semibold text-[#0F172A] dark:text-white text-center">
                Skills ✅
            </h2>

            <div className="mt-3">
                {/* Image */}
                <motion.div
                    initial={{y:"10%", opacity: 0 }}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                    className="ml-10 cursor-pointer"
                    title="Computer"
                >
                    <Image src="/images/pc.png" alt="pc image" width={100} height={101}/>
                </motion.div>

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
                <motion.div 
                    className="ml-[6.5rem] mt-2 cursor-pointer"
                    initial={{y:"10%", opacity: 0 }}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                    title="Windows"
                >
                    <Image src="/images/windows.png" alt="windows image" width={40} height={45} />
                </motion.div>

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
                <motion.div 
                    className="md:ml-[10.5rem] ml-[9rem] mt-2 cursor-pointer"
                    initial={{y: "10%", opacity: 0 }}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: 100}}
                    title="Linux"
                >
                    <Image src="/images/linux.png" alt="linux image" width={50} height={65} />
                </motion.div>

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
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="DBMS"
                    >
                        <Image src="/images/dbms.png" alt="dbms image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Algorithm"
                    >
                        <Image src="/images/algorithm.png" alt="algorithm image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Data Structure"
                    >
                        <Image src="/images/data-structure.png" alt="datastructure image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="CPP"
                    >
                        <Image src="/images/cpp.png" alt="cpp image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Discrete Math"
                    >
                        <Image src="/images/discrete-math.png" alt="discretemathmatics image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Computer Networking"
                    >
                        <Image src="/images/networking.png" alt="computernetworking image" width={30} height={31} />
                    </motion.div>
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
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Css"
                    >
                        <Image src="/images/css.png" alt="css image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Html"
                    >
                        <Image src="/images/html.png" alt="html image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className=" cursor-pointer"
                        title="Javascipt"                            
                    >
                        <Image src="/images/js.png" alt="javascript image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="React"
                    >
                        <Image src="/images/react.png" alt="react image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Svg"
                    >
                        <Image src="/images/svg.png" alt="svg image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Redux"
                    >
                        <Image src="/images/redux.png" alt="redux image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Git and github"
                    >
                        <Image src="/images/git-and-github.png" alt="github image" width={50} height={51} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Tailwindcss"
                    >
                        <Image src="/images/tailwind-css.png" alt="tailwindcss image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className=" cursor-pointer"
                        title="Nextjs"
                    >
                        <Image src="/images/nextjs.png" alt="nextjs image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Typescript"
                    >
                        <Image src="/images/typescript.png" alt="typescript image" width={25} height={25} />
                    </motion.div>
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
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Express"
                    >
                        <Image src="/images/express.png" alt="express image" width={25} height={25} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Mysql"
                    >
                        <Image src="/images/mysql.png" alt="mysql image" width={30} height={31} />
                    </motion.div>
                    <motion.div
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        className="cursor-pointer"
                        title="Node js"
                    >
                        <Image src="/images/nodejs.png" alt="nodejs image" width={30} height={31} />
                    </motion.div>
                    <motion.div 
                        className="ml-[5rem] cursor-pointer"
                        initial={{y: "10%", opacity: 0 }}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.1, type: "spring", stiffness: 100}}
                        title="Mongodb"
                    >
                        <Image src="/images/mongodb.png" alt="mongodb image" width={30} height={31} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills;