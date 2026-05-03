import BooksList from "@/components/BooksList";
import Category from "@/components/Category";
import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: `All Books || Araf's Library`,
};

const AllBooksPage = async ({ searchParams }) => {
    const { category } = await searchParams;

    const res = await fetch("https://library-platform-mi-araf.vercel.app/db.json");
    const books = await res.json();

    const filteredBooks = category
        ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
        : books;

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)]">
            <Navbar />

            <main className="mx-auto w-11/12 md:w-10/12 pt-25 pb-16 md:pt-28">
                <div className="mb-8">
                    <h1 className="bg-linear-to-r from-slate-900 via-primary to-orange-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                        All Books
                    </h1>
                    <p className="mt-2 text-sm font-medium text-neutral/55">
                        Search and filter your next favorite read.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
                    <Category selectedCategory={category} />
                    <BooksList books={filteredBooks} />
                </div>
            </main>

            <FooterPage />
        </div>
    );
};

export default AllBooksPage;