import Link from "next/link"


function Apply() {
  return (
    <>
      <main className="mb-20 flex flex-col items-center justify-center">
        <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-[#065483] text-[20px] shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
            <h2 className="text-center text-xl text-main xs:text-3xl" 
                style={{fontFamily: "__Poppins_092cb9, __Poppins_Fallback_092cb9,", fontStyle: "normal"}}>
                    Before continuing to the application please subscribe on these social media platforms. 
            </h2>
            <div className="mt-5 flex gap-3  md:text-sm">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center bg-[#FF0000] rounded-full text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                        viewBox="0 0 576 512" className="h-5 w-5 " height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                            </path> 
                     </svg>
                 </div>
            </div>
            <div className="group w-full xs:w-52">
                <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <p>Click the icon above first.</p>
                    </div>
                        <button  
                            className="w-full bg-[#6696B3] py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52" style={{fontFamily: "__Poppins_092cb9, __Poppins_Fallback_092cb9", fontStyle: "normal"}}>
                                CONTINUE
                        </button>
                    </div>
                    <p className="text-center">
                        Already applied? 
                        <Link className="text-blue-400 underline" 
                          href="/admit-card">
                            Get Admit Card
                        </Link>
                        </p>
            </div>
            <div aria-label="Progress" 
                  data-orientation="horizontal" 
                  className=" w-[90%] lg:w-[800px] flex gap-10 !justify-center mx-auto !flex-wrap  text-[#4479A1]">
                                        <div data-status="complete" 
                                            data-orientation="horizontal" 
                                            className="flex gap-2">
                                                <div data-status="complete" 
                                                  className="border-[2px] rounded-[50%] w-8 h-8 text-center border-[#005080]">
                                                    1
                                                    <svg stroke="currentColor" 
                                                        fill="currentColor" 
                                                            stroke-width="0" 
                                                            viewBox="0 0 20 0" 
                                                            aria-hidden="true" 
                                                            height="1em" 
                                                            width="1em" 
                                                            focusable="false" 
                                                            className="">
                                                                <path fill-rule="evenodd" 
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                                                    clip-rule="evenodd">
                                                                </path>
                                                        </svg>
                                                </div>
                                          <div className="">
                                            <h3 data-status="complete" 
                                              className="chakra-step__title capitalize css-1t2dsn0">
                                              facebook
                                            </h3>
                                        </div>
                                        <div role="separator" 
                                            data-orientation="horizontal" 
                                            data-status="complete" 
                                            className="chakra-step__separator css-4t6ey5">
                                        </div>
                                        </div>
                                        <div data-status="incomplete" 
                                            data-orientation="horizontal" 
                                            className="flex gap-2">
                                                <div data-status="active" 
                                                  className="border-[2px] rounded-[50%] w-8 h-8 text-center">
                                                    <div data-status="active" 
                                                    className="chakra-step__number rounded-[50%] css-7mv9cy">
                                                        2
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h3 data-status="active" 
                                                      className="">
                                                        youtube
                                                    </h3>
                                                </div>
                                                <div role="separator" 
                                                  data-orientation="horizontal" 
                                                  data-status="active" 
                                                  className="">
                                                </div>
                                        </div>
                                        <div data-status="incomplete" 
                                          data-orientation="horizontal" 
                                          className="flex gap-2">
                                            <div data-status="incomplete" 
                                              className="">
                                                <div data-status="incomplete" 
                                                  className="border-[2px] rounded-[50%] w-8 h-8 text-center">
                                                    3
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 data-status="incomplete" 
                                                  className="">
                                                    twitter
                                                </h3>
                                            </div>
                                            <div role="separator" 
                                              data-orientation="horizontal" 
                                              data-status="incomplete" 
                                              className="">
                                            </div>
                                        </div>
                                        <div data-status="incomplete" 
                                          data-orientation="horizontal" 
                                          className="flex gap-2">
                                            <div data-status="incomplete" 
                                              className="flex gap-2">
                                                <div data-status="incomplete" 
                                                  className="border-[2px] rounded-[50%] w-8 h-8 text-center">
                                                    4
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 data-status="incomplete" 
                                                  className="">
                                                    instagram
                                                </h3>
                                            </div>
                                            <div role="separator" 
                                              data-orientation="horizontal" 
                                              data-status="incomplete" 
                                              className="">
                                            </div>
                                        </div>
                                        <div data-status="incomplete" 
                                          data-orientation="horizontal" 
                                          className="flex gap-2">
                                            <div data-status="incomplete" 
                                              className="flex gap-2">
                                                <div data-status="incomplete" 
                                                  className="border-[2px] rounded-[50%] w-8 h-8 text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 data-status="incomplete" 
                                                  className="chakra-step__title capitalize css-1t2dsn0">
                                                    Apply
                                                </h3>
                                            </div>
                                        </div>
                             </div>
        </main>
    </>
  )
}

export default Apply


