// ==== Nav Link ====
const navLink = [
  {
    title: "Work",
    link: "/works",
    icon: "💼",
  },
  {
    title: "Contact",
    link: "/contact",
    icon: "📧",
  },
  {
    title: "source",
    link: "https://github.com/Ukhang/ukeme",
    icon: "🦑"
  }
];

// ==== Bio Data ====
const bioData = [
  {
    Date: "2002",
    desc: "👶 Born in Rajasthali Rangamati, Chittagong, Bangladesh."
  },
  {
    Date: "2017",
    desc: "📄 Completed the Secondary School Certificate (SSC) in the A. P. Battalion high school"
  },
  {
    Date: "2020",
    desc: "📄 Completed the Higher Secondary Certificate (HSC) in the Dhaka State Collage"
  },
  {
    Date: "2021",
    desc: "💼 Worked as a Frontend Enginner Opentic! (Startup) Bangladesh "
  },
  {
    Date: "2021 - Present",
    desc: "👨‍🎓 Learning computer science Open Souce Socity Univeristy"
  },
];

// ==== Projects ====
const projects = [
  {
    name: "Number Convertor",
    desc: "Open source number converter web. It allows you to convert numbers from one numeral system to another, such as Decimal to Binary, Binary to Decimal, and more.",
    link: "/works/number-converter",
    img: {
      src: "/images/works/number-converter/index.png",
      alt: "Number Converter"
    }
  },
  {
    name: "Brenda",
    desc: "Brenda - is a Freeelance Marketplace Front-end web application. I created this inspired by the upwork freelance marketplace",
    link: "/works/brenda",
    img: {
      src: "/images/works/brenda/index.png",
      alt: "Brenda"
    }
  },
  {
    name: "Snake Game",
    desc: "Snake game is the first project of my life. I made this project to improve JavaScript logic building skills",
    link: "/works/snakegame",
    img: {
      src: "/images/works/snake-game/index.png",
      alt: "snake game"
    }
  }
];

export { navLink, bioData, projects };