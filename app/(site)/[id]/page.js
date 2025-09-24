'use client';

import { workData } from '@/assets/assets';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const params = useParams();
  const project = workData.find((p) => p.slug === params.id);

  if (!project) {
    return (
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 p-10 ">
        Project not found
      </div>
    );
  }

  return (
    <>
      <div className="w-11/12 max-w-3xl min-h-screen mx-auto flex flex-col items-center justify-center gap-4 p-10">
        <h1 className="text-4xl font-bold mb-6 w-full text-nowrap font-poppins">
          {project.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2 font-[Montserrat]">
          {project.description}
        </p>
        <div className="space-y-4 w-full">
          <h2 className="text-xl font-semibold font-poppins">
            Project Details
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-montserrat">
            {project.details}
          </p>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-xl font-semibold font-poppins">Tech Stack</h2>
          <ul className="flex justify-start items-center gap-4 flex-wrap">
            {project.techStack.map((item, i) => (
              <li key={i} className="w-14 h-14 relative">
                <Image
                  src={item}
                  alt="icon"
                  fill
                  className="object-contain border border-accent dark:border-white rounded p-2 transition-colors dark:bg-white/95"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-full aspect-square bg-cover bg-center rounded-xl mb-8"
          style={{ backgroundImage: `url(${project.bgImage})` }}
        ></div>
      </div>
    </>
  );
}
