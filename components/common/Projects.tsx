import Link from 'next/link';
import React from 'react';
import {BsGithub} from 'react-icons/bs/index';
import {BiLinkExternal} from 'react-icons/bi/index';
import { FaGitlab} from 'react-icons/fa/index';

import Image from 'next/image';
import FadeIn from 'react-fade-in';

export const Projects = () => {
   return (
      <>
         <section className="bg-base-200">
            <FadeIn>
               <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300 ">
                  <h2 className="sm:text-3xl text-2xl font-bold pb-7">Projects and Legacy</h2>
                  <div className="grid xl:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-14 sm:px-2 md:px-2 px-2 ">
                     {ProjectsData.map((project, index) => (
                        <div className="card w-full md:w-80  shadow-2xl image-full shadow-base-100" key={index}>
                           <figure className="relative">
                              <Image quality={100} layout="fill" src={project.image} alt="Shoes" className="blur-md" priority />
                           </figure>
                           <div className="card-body">
                              <h2 className="card-title mx-auto font-bold">{project.title}</h2>
                              <p className="font-semibold ">{project.description}</p>
                              <div className="card-actions justify-center">
                                 <Link href={project.preview}>
                                    <a className="btn btn-ghost" target="_blank">
                                       <BiLinkExternal className="w-7 h-7 " />
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
         </section>
         <div id="Skills"></div>
      </>
   );
};
const ProjectsData = [
   {
      title: 'Time-Off Management',
      description: 'Web application for managing employee absences.',
      image: '/timeoff.png',
      preview: 'https://gitlab.com/enriquecs/timeoff-management-infrastructures',
   },
   {
      title: 'Learning project',
      description: 'Infrastructure as Terraform code that includes VPC, EC2, ACM, and peering connection modules.',
      image: '/terraform.png',
      preview: 'https://gitlab.com/enriquecs/learningproject',
   },
   {
      title: 'My terraform modules',
      description: 'Modules published on Terraform registry for quickly deploying infrastructures.',
      image: '/tf.png',
      preview: 'https://registry.terraform.io/namespaces/enriquecs095',
   },

];
