"use client"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"


import slide1 from "@/public/slider/slideShow1.6f890b58.jpg"
import slide2 from "@/public/slider/slideShow2.ce4d5430.jpg"
import slide3 from "@/public/slider/slideShow3.0006489a.jpg"
import slide4 from "@/public/slider/slideShow4.d9ba1e2d.jpg"
import slide5 from "@/public/slider/slideShow5.b502aa01.jpg"
import slide6 from "@/public/slider/slideShow6.03103579.jpg"
import slide7 from "@/public/slider/slideShow7.9e3fcc75.jpg"
import slide8 from "@/public/slider/slideShow8.4b79537a.jpg"
  

function Slider() {
    const sliders = [slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8]
  return (  
  <Carousel
    plugins={[Autoplay({delay:1800})]}
    opts={{
      align: "start",
    }}
    className="w-screen p-32 border-none"
  >
    <CarouselContent>
      {sliders.map((slider ,index )=>(
        <CarouselItem key={index} className="md:basis-[100%] lg:basis-1/2">
          <div className=" rounded-lg">
            <Card className="cursor-pointer outline-none border-none" >
              <CardContent className="flex aspect-square items-center justify-center  ">
                <span className="text-3xl font-semibold  ">
                    <Image 
                        alt="slides-images" 
                        loading="lazy" 
                        width="1600" 
                        height="1068" 
                        decoding="async" 
                        data-nimg="1" 
                        className="w-full h-[300px]  md:h-[600px] object-cover" 
                        style={{color:"transparent"}} 
                        src={slider}/>                                    
                  
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>

             
             
    )

}

export default Slider

