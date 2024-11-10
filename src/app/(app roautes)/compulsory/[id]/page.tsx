import Link  from "next/link"



function Compulsory({params}:{params:{id:string}}) {
  const coursesId = "0"

  return(
    <>
       <div className="flex w-full mb-20 ">
        <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto md:flex block justify-between mt-20 gap-10 relative">
        <div className="md:w-[270px] w-full h-fit md:border-none border border-zinc-300 md:rounded-none rounded-lg flex-shrink-0 md:sticky relative md:top-40 top-0">
          <div className="h-fit rounded-lg p-3 bg-gray-50 ">
            <h2 className="font-normal text-[#f1f1f1] text-sm leading-tight bg-[#005080] p-3 rounded-lg">
              Core Courses Sequence
            </h2>
            <ul className="mt-2 text-zinc-800">
              <Link href="/compulsory/1">
                <li className="py-[5px] pl-5 text-sm tracking-widest border-l-[2px] border-[#c2c2c2] text-[#41C9EA]">
                  Programming Fundamentals
                </li>
              </Link>
              <Link href="/compulsory/2">
                <li className="py-[5px] pl-5 text-sm tracking-widest border-l-[2px] border-[#c2c2c2] text-[#41C9EA]">
                  Web2 Using NextJS
                </li>
              </Link>
              <Link href="/compulsory/3">
                <li className="py-[5px] pl-5 text-sm tracking-widest border-l-[2px] border-main text-sub text-[#41C9EA]">
                  Earn as You Learn
                </li>
              </Link>
           </ul>
          </div>
          <div className="mt-8 md:p-0 p-2">
            <h3 className="font-bold text-zinc-800 text-base leading-tight">
              Advanced Courses
            </h3>
            <div className="flex flex-col gap-2 mt-3">
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                  href="/tracks/wmd/4">
                    Web 3 and Metaverse
              </Link>
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                    href="/tracks/cnc/4">
                      Cloud-Native Computing
              </Link>
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                    href="/tracks/ai/4">
                      Artificial Intelligence (AI) and Deep Learning
              </Link>
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                  href="/tracks/iot/4">
                    Ambient Computing and IoT
              </Link>
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                  href="/tracks/gbs/4">
                    Genomics and Bioinformatics
              </Link>
              <Link className="py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white" 
                  href="/tracks/npa/4">
                    Network Programmability and Automation
              </Link>
            </div>
          </div>
        </div>
  
        {params.id ==="1" &&
        <div className="md:w-[80%] w-full md:mt-0 mt-14">
       <div className="w-full lg:p-0 p-3 rounded-md">
        <div className="sm:flex block py-3 justify-between mt-5 border-b border-zinc-300 mb-5 pb-3">
          <h1 className="lg:text-3xl md:text-xl text-3xl text-zinc-800 font-bold">
            Programming Fundamentals
          </h1>
        <div className="text-sm text-center sm:mt-0 mt-5 rounded-lg text-zinc-800 flex xs:gap-5 gap-2 items-center w-fit">
        <span className="w-4">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z">
          </path>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z">
          </path>
        </svg>
      </span>
      <p>
        <span className="font-bold">
          Duration: 
        </span>
          ( 13 Weeks )
        </p>
    </div>
  </div>
  <div className="border-b-8 border-zinc-900 md:px-5 px-3 py-5 rounded-md bg-gray-50 mb-14 relative overflow-hidden">
    <h1 className="lg:text-4xl text-3xl font-bold text-zinc-800">
      Common In All Specializations
    </h1>
    <p className="text-zinc-800 mt-2">
      CS-101: Object-Oriented Programming using TypeScript
    </p>
  </div>
  <div className="text-zinc-800">
    <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 ">
      Course Description
    </h1>
    <div className="mt-5">
      <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
      </p>
    </div>
  </div>
  <div className="mt-12">
    <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 text-zinc-800">
      Course Outline
    </h1>
    <div className="mt-10">
      <div>
        <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
          1. HTML and CSS (Homework)
        </h1>
        <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
          <div className="mt-4 mb-4"><div className="">
          <Link 
            href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" 
            target="_blank" 
            className="text-blue-600 flex items-center gap-3 w-fit">
              <span className="w-[4]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                  className="text-zinc-800" height="16" width="16" 
                  xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                    </path>
                </svg>
              </span>
              <span className="lowercase">
                Learn HTML by Hira Khan (Watch Recorded Videos)
              </span>
          </Link>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <div className="">
          <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" 
            target="_blank" 
            className="text-blue-600 flex items-center gap-3 w-fit">
              <span className="w-[4]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                  className="text-zinc-800" height="16" width="16" 
                  xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                    </path>
                </svg>
              </span>
              <span className="lowercase">
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div>
  <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
    2. Web 3.0 and Metaverse Theory
  </h1>
  <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
    <div className="mt-4 mb-4">
      <div className="">
        <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" 
          target="_blank" 
          className="text-blue-600 flex items-center gap-3 w-fit">
            <span className="w-[4]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
              className="text-zinc-800" height="16" width="16" 
              xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                </path>
            </svg>
           </span> 
        <span className="lowercase">
          Introduction to Panaverse DAO
        </span>
      </Link>
    </div>
  </div>
  <div className="mt-4 mb-4"><div className="">
    <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" 
      target="_blank" 
      className="text-blue-600 flex items-center gap-3 w-fit">
      <span className="w-[4]">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
        className="text-zinc-800" height="16" width="16" 
        xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
          </path>
      </svg>
      </span>
      <span className="lowercase">
        Web 3.0 User Guide
      </span>
    </Link>
  </div>
</div>
<div className="mt-4 mb-4">
  <div className="">
  <p>
    Complete Web 3 Assignments included in the Web 3 User Guide
  </p>
 </div>
</div>
<div 
className="mt-4 mb-4"><div className="">
    <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" 
    target="_blank" className="text-blue-600 flex items-center gap-3 w-fit">
      <span className="w-[4]">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
            className="text-zinc-800" height="16" width="16" 
            xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                </path>
          </svg>
        </span>
        <span className="lowercase">
          Virtual and Augmented Metaverse User Guide
        </span>
    </Link>
  </div>
 </div>
</div>
</div>
  <div>
    <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
      3. Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
    </h1>
    <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
      <div className="mt-4 mb-4">
        <div className="">
          <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" 
              target="_blank" className="text-blue-600 flex items-center gap-3 w-fit">
                <span className="w-[4]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                      className="text-zinc-800" height="16" width="16" 
                        xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                          </path>
                     </svg>
                  </span>
                <span className="lowercase">
                    Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                </span>
            </Link>
          </div>
        </div>
        <div className="mt-4 mb-4">
            <div className="">
              <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" 
                  target="_blank" 
                  className="text-blue-600 flex items-center gap-3 w-fit">
                    <span className="w-[4]">
                        <svg stroke="currentColor" 
                          fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                            className="text-zinc-800" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                </path>
                          </svg>
                        </span>
                        <span className="lowercase">
                            Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages
                         </span>
                      </Link>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="">
                      <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" 
                        target="_blank" className="text-blue-600 flex items-center gap-3 w-fit">
                            <span className="w-[4]">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                  className="text-zinc-800" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                        </path>
                                  </svg>
                              </span>
                              <span className="lowercase">
                                  JavaScript Book Code
                                </span>
                          </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                    <div className="">
                      <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" 
                          target="_blank" 
                          className="text-blue-600 flex items-center gap-3 w-fit">
                            <span className="w-[4]">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                className="text-zinc-800" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                              </span>
                            <span className="lowercase">Getting Started Exercises with JavaScript and Node.js</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                      4. Fundamentals of JavaScript and Node.js Quiz
                  </h1>
                  <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                    <div className="mt-4 mb-4"><div className="">
                      <p className="text-xl font-extrabold text-zinc-800">
                        Topics Covered in the Quiz:
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <div className="">
                      <p>
                        Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <div className="">
                      <ul className="list-disc ml-10">
                        <li className="mb-2 mt-2">
                          <div>
                            <p>Background of JavaScript and How to use JavaScript in Browser</p>
                          </div>
                        </li>
                        <li className="mb-2 mt-2">
                          <div>
                            <p>Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</p>
                          </div>
                        </li>
                        <li className="mb-2 mt-2">
                          <div>
                            <p>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:</p>
                          </div>
                          <div>
                            <Link 
                              href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" 
                              target="_blank" 
                              className="text-blue-600 flex items-center gap-3">
                                <span className="w-[10px]">
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                    className="text-zinc-800" height="16" width="16" 
                                      xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                  </span>
                                  <span className="lowercase">
                                    Node.js Intro
                                  </span>
                              </Link>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
                              </p>
                            </div>
                            <div>
                              <Link href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" 
                                  target="_blank" 
                                  className="text-blue-600 flex items-center gap-3">
                                    <span className="w-[10px]">
                                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                          className="text-zinc-800" height="16" width="16" 
                                          xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                              </path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                          Node.js Intro
                                        </span>
                                </Link>
                            </div>
                            <div>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
                              </p>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
                              </p>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
                              </p>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
                              </p>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
                              </p>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                JavaScript promises, mastering the asynchronous
                              </p>
                            </div>
                            <div>
                            </div>
                          </li>
                          <li className="mb-2 mt-2">
                            <div>
                              <p>
                                New JavaScript Features in ECMAScript 2022 and 2021
                              </p>
                            </div>
                            <div>
                            </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                  5. Object-Oriented Programming with TypeScript
                </h1>
                <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                  <div className="mt-4 mb-4">
                    <div className="">
                      <p>
                        Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                      </p>
                    </div>
                    <div className="">
                      <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" 
                          target="_blank" 
                          className="text-blue-600 flex items-center gap-3 w-fit">
                            <span className="w-[4]">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                  className="text-zinc-800" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                      </path>
                                </svg>
                              </span>
                              <span className="lowercase">
                                Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                              </span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                      <div className="">
                        <p>
                          Learning TypeScript in Baby Steps
                        </p>
                      </div>
                      <div className="">
                        <Link href="https://github.com/panaverse/learn-typescript" 
                          target="_blank" 
                          className="text-blue-600 flex items-center gap-3 w-fit">
                            <span className="w-[4]">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                  className="text-zinc-800" height="16" width="16" 
                                  xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                              </span>
                              <span className="lowercase">
                                Learning Repository
                              </span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                      <div className="">
                        <p>
                          In className Companion projects and articles for Learning TypeScrip
                        </p>
                      </div>
                      <div className="">
                        <Link href="https://www.learningtypescript.com/" 
                          target="_blank" 
                          className="text-blue-600 flex items-center gap-3 w-fit">
                            <span className="w-[4]">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                  className="text-zinc-800" height="16" width="16" 
                                  xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                      </path>
                                </svg>
                            </span>
                            <span className="lowercase">
                              TypeScript book for JavaScript developers out today
                            </span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                      <div className="">
                        <p>
                          Homework Project
                        </p>
                      </div>
                      <div className="">
                        <Link href="https://github.com/panaverse/typescript-node-projects" 
                            target="_blank" 
                            className="text-blue-600 flex items-center gap-3 w-fit">
                              <span className="w-[4]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                    className="text-zinc-800" height="16" width="16" 
                                    xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                      </path>
                                </svg>
                              </span>
                              <span className="lowercase">
                                Programming Projects to Learn TypeScript and Node.js
                              </span>
                           </Link>
                          </div>
                        </div>
                        <div className="mt-4 mb-4">
                          <div className="">
                            <p className="text-xl font-extrabold text-zinc-800">
                                Typescript Quizzes</p></div><div className="">
                                  <p>
                                    Fundamentals of TypeScript Quiz
                                  </p>
                            </div>
                            <div className="">
                              <p>TypeScript Professional Proficiency Quiz</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                          6. TypeScript for React
                      </h1>
                      <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                        <div className="mt-4 mb-4">
                          <div className="">
                            <p>Minimal TypeScript Crash Course For React With Interactive Code Exercises</p>
                          </div>
                        </div>
                      <div className="mt-4 mb-4">
                        <div className="">
                          <Link href="https://profy.dev/article/react-typescript" 
                              target="_blank" 
                              className="text-blue-600 flex items-center gap-3 w-fit">
                                <span className="w-[4]">
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                    className="text-zinc-800" height="16" width="16" 
                                    xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                        </path>
                                  </svg>
                                  </span>
                                  <span className="lowercase">
                                    Typescript For React Crash Course
                                  </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                        7. Quarter Break Assignments and Quizzes
                      </h1>
                      <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                        <div className="mt-4 mb-4">
                          <div className="">
                            <p>
                              During the Quarter Break, we do the following Assignments: 
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 mb-4">
                          <div className="">
                            <ul className="list-disc ml-10">
                              <li className="mb-2 mt-2">
                                <div>
                                  <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge" 
                                      target="_blank" 
                                      className="text-blue-600 flex items-center gap-3">
                                        <span className="w-[10px]">
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                              className="text-zinc-800" height="16" width="16" 
                                              xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                                  </path>
                                          </svg>
                                        </span>
                                        <span className="lowercase">
                                          Assignment : Cloud To Edge
                                        </span>
                                    </Link>
                                  </div>
                              </li>
                              <li className="mb-2 mt-2">
                                <div>
                                  <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app" 
                                      target="_blank" 
                                      className="text-blue-600 flex items-center gap-3">
                                        <span className="w-[10px]">
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                          className="text-zinc-800" height="16" width="16" 
                                          xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                        Todo App
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li className="mb-2 mt-2">
                                  <div>
                                    <Link href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui" 
                                        target="_blank" 
                                        className="text-blue-600 flex items-center gap-3">
                                          <span className="w-[10px]">
                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                                className="text-zinc-800" height="16" width="16" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                          </span>
                                          <span className="lowercase">
                                            Pricing Ui
                                          </span>
                                    </Link>
                                  </div>
                                </li>
                                <li className="mb-2 mt-2">
                                  <div>
                                    <p>Build Link Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:</p>
                                  </div>
                                  <div>
                                    <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing" target="_blank" 
                                      className="text-blue-600 flex items-center gap-3">
                                        <span className="w-[10px]">
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                              className="text-zinc-800" height="16" width="16" 
                                              xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                          </svg>
                                        </span>
                                        <span className="lowercase">
                                            Panaverse DAO Syllabus
                                        </span>
                                    </Link>
                                  </div>
                                  <div></div>
                                </li>
                                <li className="mb-2 mt-2">
                                  <div>
                                    <p>Build Link new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:</p>
                                  </div>
                                  <div>
                                    <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing" target="_blank" 
                                        className="text-blue-600 flex items-center gap-3">
                                          <span className="w-[10px]">
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                              className="text-zinc-800" height="16" width="16" 
                                              xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                          </svg>
                                         </span>
                                         <span className="lowercase">
                                            PIAIC Syllabus
                                         </span>
                                      </Link>
                                    </div>
                                    <div></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="">
                              <p>After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                            </div>
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="">
                              <p className="text-xl font-extrabold text-zinc-800">
                                Fundamentals of Version Control with Git Quiz
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="">
                              <p>Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</p>
                            </div>
                            <div className="">
                              <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" 
                                  target="_blank" 
                                  className="text-blue-600 flex items-center gap-3 w-fit">
                                    <span className="w-[4]">
                                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                          className="text-zinc-800" height="16" width="16" 
                                          xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                      </svg>
                                    </span>
                                    <span className="lowercase">
                                      Video Link
                                    </span>
                                </Link>
                              </div>
                            </div>
                            <div className="mt-4 mb-4">
                              <div className="">
                                <p>Chapters 1, 2, 3, and 4 Learn Version Control with Git: Link step-by-step course for the complete beginner by Tobias Günther</p>
                              </div>
                            </div>
                            <div className="mt-4 mb-4">
                              <div className="">
                                <p className="text-lg font-extrabold text-zinc-800">
                                    We will also cover these readings:
                                </p>
                              </div>
                              <div className="">
                                <Link href="https://help.github.com/articles/markdown-basics/" target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                        Getting started with writing and formatting on GitHub
                                      </span>
                                  </Link>
                              </div>
                              <div className="">
                                <Link href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                          Difference between fork and branch on github
                                      </span>
                                  </Link>
                              </div>
                              <div className="">
                                <Link href="https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon" 
                                    target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                              xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                          </svg>
                                      </span>
                                      <span className="lowercase">
                                        What are the differences between git branch, fork, fetch, merge, rebase and clone?
                                      </span>
                                  </Link>
                              </div>
                              <div className="">
                                <Link href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                        Git Branching - Rebasing
                                      </span>
                                  </Link>
                               </div>
                               <div className="">
                                <Link href="https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">
                                        Git Branching - Remote Branches
                                      </span>
                                  </Link>
                               </div>
                               <div className="">
                                <Link href="https://docs.github.com/en/get-started/quickstart/set-up-git" target="_blank" 
                                    className="text-blue-600 flex items-center gap-3 w-fit">
                                      <span className="w-[4]">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                            className="text-zinc-800" height="16" width="16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                      </span>
                                      <span className="lowercase">Practice</span>
                                  </Link>
                                </div>
                              </div>
                              <div className="mt-4 mb-4">
                                <div className="">
                                  <p className="text-lg font-extrabold text-zinc-800">
                                    We will also cover these readings:
                                  </p>
                                </div>
                                <div className="">
                                  <Link href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" target="_blank" 
                                      className="text-blue-600 flex items-center gap-3 w-fit">
                                        <span className="w-[4]">
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                              className="text-zinc-800" height="16" width="16" 
                                              xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                          </svg>
                                        </span>
                                        <span className="lowercase">
                                          Introduction to git for data science</span>
                                     </Link>
                                  </div>
                                </div>
                                <div className="mt-4 mb-4">
                                  <div className="">
                                    <p className="text-lg font-extrabold text-zinc-800">
                                      Git Quiz
                                    </p>
                                  </div>
                                  <div className="">
                                    <p>Total Questions: 60, Total Time: 75 minutes</p>
                                  </div>
                                </div>
                                <div className="mt-4 mb-4">
                                  <div className="">
                                    <p className="text-xl font-extrabold text-zinc-800">
                                      TypeScript Proficiency Quiz
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4 mb-4">
                                  <div className="">
                                    <p>Total Questions: 63</p>
                                  </div>
                                  <div className="">
                                    <p>Duration: 120 minutes</p>
                                  </div>
                                </div>
                                <div className="mt-4 mb-4">
                                  <div className="">
                                    <p>Study Material:</p>
                                  </div>
                                  <div className="">
                                    <Link href="https://github.com/panaverse/learn-typescript " target="_blank" 
                                        className="text-blue-600 flex items-center gap-3 w-fit">
                                          <span className="w-[4]">
                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" 
                                                className="text-zinc-800" height="16" width="16" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                          </span>
                                          <span className="lowercase">
                                            Learn TypeScript
                                          </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
      }
      </div>
    </div>
    
    
    </>
  )
}

export default Compulsory
