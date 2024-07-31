'use client';

import React from 'react';
import SparklesText from '@/components/magicui/sparkles-text';
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import WordRotate from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";
import { useAppContext } from '@/context/AppContext';
import { BorderBeam } from '@/components/magicui/border-beam';
import IconCloud from "@/components/magicui/icon-cloud";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Icons from "@/components/icons/icons-light";
import IconsDark from "@/components/icons/icons-dark";
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];


const Hero = () => {
  const { theme } = useAppContext();

  const lightColors = { first: "#A07CFE", second: "#FE8FB5" };
  const darkColors = { first: "#6042A2", second: "#B25478" };
  const colors = theme === 'light' ? darkColors : lightColors;
  const rotatetext = theme === 'light' ? 'text-purple-900' : 'text-pink-300';
  const backgroundImage = theme === 'dark' ? "url('./bgdark.jpg')" : "url('./bglight.jpg')";

  return (
    <div className='flex flex-col justify-center items-center mx-auto h-screen' style={{ 
      backgroundImage, 
      transition: 'background-image 0.5s ease-in-out' 
    }} >
      <div>
        <TextGenerateEffect
              words="Transforming Concepts into Seamless"
              className="text-center text-white text-[40px] md:text-5xl lg:text-6xl"
            />
        <SparklesText text="User Experiences" colors={colors} />
      </div>
      <div className="z-10 flex min-h-[4rem] items-center justify-center">
        <div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",)}>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ from Pakistan</span>
          </AnimatedShinyText>
        </div>
      </div>
      <BorderBeam>
        <WordRotate
          className={`text-md sm:text-xl md:text-2xl text-center font-bold ${rotatetext} m-1 px-6 w-60 sm:w-80`}
          words={["Web Developer", "Mobile App Developer", "Graphic Designer", "Video Editor", "UI/UX Designer", "Social Media Manager",  ]}
        />
      </BorderBeam>
      <IconCloud iconSlugs={slugs} />
          <Dock>
              <DockIcon link='https://www.github.com/themrsami'>
                {theme === 'light' ? <IconsDark.gitHub className="h-6 w-6" />: <Icons.gitHub className="h-6 w-6" /> }
              </DockIcon>
              <DockIcon link={`https://wa.me/+923124156411?text=${encodeURIComponent('Hello, i came from you website. Can we talk?')}`}>
                {theme === 'light' ?  <IconsDark.whatsapp className="h-6 w-6" /> : <Icons.whatsapp className="h-6 w-6" /> }
              </DockIcon>
              <DockIcon link='https://www.linkedin.com/in/usama-nazir/'>
                {theme === 'light' ? <IconsDark.linkedin className="h-6 w-6" /> : <Icons.linkedin className="h-6 w-6" /> }
              </DockIcon>
            
              <DockIcon link='https://www.x.com/themrsami'>
                {theme === 'light' ?  <IconsDark.twitter className="h-6 w-6" /> : <Icons.twitter className="h-6 w-6" /> }
              </DockIcon>
          </Dock>
    </div>
  );
};

export default Hero;
