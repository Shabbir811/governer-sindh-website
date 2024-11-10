import React from 'react'

function Results() {
  return (
    <main className="flex flex-col items-center justify-center">
        <h1 className="my-8 text-center text-lg font-bold text-[#104E83] print:hidden md:text-3xl" 
            style={{fontFamily: "Poppins_092cb9, __Poppins_Fallback_092cb9" ,fontStyle: "normal"}}>
                Grand Entrance Exam Result
        </h1>
        <form className="-top-10 z-10 mx-4 my-10 mt-0 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg sm:mt-10 md:mx-10 md:px-6" noValidate={false}>
            <div className="my-6">
                <label htmlFor="regNo" 
                    className="mb-6 mt-4 text-slate-700 md:text-xl">
                        Registration Number *
                </label>
                <div className="">
                    <input id="regNo" 
                        maxLength={10} max="" 
                        className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded" 
                        placeholder=" Registration Number" 
                        type="tel" 
                        name="regNo"/>
                </div>
            </div>
            <div className="my-6">
                <label htmlFor="cnic" 
                    className="mb-6 mt-4 text-slate-700 md:text-xl">
                        CNIC or B-Form Number *
                </label>
                <div className="">
                    <input id="cnic" 
                    maxLength={13} max="" 
                    className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded" 
                    placeholder=" CNIC or B-Form Number" 
                    type="tel" 
                    name="cnic"/>
                </div>
            </div>
            <div className="flex justify-center">
                <button type="submit" 
                    className="mt-5 w-full bg-[#104E83] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-52 sm:py-4 sm:text-base" 
                    style={{fontFamily: "__Poppins_092cb9, __Poppins_Fallback_092cb9", fontStyle: "normal"}}>
                        GET RESULT
                </button>
            </div>
        </form>
    </main>
  )
}

export default Results
