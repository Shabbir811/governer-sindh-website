import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"



function CoursesCard({title , src}:{title:string , src:StaticImport}) {
  return (
    <div className="overflow-hidden h-fit  shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
      <div>
        <Image 
      alt={title} 
      loading="lazy" 
      width="450" 
      height="300" 
      decoding="async" 
      data-nimg="1" 
      className="object-cover" 
      style={{color:"transparent"}} 
      src={src}/>
    </div>
    <div className="px-4 flex justify-center items-center h-[70px]">
        <h1>{title}</h1>
    </div> 
  </div>
  )
}

export default CoursesCard
