"use client"

import Link from 'next/link'
import Image from 'next/image'


import logo from "@/public/logo.9ff76f62.png"
import { Button } from '../ui/button'
import { useState } from 'react'


function Header() {
  const [showCourses, setShowCourses] = useState("hidden")

  return (
    <div className="sticky top-0 z-30 w-full bg-main bg-[#044E83] backdrop-blur-3xl print:hidden">
        <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
            <Link href="/">
            <Image
              alt="logo" 
              loading='lazy'
              decoding='async'
              data-nimg="1"
              className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
              style={{color:"transparent"}}
              width={90}
              src={logo}
              height={113}/>
            </Link>

            <h1 
            className="shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block lg:text-xl xl:text-2xl">
                Tuition Free Education Program on Latest Technologies
            </h1>
            <h1 
            className="shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
                Tuition Free Program
            </h1>
            <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
                <Link href="/">
                <div className='capitalize'>home</div>
                </Link>

                <Link href="/apply">
                <div className='capitalize'>apply</div>
                </Link>

                <Link href="/jobs">
                <div className='capitalize'>jobs</div>
                </Link>
                <Link href="/result">
                <div className='capitalize'>result</div>
                </Link>
                <div className=''>
                  <Button 
                  onClick={()=> setShowCourses((prevVal)=> prevVal === "hidden" ? "visible" : "hidden")}
                  variant={"ghost"}
                  type="button"
                  aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-:R2ibaH1:">
                    <span className="flex-[1,1,auto] ">
                      Courses
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon w-4 h-4 inline-block [line-hight:1rem]" >
                          <path fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                          </path>
                        </svg>
                    </span>
                  </Button>
                      <div 
                      style={{ minWidth:"maxContent", position: "absolute", inset: "0px 0px auto auto", margin: "0px" , transform:"translate3d(-25px, 60.5px, 0px)", width:"357px"}}
                      className="css-0"data-popper-placement="bottom-end ">
                        <div 
                        className={` ${showCourses} bg-zinc-50 box_shadow h-[300px]  relative right-28 md:right-2 sm:h-auto overflow-y-auto text-zinc-800 p-7 sm:p-4`}
                        style={{transformOrigin: "var(--popperTransformOrigin)", opacity:1 ,transform: "scale(0.8)  translateZ(0px) ariaOrientation:vertical "}}>
                       <div 
                        className="pb-5 border-b border-zinc-300">
                            <h1 className="sm:text-xl text-lg font-bold text-zinc-800 mb-2">Core Courses</h1>
                            <Link href="/compulsory/1">
                            <button 
                            type="button"
                            className=" text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] "
                            id="menu-list-:R2ibaH1:-menuitem-:R1jamiba:"
                            role="menuitem" tabIndex={-1} data-index="0">
                              Programming Fundamentals
                            </button>
                            </Link>
                            <Link href="/compulsory/2">
                            <button 
                            type="button" 
                            className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R2jamiba:" role="menuitem" tabIndex={-1} data-index="1">
                              Web2 Using NextJS
                            </button>
                            </Link>
                            <Link href="/compulsory/3">
                            <button 
                            type="button" 
                            className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R3jamiba:" role="menuitem" tabIndex={-1} data-index="2">
                              Earn as You Learn
                            </button>
                            </Link>
                       </div>
                       <div 
                            className="mt-5">
                                <h1 
                               className="sm:text-xl text-lg font-bold text-zinc-800 mb-2">
                                  Advanced Courses
                                </h1>
                                <Link href="/tracks/wmd/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R1lamiba:" role="menuitem" tabIndex={-1} data-index="3">
                                   Web 3 and Metaverse
                                </button>
                                </Link>
                                <Link href="/tracks/cnc/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R2lamiba:" role="menuitem" tabIndex={-1} data-index="4">
                                  Cloud-Native Computing
                                </button>
                                </Link>
                                <Link href="/tracks/ai/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R3lamiba:" role="menuitem" tabIndex={-1} data-index="5">
                                  Artificial Intelligence (AI) and Deep Learning
                                </button>
                                </Link>
                                <Link href="/tracks/iot/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R4lamiba:" role="menuitem" tabIndex={-1} data-index="6">
                                   Ambient Computing and IoT
                                </button>
                                </Link>
                                <Link href="/tracks/gbs/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R5lamiba:" role="menuitem" tabIndex={-1} data-index="7">
                                  Genomics and Bioinformatics
                                </button>
                                </Link>
                                <Link href="/tracks/npa/4">
                                <button 
                                type="button" 
                                className="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R6lamiba:" role="menuitem" tabIndex={-1} data-index="8">
                                  Network Programmability and Automation
                                </button>
                                </Link>
                          </div>
                        </div>
                      </div>
                  

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
