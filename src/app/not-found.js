import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BookOpen, Home, Search, Sparkles } from "lucide-react";
import FooterPage from "@/components/Footer";

export default function NotFound() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-100 px-4 pt-25">
                <section className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold text-amber-700 shadow-sm backdrop-blur">
                        <Sparkles className="h-4 w-4" />
                        Page not found
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
                        <div className="relative grid h-36 w-36 place-items-center rounded-4xl bg-white shadow-2xl shadow-amber-900/10">
                            <BookOpen className="h-16 w-16 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-7xl font-black tracking-tight text-neutral sm:text-8xl">
                        404
                    </h1>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral sm:text-5xl">
                        This page wandered off the shelf.
                    </h2>

                    <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-neutral/70 sm:text-lg">
                        The thing you&lsquo;re looking for may have been moved, borrowed by a very
                        sneaky reader, or never existed in the library.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link href="/" className="btn btn-primary rounded-full shadow-mango">
                            <Home className="h-4 w-4" />
                            Back to Home
                        </Link>

                        <Link href="/all-books" className="btn btn-outline rounded-full">
                            <Search className="h-4 w-4" />
                            Browse Books
                        </Link>
                    </div>
                    
                </section>
            </main>

            <FooterPage />
        </>
    );
}