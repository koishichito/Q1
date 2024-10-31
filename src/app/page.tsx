'use client'
import Link from "next/link";
import { get_data } from "./actions/get_data";
import { useEffect, useState } from "react";

export default function Home() {
  const [ devMenu, setDevMenu ] = useState<any>(<></>)
  useEffect(()=>{
    // next feature!!
    if(process.env.NODE_ENV !== 'production') {
      setDevMenu(
        <>
          <div
            className="rounded-full border border-solid cursor-pointer border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={async ()=>console.log(await get_data('../secret'))}
          >
            Secret
          </div>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/photo"
          >
            Photo
          </Link>
        </>
      )
    }
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center w-full text-4xl mb-6">
          My first <code className=" text-slate-600">BLOG</code> with <code className="text-blue-300">NEXT.JS</code>
        </div>

        <div className="flex gap-4 items-center justify-center w-full flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/resume"
          >
            Resume
          </Link>
          {
            devMenu
          }
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="text-gray-600">Managed by <code className="text-blue-500">iine</code></div>
      </footer>
    </div>
  );
}
