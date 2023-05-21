import Image from "next/image";
import Ukhang from "../public/images/dev.png";
import { VT323 } from "@next/font/google";
import Room from "./Room";

// Google font
const vt323 = VT323({
  weight: "400",
});

const Hero = () => {
  return (
    <section className="max-w-3xl h-[25rem] mx-auto px-4 relative">
      {/* Developer 3D */}
      <Room />

      {/* Name and profession */}
      <div className="md:max-w-xl max-w-lg mx-auto flex md:flex-row flex-col justify-between md:items-center md:gap-x-5 md:gap-y-0 gap-y-5">
        {/* Left */}
        <div className="space-y-1 md:max-w-[350px]">
          <h2 className={vt323.className}>
            <span className="sm:text-6xl text-5xl text-[#0F172A] dark:text-white">
              Ukhang Marma
            </span>
          </h2>
          <p className="text-gray-700 text-base dark:text-gray-200 font-[500]">
            Software Developer👨‍💻 | Open Source Contributor👨‍🔧
            {/* | UX Designer🎨 */}
          </p>
        </div>
        {/* Right */}
        <div className="md:mx-0 mx-auto">
          <Image
            src={Ukhang}
            alt="Ukhang image"
            width={90}
            height={90}
            className="rounded-full border-2 border-[#cdf5fa]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
