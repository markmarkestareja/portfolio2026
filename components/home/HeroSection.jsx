import Link from 'next/link'
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="border px-12 md:px-15 lg:px-30">
        <div>
            <div>
                <div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center">Mark Estareja</h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl text-light-2 text-center">WEB DEVELOPER | UI/UX DESIGNER | GRAPHIC DESIGNER</h2>
                </div>
                <p className="text-center">I design and develop responsive websites using modern web technologies, with a strong focus on performance, usability, and clean UI.</p>
            </div>
            <div className="flex flex-col items-center gap-6">
                <Link href="#">Let's Work Together</Link>
                <Link href="#">See My Projects</Link>
            </div>
        </div>

        <div>
            <Image
                src="/images/home/hero-img.png"
                alt="Hero Image"
                width={500}
                height={500}
            />
        </div>
    </div>
  )
}
