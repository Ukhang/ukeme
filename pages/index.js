import HeadTag from "../components/HeadTag";
import Header from "../components/Header";
import About from "../components/About";
import Link from "next/link";
import awsct from "../public/images/aws-certificate.png";
import Image from "next/image";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col bg-[#ECFEFF] dark:bg-gray-900">

      {/* Head Tag */}
      <HeadTag title="Ukhang Marma - Homepage" />

      {/* Header */}
      <Header/>

      {/* Main */}
      <main className="mt-16 mb-14">
        {/* loding 3d models */}
        <About/>

        {/* Works */}
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 md:mt-[9rem] mt-[13rem]">
          <h2 className="underline text-xl font-semibold text-[#0F172A] dark:text-white">
            I am <span className="rote">💻</span>
          </h2>

          <p className="mt-2.5 text-[#0F172A] dark:text-white tracking-wide text-justify">
            <span className="invisible">__</span>Hello👋 I'm Ukhang. Self-learning software engineering through research & development. I love solving real-world🌏 problems with code. I have improved my skills by participating in various hackathons and I have done free classes at various live events on the internet. Technology has always been a passion of my life. I like meditation and reading books in my free time.
          </p>

          <h2 className="font-semibold text-[#0F172A] dark:text-white">
            Future 🌳
          </h2>

          <p className="text-[#0F172A] dark:text-white tracking-wide text-justify"> I was inspired by <Link href="https://en.wikipedia.org/wiki/Larry_Ellison" className="hover:underline"> Larry Ellison </Link> and <Link href="https://en.wikipedia.org/wiki/Bill_Gates" className="hover:underline"> Bill Gates </Link> when I was a child. I also want to do something big with technology like them when I grow up. So startups it will very likely be my future career!</p>

          <div className="mt-6">
            <Link href="/works" className="bg-[#06B6D4] py-2.5 px-4 text-white capitalize rounded-md font-semibold hover:bg-[#06abc9]"> 
              My Portfolio 📝
            </Link>
          </div>
        </section>

        {/* Bio */}
        <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-8">
          <h2 className="underline text-xl font-semibold text-[#0F172A] dark:text-white">
            Bio📖
          </h2>

          <div className="mt-2.5">
            <div className="flex items-start gap-x-5">
              <h4 className="font-bold text-gray-800 dark:text-white">2002</h4>
              <span className="text-[#0F172A] dark:text-white">👶 Born in Rajasthali Rangamati, Chittagong, Bangladesh.</span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2017</h4>
              <span className="text-[#0F172A] dark:text-white"> 📄 Completed the Secondary School Certificate (SSC) in the A. P. Battalion high school</span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2020</h4>
              <span className="text-[#0F172A] dark:text-white"> 📄 Completed the Higher Secondary Certificate (HSC) in the Dhaka State Collage </span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2021</h4>
              <span className="text-[#0F172A] dark:text-white"> 💼 Worked as a Frontend Enginner Opentic! (Startup) Bangladesh </span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2021 - Present</h4>
              <span className="text-[#0F172A] dark:text-white"> 
              👨‍🎓 Learning computer science <Link href="https://github.com/ossu/computer-science" target="_blank" className="font-semibold text-blue-500 hover:underline"> Open Souce Socity Univeristy </Link> 
              </span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <Skills/>
      </main>

      {/* Footer */}
      <Footer/>
   </div>
  )
}
