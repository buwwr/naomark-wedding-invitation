import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"
import p5 from "../../assets/images/p5.jpg"
import p6 from "../../assets/images/p6.jpg"
import p7 from "../../assets/images/p7.jpg"
import p8 from "../../assets/images/p8.jpg"
import p9 from "../../assets/images/p9.jpg"
import p10 from "../../assets/images/p10.jpg"
import { useRef, useEffect } from 'react'

export default function Carousel() {
    const carouselRef = useRef(null)
    const index = useRef(1)

    const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % images.length

            if (carouselRef.current) {
                carouselRef.current.scrollLeft =
                carouselRef.current.offsetWidth * index.current;
            }
            
        }, 3000)

        return () => clearInterval(interval)
    }, []) 
    
    return (
        <section>
            <div ref={carouselRef} className="carousel mx-2 aspect-video rounded-md">
                {images.map((img, index) => (
                    <div key={index} className="carousel-item relative w-full">
                    <img
                        src={img}
                        className="object-cover object-center w-full"
                    />
                </div>
                ))}
                
            </div>
        </section>
    )
}


{/* <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={p1}
                        className="object-cover w-full"  
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle glass text-rose-400">❮</a>
                        <a href="#slide2" className="btn btn-circle glass text-rose-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle glass text-rose-400">❮</a>
                        <a href="#slide3" className="btn btn-circle glass text-rose-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle glass text-rose-400">❮</a>
                        <a href="#slide4" className="btn btn-circle glass text-rose-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle glass text-rose-400">❮</a>
                        <a href="#slide1" className="btn btn-circle glass text-rose-400">❯</a>
                    </div>
                </div> */}