import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { projects } from "../../constant";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Footer from "../../components/Footer";

const Works = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#f0fdfd] dark:bg-gray-900">
      {/* Head Tag */}
      <HeadTag title="Works - Ukhang Marma" />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="mt-16 mb-14">
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-24">
          <motion.h2
            className="text-xl font-semibold text-[#0F172A] dark:text-white mb-4"
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Works
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((curVal) => (
              <motion.div
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2 cursor-pointer"
                key={curVal.id}
                onClick={() => router.push(curVal.link)}
              >
                <Image
                  src={curVal.img.src}
                  alt={curVal.img.alt}
                  width={544}
                  height={319}
                  className="rounded-[7px] w-full"
                />
                <div className="space-y-0.5">
                  <h2 className="text-center font-semibold text-gray-800 dark:text-gray-200">
                    {curVal.name}
                  </h2>
                  <p className="text-[15px] text-center">{curVal.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[#0F172A] dark:text-white">see all prject:</p>
            <div className="flex flex-wrap items-center gap-5 mt-1.5">
              <FaGithub />
              <Link
                href="https://github.com/Ukhang"
                className="text-blue-700 dark:text-cyan-300 hover:underline"
                target="_blank"
              >
                https://github.com/Ukhang
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Works;
