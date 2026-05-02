"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, BookOpenCheck, Sparkles, UserCheckIcon, UsersRound } from "lucide-react";
import "animate.css";
import Link from "next/link";

export default function ExtraSections() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("/db.json");

                if (!res.ok) {
                    throw new Error("Failed to fetch books");
                }

                const data = await res.json();

                const booksArray = Array.isArray(data)
                    ? data
                    : Array.isArray(data.books)
                        ? data.books
                        : [];

                setBooks(booksArray);
            } catch (error) {
                console.error("Books fetch error:", error);
                setBooks([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return <div className="overflow-hidden">
        <div className=" w-11/12 md:w-10/12 mx-auto">
            {/* extra section 1 */}
            <div className="animate__animated animate__fadeInRight animate__delay-1s">
                <div className="rounded-4xl mt-4 md:mt-9 border border-white/70 bg-white/70 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl sm:p-6">
                    <div className="rounded-3xl bg-white/80 p-5 shadow-inner">
                        <div className="flex items-center gap-4">
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500 text-primary-content shadow-lg shadow-primary/20">
                                <BookOpen className="h-6 w-6" />
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-wider text-neutral/40">
                                    Online Book Library
                                </p>
                                <h2 className="text-xl font-black text-neutral sm:text-2xl">
                                    Read Better. Borrow Smarter.
                                </h2>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-8 sm:grid-cols-3">
                            <InfoCard
                                value={loading ? "..." : `${books.length}+`}
                                label="Books"
                            />
                            <InfoCard value={
                                loading
                                    ? "..."
                                    : `${new Set(books.map((book) => book.category)).size}+`
                            }
                                label="Categories"
                            />
                            <InfoCard value="24/7" label="Browse" />
                        </div>

                        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-100/50 p-4">
                            <p className="text-sm font-bold leading-7 text-neutral/60">
                                Start from the All Books page and discover books by
                                title, author, category, and availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* extra section 2 */}
            <div className="animate__animated animate__fadeInLeft animate__delay-1s">
                <div className="group relative overflow-hidden rounded-4xl border border-orange-400/60 bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_40%,#ffe8d6_75%,#f7e8ff_100%)] p-6 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-primary/20 sm:rounded-[2.5rem] sm:p-8 md:p-10 lg:p-12 my-12">

                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl transition duration-700 group-hover:scale-125 group-hover:bg-primary/30" />
                    <div className="pointer-events-none absolute -bottom-14 left-10 h-48 w-48 rounded-full bg-orange-300/25 blur-3xl transition duration-700 group-hover:scale-125" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/20 blur-3xl transition duration-700 group-hover:scale-110" />

                    <div className="pointer-events-none absolute left-6 top-6 h-3 w-3 rounded-full bg-primary/50 animate-pulse" />
                    <div className="pointer-events-none absolute bottom-8 right-8 h-4 w-4 rounded-full bg-amber-400/60 animate-pulse" />

                    <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 rounded-full border border-amber-200/80 bg-white/75 px-4 py-2 text-primary shadow-sm backdrop-blur-md">
                                <UsersRound className="h-5 w-5 animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                                    Membership flash
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-4xl bg-linear-to-r from-slate-900 via-primary to-orange-400 bg-clip-text text-3xl font-black leading-13 text-transparent sm:text-4xl md:text-5xl">
                                Special Discount on Memberships
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-neutral/60 sm:text-base">
                                Join the reading circle, unlock quick borrowing habits, and make your browser smell suspiciously like fresh pages.
                            </p>
                        </div>

                        <div className="flex md:justify-end">
                            <Link href="/register" className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-300 px-6 py-3 text-sm font-black text-violet-950 shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:scale-102 hover:bg-violet-400 hover:shadow-2xl hover:shadow-neutral/20 sm:w-auto sm:px-7 sm:py-4 sm:text-base" >
                                Join Araf&apos;s Library
                                <BookOpenCheck className="h-5 w-5 transition duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}


function InfoCard({ value, label }) {
    return (
        <div className="rounded-2xl border border-white/70 bg-white/75 p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <p className="text-2xl font-black text-primary">{value}</p>
            <p className="mt-1 text-xs font-black uppercase tracking-wider text-neutral/45">
                {label}
            </p>
        </div>
    );
}