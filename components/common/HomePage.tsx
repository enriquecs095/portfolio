import Link from 'next/link';
import React, {useState} from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs/index';
import {AiFillGitlab} from "react-icons/ai";
import FadeIn from 'react-fade-in';

export const HomePage = () => {
   return (
      // from-primary to-slate-900 text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20
      <div className="hero  bg-base-200 sm:pt-20 pt-5 border-b border-base-300 " id="About">
         <div className="hero-content text-center">
            <div className="max-w-4xl">
               <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-7 estils sm:border-r-4 border-r border-base-300"> Hi, I am Enrique Cruz.</h1>
               <FadeIn>
                  <h1 className="sm:text-3xl text-2xl font-bold ">DevOps Engineer.</h1>

                  <div className="max-w-md mx-auto">
                     <p className="py-6 w-auto">
                        Skilled DevOps Engineer with hands-on experience supporting, automating, and optimizing mission critical deployments in AWS, 
                        leveraging configuration management, CI/CD Pipeline, and DevOps processes.
                     </p>
                  </div>

                  <div className="flex justify-center gap-2" id="Education">
                     <Link href="https://github.com/enriquecs095">
                        <a className="btn btn-ghost" target="_blank">
                           <BsGithub className="w-7 h-7 " />
                        </a>
                     </Link>
                     <Link href="https://www.linkedin.com/in/enrique-cruz-sanchez-2499b71a8/">
                        <a className="btn btn-ghost" target="_blank">
                           <BsLinkedin className="w-7 h-7" />
                        </a>
                     </Link>
                     <Link href="https://gitlab.com/enriquecs">
                        <a className="btn btn-ghost" target="_blank">
                           <AiFillGitlab className="w-7 h-7" />
                        </a>
                     </Link>
                  </div>
               </FadeIn>
               {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
         </div>
      </div>
   );
};
