import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import {
    ArrowLeft,
    BadgeCheck,
    BookOpenCheck,
    Boxes,
    Tag,
    UserRound,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BookDeatilsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://library-platform-mi-araf.vercel.app/db.json');
    const books = await res.json();

    const book = books.find((eachBook) => eachBook.id == id);

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)]">
            <Navbar />

            <Suspense fallback={<span className="loading loading-spinner text-info loading-xl"></span>}>
                <main className="mx-auto w-11/12 md:w-10/12 pt-25 pb-16 md:pt-28">

                    <div>
                        <Link href="/all-books" className="group inline-flex items-center gap-2 rounded-full border border-amber-100 bg-white/75 px-4 py-2 text-sm font-bold text-neutral/60 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-x-1 hover:bg-primary hover:text-primary-content" >
                            <ArrowLeft className="h-4 w-4 transition duration-300 group-hover:-translate-x-1" />
                            Back to All Books
                        </Link>
                    </div> <br />

                    <section className="flex gap-8 flex-col sm:flex-row">
                        {/* cover */}
                        <div className="bg-base-200/90 p-4 rounded-4xl shadow hover:shadow-2xl transition duration-700 ">
                            <Image src={book.image_url} alt={book.title} width={300} height={500} className="rounded-4xl" />
                        </div>

                        {/* Details */}
                        <div className="animate__animated animate__fadeInRight animate__delay-1s">
                            <div className="rounded-4xl border border-white/70 bg-white/70 p-6 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl sm:p-8 lg:p-10">
                                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary shadow-sm">
                                    <BadgeCheck className="h-4 w-4" />
                                    Book Details
                                </div>

                                <h1 className="mt-5 bg-linear-to-r from-slate-900 via-primary to-orange-400 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl">
                                    {book.title}
                                </h1>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                                        <UserRound className="h-4 w-4" />
                                        {book.author}
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                                        <Tag className="h-4 w-4" />
                                        {book.category}
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                                        <Boxes className="h-4 w-4" />
                                        {book.available_quantity} copies left
                                    </span>
                                </div>

                                <p className="mt-6 text-base font-medium leading-8 text-neutral/60">
                                    {book.description}
                                </p>

                                <br />

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-black text-primary-content shadow-lg shadow-primary/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-neutral hover:text-neutral-content hover:shadow-2xl hover:shadow-neutral/20 active:scale-95 sm:text-base">
                                        Borrow This Book
                                        <BookOpenCheck className="h-5 w-5 transition duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                    </button>

                                    <Link
                                        href="/all-books"
                                        className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white/80 px-7 py-3 text-sm font-black text-neutral/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-100 hover:text-orange-600 active:scale-95 sm:text-base"
                                    >
                                        Explore More Books
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </section>

                </main>
            </Suspense>

            <FooterPage />
        </div>
    );
};

export default BookDeatilsPage;