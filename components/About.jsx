import Developer from "./Developer";
import Image from "next/image";
import Ukhang from "../public/images/dev.png";
import { VT323 } from "@next/font/google";

// Google font
const vt323 = VT323({
  weight: '400'
});

const About = () => {
    return (
        <section className="max-w-3xl h-[30rem] mx-auto px-4 relative">
            {/* Developer 3D */}
            <Developer/>

            {/* Name and profession */}
            <div className="md:max-w-xl max-w-lg mx-auto flex md:flex-row flex-col justify-between md:items-center md:gap-x-5 md:gap-y-0 gap-y-5">
                {/* Left */}
                <div className="space-y-1">
                    <h2 className={vt323.className}>
                        <span className="text-6xl text-[#0F172A] dark:text-white">Ukhang Marma</span>
                    </h2>
                    <p className="text-[#1E293B] text-lg dark:text-white font-[500]"> Software Developer ( Full-Stack ) </p>
                </div>
                {/* Right */}
                <div className="md:mx-0 mx-auto">
                    <Image src={Ukhang} alt="Ukhang image" width={90} height={90} className="rounded-full border-2 border-[#a6e4ee]"/>
                </div>
            </div>
        </section>
    )
}

export default About;