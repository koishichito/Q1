'use client'

import Image from "next/image"

export default function Photo() {
    // in progress... :(

    // my image files
    const imageList = [
        {
            alt: "image1",
            src: "/images/1.png"
        },
        {
            alt: "image2",
            src: "/images/2.png"
        }
    ]

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
                <div className="text-center w-full text-base">
                    { imageList.map((e)=>(
                        <Image
                            src={e.src}
                            alt={e.alt}
                            key={e.alt}
                            width={160}
                            height={160}
                        />
                    )) }
                    
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a className="text-gray-600" href="/">back</a>
            </footer>
        </div>
    )
}