import Card from "@/components/card/Card";
import HeroSection from "@/components/heroSection/HeroSection";

import img from "@/public/card-img/imageWebsite.5c6ae62f.jpg"
import img2 from "@/public/card-img/imageWebsite2.a102c7b5.jpg"
import img3 from "@/public/card-img/imageWebsite3.b845fe78.jpg"

import programing from "@/public/courses-img/programming_fundamentals.49cca4e9.jpg"
import web2 from "@/public/courses-img/nextjs.3dff0f70.jpg"
import earn from "@/public/courses-img/earn_as_your_learn.b8248a49.jpg"

import Ai from "@/public/courses-img/AI.39397d24.jpg"
import webMeta from "@/public/courses-img/metaverse.06eccb60.jpg"
import cnc from "@/public/courses-img/cloudComputing.7260492c.jpg"
import iot from "@/public/courses-img/iot.16f7b003.jpg"
import gab from "@/public/courses-img/genomics.b87789f1.jpg"
import npa from "@/public/courses-img/automation.a77dbbe8.jpg"

import Slider from "@/components/slider/Slider";
import CoursesCard from "@/components/coursesCard/CoursesCard";
import Link from "next/link";

export default function Home(){
  return (
    <div className="w-screen">
      <HeroSection/>
      <div className=" xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10 flex flex-col justify-items-center items-center">
        <h1 className="text-blue-900 text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]">
          Certified Cloud Applied Generative AI Engineer (GenEng) 
          and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
          The pace of technological change is accelerating,
          big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure,
          large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. 
          Solopreneurs trained in this program will win by automating work typically outsourced to employees, 
          by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, 
          thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs.
          These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other&nbsp;team&nbsp;members.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-auto sm:m-auto">
        <Card src={img}/>
        <Card src={img2}/>
        <Card src={img3}/>
        <div className=" grid sm:grid-cols-2 grid-cols-1 w-screen mt-10">
        <Slider/>
        </div>
      </div>



      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
        <h1 className=" text-[#005080] lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center font-extrabold mt-10 ">
         Core Courses Sequence
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
          <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/1">
            <CoursesCard title="Programming Fundamentals" src={programing}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/2">
            <CoursesCard title="web2 Using NextJS" src={web2}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/3">
            <CoursesCard title="Earn as You Learn" src={earn}/>
          </Link>

        </div>

      </div>



      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
        <h1 className=" text-[#005080] lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 ">
          Advanced Courses
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Artificial Intelligence" src={Ai}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Web 3 and Metaverse" src={webMeta}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Cloud-Native Computing" src={cnc}/>
          </Link>


          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Ambient Computing and IoT" src={iot}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Genomics and Bioinformatics" src={gab}/>
          </Link>

          <Link className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
            <CoursesCard title="Network Programmability and Automation" src={npa}/>
          </Link>
        </div>

      </div>
      
       
      
    </div>
  
  )
}
  