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
        <section className="max-w-sm mx-auto ">
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