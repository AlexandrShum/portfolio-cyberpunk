export const experienceData: ExperienceDataInterface[] = [
  {
    position: "Full-Stack Developer",
    companyAndDate: "Startup Project dApp,  03.2024 - Present",
    description: "Designed and developed a web application concept from scratch, leading the project through all phases of development. Utilized Next.js, Tailwind CSS, and Wagmi for building a responsive and dynamic front-end with integrated cryptocurrency wallet support. Integrated D3.js for advanced data visualization",
    picture: "/experience/pic1.png",
  },
  {
    position: "Front-End Developer",
    companyAndDate: "Startup GetSatoshi,  12.2023 - 03.2024",
    description: "Developed a front-end part of web application from scratch using Next.js, Wagmi, and Tailwind CSS.Integrated cryptocurrency wallets for seamless user interaction with blockchain features",
    picture: "/experience/pic2.png",
  },
  {
    position: "Full-Stack Developer",
    companyAndDate: "Ambisafe, Lviv  01.2022 -  12.2023",
    description: "Developed full-stack web applications which processed, analyzed, and rendered data visually. Participated in introduction of new features for product.",
    picture: "/experience/pic3.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Ambisafe, Lviv  04.2021 - 01.2022",
    description: "Automated and manual testing of web and mobile applications. Reproduce, debug, and isolate problems and verify fixes. Tests execution. Maintenance of test documentation",
    picture: "/experience/pic4.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Inforce, Lviv  11.2020 - 04.2021",
    description: "Automated and manual testing of websites, mobile and desktop applications",
    picture: "/experience/pic1.png",
  },
];

export interface ExperienceDataInterface {
  position: string;
  companyAndDate: string;
  description: string;
  picture: string;
}
