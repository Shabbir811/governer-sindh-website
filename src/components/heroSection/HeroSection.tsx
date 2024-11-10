import Image from "next/image";
import cover from "@/public/cover.1d863e39.png"
import Link from "next/link";
import { Button } from "../ui/button";


function HeroSection() {
  return (
    <div className="w-full sm:w-[90%] z-50 m-auto mt-6 block items-center justify-between md:flex md:flex-row lg:w-[inherit] overflow-hidden ">
        <div className="absolute  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end bg-img h-full  backdrop-blur-3xl"></div>
      <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10 text-blue-900">
        <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
          Governor Sindh
        </h1>
        <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
          Kamran Khan Tessori
        </h1>
        <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider  text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
          Certified Cloud<br/>Applied Generative AI<br/>Engineer (GenEng)
        </h1>
        <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">
          Earn up to $5,000 / month
        </p>
        <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
          Now admissions are open in Hyderabad
        </p>
        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
          <Link className="w-full md:w-auto" 
            href="/apply">
            <Button 
                className="w-full bg-[#184b85] hover:bg-blue-950 rounded-md  py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                APPLY NOW
            </Button>
          </Link>
          <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
            <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                
              <div className="w-60 font-extrabold">
                562,143
              </div>
             
            </div>
            <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
              Accepted Applications
            </div>
          </div>
          
        </div>
      </div>
      <div className={` relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end `} >
        <Image alt="piaic" 
          loading="lazy" 
          width="1600" 
          height="1212" 
          decoding="async" 
          data-nimg="1" 
          className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px] z-0" 
          style={{color:"transparent"}} 
          src={cover}/>
        
      </div>
    </div>
  )
}

export default HeroSection
