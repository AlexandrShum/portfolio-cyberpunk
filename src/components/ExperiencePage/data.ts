export const experienceData: ExperienceDataInterface[] = [
  {
    position: "Full Stack Engineer",
    companyAndDate: "NeatByte Solutions,  03.2025 - 03.2026",
    description: "Quickly became a key developer on a legacy recruitment platform, maintaining and optimizing the existing React and Express.js application while resolving critical issues and improving performance. Led the migration to NestJS and Next.js, refactored core modules, and integrated Elasticsearch to significantly improve search performance and relevance. Mentored junior developers through code reviews and technical guidance, and developed a new Next.js frontend and administration panel.",
    picture: "/experience/pic3.png",
  },
  {
    position: "Full-Stack Developer & Co-Founder",
    companyAndDate: "Startup Project dApp,  03.2024 - 03.2025",
    description: "Designed and developed a blockchain-based dApp from concept to production as a co-founder, building the frontend with Next.js, React, TypeScript, and Tailwind CSS. Integrated cryptocurrency wallets and implemented smart contract interactions using Wagmi, and developed interactive data visualizations with D3.js.",
    picture: "/experience/pic2.png",
  },
  {
    position: "Front-End Developer",
    companyAndDate: "Startup GetSatoshi,  01.2024 - 03.2024",
    description: "Developed a blockchain-based web application using Next.js, React, TypeScript, and Tailwind CSS. Built responsive pixel-perfect interfaces and integrated cryptocurrency wallets and smart contract interactions using Wagmi.",
    picture: "/experience/pic1.png",
  },
  {
    position: "Full-Stack Developer",
    companyAndDate: "Ambisafe, Lviv  01.2022 -  12.2023",
    description: "Developed frontend and backend features for a blockchain-based trading platform, implementing new functionality and resolving bugs. Maintained and improved the existing application while contributing to its stability and performance. Participated in migrating the frontend from the company's internal framework to Next.js, helping modernize the codebase and improve maintainability.",
    picture: "/experience/pic4.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Ambisafe, Lviv  04.2021 - 01.2022",
    description: "Performed manual and automated testing of web and mobile applications. Worked closely with developers, the Project Manager, and the CEO to discuss product requirements and improve software quality. Led two manual QA engineers and prepared detailed bug reports and feature requests in Jira, helping the development team deliver new features and resolve issues efficiently.",
    picture: "/experience/pic3.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Inforce, Lviv  11.2020 - 04.2021",
    description: "Performed manual and automated testing of web, mobile, and desktop applications. Executed test cases, reported defects, and collaborated with the development team to ensure software quality.",
    picture: "/experience/pic2.png",
  },
];

export interface ExperienceDataInterface {
  position: string;
  companyAndDate: string;
  description: string;
  picture: string;
}
