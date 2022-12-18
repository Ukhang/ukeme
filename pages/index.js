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
            I am💻
          </h2>

          {/* <p className="mt-2.5 text-[#0F172A] dark:text-white tracking-wide text-justify">
            Hello I'm Ukhang, I'm a self thought full stack engineer.I have three years of experience working 
            as a full stack developer. I don't have any computer science degree. I could not  take computer 
            science degree due to some family and financial problems. But technology has always been a 
            passion of my life. So I started clearing computer science subjects from internet like C++, 
            Data structure and algorithm, Databases, Discrete Mathematics, computer architecture and 
            much more. Then I learned full stack development by looking at full stack enginner roadmap 
            from codecadamy. I have improved my skills by participating in various hackathons and I have done free classes at various live events on the internet.
          </p> */}

          <p className="mt-2.5 text-[#0F172A] dark:text-white tracking-wide text-justify">
            Hello I'm Ukhang, I'm a self thought  Front End engineer.I have 2+ years of experience working 
            as a Front End developer. I don't have any computer science degree. I could not  take computer 
            science degree due to some family and financial problems. But technology has always been a 
            passion of my life. I learned Front End development by looking at Front End enginner roadmap 
            from codecadamy. I have improved my skills by participating in various hackathons and I have done free classes at various live events on the internet.
          </p>

          <p className="mt-2 text-[#0F172A] dark:text-white capitalize"> AWS day online conference certificate of attendance: </p>
          {/* Certificate Aws */}
          <Image src={awsct} alt="aws certificate" width={"100%"} height={"100%"} className="mt-2" />

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
              <span className="text-[#0F172A] dark:text-white">Born in Rajasthali Rangamati, Chittagong, Bangladesh.</span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2017</h4>
              <span className="text-[#0F172A] dark:text-white">Completed the Secondary School Certificate (SSC) in the A. P. Battalion high school</span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2020</h4>
              <span className="text-[#0F172A] dark:text-white">Completed the Higher Secondary Certificate (HSC) in the Dhaka State Collage </span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">2021</h4>
              <span className="text-[#0F172A] dark:text-white">Worked as a Frontend Enginner Opentic! (Startup) Bangladesh </span>
            </div>
            <div className="flex items-start gap-x-5 mt-1">
              <h4 className="font-bold text-gray-800 dark:text-white">Present</h4>
              {/* <span className="text-[#0F172A] dark:text-white">Preparing for google coding interview and working as a freelancer</span> */}
              <span className="text-[#0F172A] dark:text-white">Working as FrontEnd Developer</span>
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