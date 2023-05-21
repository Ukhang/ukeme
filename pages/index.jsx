import HeadTag from "../components/HeadTag";
import { Hero, About, Bio } from "../components";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";

// ==== Font ====
const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`min-h-screen flex flex-col bg-[#f0fdfd] dark:bg-gray-900 ${inter.className}`}
    >
      {/* Head Tag */}
      <HeadTag title="Ukhang Marma - Homepage" />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="mt-16 mb-14">
        {/* loding 3d models */}
        <Hero />

        {/* About */}
        <About />

        {/* Bio */}
        <Bio />

        {/* Skills */}
        <Skills />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
