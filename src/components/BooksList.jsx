"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";

const BooksList = ({ books = [] }) => {
    const [search, setSearch] = useState("");

    const searchedBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            {/* Search Bar */}
            <form
                onSubmit={handleSearch}
                className="mb-6 rounded-3xl border border-white/70 bg-white/75 p-3 shadow-xl shadow-amber-900/10 backdrop-blur-xl"
            >
                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-amber-100 bg-white px-5 py-4 transition duration-300 focus-within:border-primary/40 focus-within:shadow-lg focus-within:shadow-primary/10">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search books by title..."
                            className="w-full bg-transparent text-sm font-semibold text-neutral outline-none placeholder:text-neutral/35"
                        />

                        {search && (
                            <button
                                type="button"
                                onClick={() => setSearch("")}
                                className="grid h-7 w-7 place-items-center rounded-full bg-neutral/10 text-sm font-black text-neutral/50 transition duration-300 hover:bg-primary hover:text-primary-content"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <button type="submit" className="rounded-2xl bg-primary px-8 py-4 text-sm font-black text-primary-content shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-neutral hover:text-neutral-content active:scale-95 cursor-pointer" >
                        Search
                    </button>
                </div>
            </form>

            <p className="mb-5 text-sm font-bold text-neutral/50">
                Showing {searchedBooks.length} book{searchedBooks.length !== 1 && "s"}
            </p>

            {searchedBooks.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {searchedBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="rounded-3xl border border-white/70 bg-white/75 p-10 text-center shadow-xl shadow-amber-900/10">
                    <h2 className="text-2xl font-black text-neutral">
                        No books found
                    </h2>
                    <p className="mt-2 text-sm font-medium text-neutral/50">
                        Try another title or clear the search box.
                    </p>
                </div>
            )}
        </div>
    );
};

export default BooksList;