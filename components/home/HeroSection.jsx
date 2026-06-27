import Link from 'next/link'
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="border">
        <div>
            <div>
                <div>
                    <h1 className="text-6xl font-bold text-red-700">Mark Estareja</h1>
                    <h2>WEB DEVELOPER | UI/UX DESIGNER | GRAPHIC DESIGNER</h2>
                </div>
                <p>I design and develop responsive websites using modern web technologies, with a strong focus on performance, usability, and clean UI.</p>
            </div>
            <div>
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
