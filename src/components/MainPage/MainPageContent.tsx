import React, { FC } from 'react';
import Image from 'next/image';
import { getImageUrl } from '../../utils';

export const MainPageContent: FC = () => {
  const summary = [
    `
      I'm a Full-Stack Software Engineer with over five years of commercial
      experience designing and building web applications across the entire
      development lifecycle. My primary expertise lies in TypeScript, Node.js,
      NestJS, React, and Next.js, where I focus on developing scalable, maintainable,
      and business-oriented solutions.
    `,
    `
      Throughout my career, I've worked on SaaS platforms, recruitment systems,
      and blockchain products, contributing to both greenfield development and the
      modernization of complex legacy applications. My work has included migrating
      monolithic systems to modern architectures, designing REST and GraphQL APIs,
      integrating Elasticsearch for high-performance search, and building responsive,
      user-focused interfaces.
    `,
    `
      I enjoy solving complex engineering problems that require more than simply
      implementing features. Whether it's improving application architecture,
      optimizing performance, refactoring critical modules, or mentoring less
      experienced developers, I aim to deliver solutions that remain reliable
      and maintainable as products evolve.
    `,
    `
      I'm passionate about continuous learning and constantly refining my approach
      to software engineering. I value clean architecture, thoughtful design decisions,
      and writing code that is easy for both people and systems to work with. My goal
      is not just to ship features, but to build software that creates long-term
      value for users and development teams alike.
    `,
  ];

  return (
    <div className=" text-center pt-4 md:pt-0 md:text-left">
      <div className=" text-titleColor font-semibold text-base md:text-2xl tracking-widest md:text-start">
        {'HI, I`M ALEXANDR SHUMAKOV'}
      </div>
      <div className=" text-description pb-4 md:pb-7 italic">
        {'Full-Stack developer from Ukraine'}
      </div>
      <div className="md:hidden pb-4 w-full  relative">
        <Image
          src={getImageUrl('/main_page_mobile.png')}
          alt="main_mobile"
          width={360}
          height={200}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      <div className="flex flex-col justify-between gap-4 scrollable-container min-h-[20%] max-h-fit md:pr-4">
        {summary.map((part, i) => (
          <div key={i} className=" text-description font-normal text-justify px-4 md:px-0">
            {part}
          </div>
        ))}
      </div>
    </div>
  );
};
