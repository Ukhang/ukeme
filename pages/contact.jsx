import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import gmail from "../public/images/gmail.png";
import whatsapp from "../public/images/whatsapp.png";
import { motion } from "framer-motion";
import { Inter } from "@next/font/google";

// ==== Font ====
const inter = Inter({
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-[#f0fdfd] dark:bg-gray-900 ${inter.className}`}
    >
      {/* Head Tag */}
      <HeadTag title="Contact - Ukhang Marma" />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="mt-16 mb-14">
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-24">
          <motion.h2
            className="text-xl font-semibold text-[#0F172A] dark:text-white mb-5"
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-5 items-center"
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i title="Gmail">
              <Image src={gmail} width={20} height={20} alt="gmail image" />
            </i>
            <span className="text-[#0F172A] dark:text-white">
              ukhangmarma459@gmail.com
            </span>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-5 items-center mt-3"
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i title="What's app">
              <Image src={whatsapp} width={20} height={20} alt="gmail image" />
            </i>
            <span className="text-[#0F172A] dark:text-white">01553830724</span>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
