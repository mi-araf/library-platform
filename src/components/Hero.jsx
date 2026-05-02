import Link from "next/link";
import { ArrowRight, BookOpen, BookOpenCheck, Sparkles, UserCheckIcon, UsersRound } from "lucide-react";
import "animate.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden pb-12 pt-32 md:pt-36">
                <div className=" w-11/12 md:w-10/12 mx-auto">
                    {/* Soft background lights */}
                    <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid items-center gap-10 lg:grid-cols-2">
                            {/*  == LEFT BANNER CONTENT == */}
                            <div className="animate__animated animate__fadeInUp">
                                <div className="inline-flex items-center gap-1 rounded-full border border-amber-200/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wider text-neutral/55 shadow-sm backdrop-blur-xl">
                                    <Sparkles className="h-4 w-4 text-cyan-500 animate-pulse" />
                                    Welcome to<span className="bg-linear-to-r from-primary via-fuchsia-400 to-orange-500 bg-clip-text text-transparent">Araf&apos;s</span>Library
                                </div>

                                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    <span className="bg-linear-to-r from-slate-900 via-primary to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                                        Find Your{" "}
                                    </span>

                                    <span className="relative inline-block bg-linear-to-r from-primary via-fuchsia-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                                        Next Read
                                        <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-linear-to-r from-primary/20 via-fuchsia-400/20 to-orange-400/20" />
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-xl text-base font-medium leading-8 text-neutral/60 sm:text-lg">
                                    Explore fictions, fantasies, adventures, and thoughtful reads
                                    from <span className="bg-linear-to-r from-primary via-fuchsia-400 to-orange-500 bg-clip-text text-transparent">Araf&apos;s</span>  Library. Your next favorite book is waiting
                                    quietly on the shelf.
                                </p>

                                {/* Banner Button */}
                                <div className="mt-6 flex gap-4">
                                    <Link
                                        href="/all-books"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-black text-primary-content shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 active:scale-95 sm:text-base"
                                    >
                                        Browse Now
                                        <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    <Link href="/all-books" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-7 py-3 text-sm font-black text-emerald-950 shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 active:scale-95 sm:text-base">
                                        Regester Now
                                        <UserCheckIcon className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* ==  RIGHT BANNER Image == */}
                            <div className="animate__animated animate__fadeInRight animate__delay-1s">
                                <div className="group relative mx-auto max-w-xl">
                                    {/* background glow effects */}
                                    <div className="absolute -left-5 top-10 h-14 w-14 rounded-full bg-emerald-400/80 blur-sm transition duration-500 group-hover:-translate-x-2 group-hover:scale-110" />
                                    <div className="absolute -right-5 bottom-24 h-16 w-16 rounded-full bg-amber-400/80 blur-sm transition duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                                    <div className="absolute -bottom-5 left-10 h-24 w-24 rounded-full bg-yellow-200/50 blur-2xl transition duration-500 group-hover:scale-125" />

                                    {/* image card */}
                                    <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/70 p-4 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-primary/20 sm:p-6">
                                        <div className="relative overflow-hidden rounded-[1.6rem]">
                                            <Image
                                                src="/icon.png"
                                                alt="Picture of library with books"
                                                width={600}
                                                height={520}
                                                className=" w-full rounded-[1.6rem] object-cover transition duration-700 group-hover:scale-110 h-100"
                                            />

                                            {/* soft image shade */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-60" />

                                            {/* text upon image */}
                                            <div className="absolute bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl border border-white/60 bg-white/85 p-5 shadow-xl shadow-black/10 backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:bg-white/95 sm:bottom-7 sm:p-6">
                                                <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-amber-500">
                                                    Today&apos;s Shelf Whisper
                                                </p>

                                                <h3 className="text-xl font-black leading-snug text-slate-800 sm:text-2xl">
                                                    “Books are portals with page numbers.”
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  == MARQUEE SECTION == */}
                        <div className="mt-5 md:mt-9 rounded-full border border-amber-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md">
                            <Marquee pauseOnHover autoFill speed={45}>
                                <p className="mx-6 whitespace-nowrap text-base text-neutral/60">
                                    New Arrivals: <span className="font-extrabold">The Alchemist</span> & <span className="font-extrabold">The Road</span>
                                    <span className="mx-4 text-primary/50">||</span>
                                    Special Discount on Memberships...
                                    <span className="mx-4 text-primary/50">||</span>
                                    Read. Borrow. Repeat.
                                </p>
                            </Marquee>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
