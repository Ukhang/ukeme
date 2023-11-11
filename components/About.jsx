import Link from "next/link";

const About = () => {
  return (
    <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 md:mt-[9rem] mt-[13rem]">
      <div className="space-y-2.5">
        <h4 className="underline text-xl font-semibold text-[#0F172A] dark:text-white">
          I am <span className="rote">💻</span>
        </h4>
        <p className="text-[#0F172A] dark:text-gray-200 tracking-wide text-justify">
        Hello, I'm Ukhang, a passionate self-learner in software engineering, dedicated to advancing my knowledge through research and development. I love solving real-world problems with code. I have improved my skills by participating in various hackathons and I have done free classes at various live events on the internet. Technology has always been a passion of my life.

        </p>
      </div>

      <div className="mt-6">
        <Link
          href="/works"
          className="bg-[#06B6D4] py-2.5 px-4 text-white capitalize rounded-md font-semibold hover:bg-[#06abc9]"
        >
          My Portfolio 📁
        </Link>
      </div>
    </section>
  );
};

export default About;
