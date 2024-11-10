import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'


function Card({src}: {src:StaticImport}) {
  return (
    <>
      <Image 
        alt="cards" 
        loading="lazy" 
        width="1088" 
        height="896" 
        decoding="async" 
        data-nimg="1" 
        className=" shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" 
        src={src} 
        style={{color: "transparent"}}/>
    </>
  )
}

export default Card