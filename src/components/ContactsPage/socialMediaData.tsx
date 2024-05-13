export interface SocialMediaInterface {
  icon: string,
  href: string,
  target?: string;
}

export const socialMediaData: SocialMediaInterface[]  = [
  {
    icon: "/mail.png",
    href: "mailto:tcuxrdr@gmai.com"
  },
  {
    icon: "/linkedin.png",
    href: "https://www.linkedin.com/in/alexandr-shumakov-8a90a01ab",
    target: "_blank"
  },
  {
    icon: "/github.png",
    href: "https://github.com/AlexandrShum",
    target: "_blank"
  }
];
