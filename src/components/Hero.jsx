"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import "animate.css";

export default function Hero() {
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


    return (
        <>
            {/*  == HERO / BANNER SECTION == */}
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)] px-4 pb-12 pt-32 sm:px-6 md:pt-36 lg:px-8">
                {/* Soft background lights */}
                <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/*  == LEFT BANNER CONTENT == */}
                        <div className="animate__animated animate__fadeInUp">
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wider text-neutral/55 shadow-sm backdrop-blur-xl">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Welcome to Araf&apos;s Library
                            </div>

                            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-neutral sm:text-5xl md:text-6xl lg:text-7xl">
                                Find Your{" "}
                                <span className="relative inline-block text-primary">
                                    Next Read
                                    <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-primary/15" />
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-neutral/60 sm:text-lg">
                                Explore stories, classics, adventures, and thoughtful reads
                                from Araf&apos;s Library. Your next favorite book is waiting
                                quietly on the shelf.
                            </p>

                            {/* Banner Button */}
                            <div className="mt-8">
                                <Link
                                    href="/all-books"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-black text-primary-content shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 active:scale-95 sm:text-base"
                                >
                                    Browse Now
                                    <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* ==  RIGHT BANNER CARD == */}
                        <div className="animate__animated animate__fadeInRight animate__delay-1s">
                            <div className="rounded-4xl border border-white/70 bg-white/70 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl sm:p-6">
                                <div className="rounded-3xl bg-white/80 p-5 shadow-inner">
                                    <div className="flex items-center gap-4">
                                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                                            <BookOpen className="h-7 w-7" />
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

                                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                        <InfoCard
                                            value={loading ? "..." : `${books.length}+`}
                                            label="Books"
                                        />
                                        <InfoCard
                                            value={
                                                loading
                                                    ? "..."
                                                    : `${new Set(books.map((book) => book.category)).size}+`
                                            }
                                            label="Categories"
                                        />
                                        <InfoCard
                                            value="24/7"
                                            label="Browse"
                                        />
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
                                        <p className="text-sm font-bold leading-7 text-neutral/60">
                                            Start from the All Books page and discover books by
                                            title, author, category, and availability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  == MARQUEE SECTION == */}
                    <div></div>
                </div>
            </section>

        </>
    );
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