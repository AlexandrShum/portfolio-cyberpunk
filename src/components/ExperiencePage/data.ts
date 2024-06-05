export const experienceData: ExperienceDataInterface[] = [
  {
    position: "Full-Stack Developer",
    companyAndDate: "Freelancer  11.2023 - TILL NOW",
    description: "Developed full-stack web applications which processed, analyzed, and rendered data visually. Participated in introduction of new features for product.",
    picture: "/experience/pic1.png",
  },
  {
    position: "Full-Stack Developer",
    companyAndDate: "Ambisafe, Lviv  06.2022 -  11.2023",
    description: "Developed full-stack web applications which processed, analyzed, and rendered data visually. Participated in introduction of new features for product.",
    picture: "/experience/pic2.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Ambisafe, Lviv  04.2021 - 06.2022",
    description: "Automated and manual testing of web and mobile applications. Reproduce, debug, and isolate problems and verify fixes. Tests execution. Maintenance of test documentation",
    picture: "/experience/pic3.png",
  },
  {
    position: "AQA Engineer",
    companyAndDate: "Inforce, Lviv  11.2020 - 04.2021",
    description: "Automated and manual testing of websites, mobile and desktop applications",
    picture: "/experience/pic4.png",
  },
];

export interface ExperienceDataInterface {
  position: string;
  companyAndDate: string;
  description: string;
  picture: string;
}
