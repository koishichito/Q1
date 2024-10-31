'use client'

export default function Resume() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
                <div className="text-center w-full text-base">
                    <code className=" text-slate-600">Handle name </code>
                    <ol className="flex flex-col text-center">
                        <li><code className=" text-slate-400">iine</code></li>
                    </ol> 
                </div>
                <div className="text-center w-full text-base">
                    <code className=" text-slate-600">Jobs </code> 
                    <ol className="flex flex-col text-left">
                        <li><code className=" text-slate-400">Y Corporation</code> 2024.09.01 ~</li>
                        <li><code className=" text-slate-400">Z Corporation</code> 2020.09.01 ~ 2024.08.30</li>
                    </ol>
                </div>
                <div className="text-center w-full text-base">
                    <code className=" text-slate-600">Education </code> 
                    <ol className="flex flex-col text-center">
                        <li><code className=" text-slate-400">K University</code></li>
                    </ol> 
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a className="text-gray-600" href="/">back</a>
            </footer>
        </div>
    )
}