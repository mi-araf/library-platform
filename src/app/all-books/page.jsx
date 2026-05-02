import BookCard from "@/components/BookCard";
import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: `All Books || Araf's Libraray`,
}

const AllBooksPage = async () => {
    const res = await fetch('https://library-platform-mi-araf.vercel.app/db.json');
    const books = await res.json();

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)]">
            <Navbar />
            <main className="mx-auto w-11/12 md:w-10/12 pt-25 pb-16 md:pt-28">
                <h1 className="text-2xl font-bold m-3">All Books</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        books.map((book) => <BookCard key={book.id} book={book} />)
                    }
                </div>

            </main>
            <FooterPage />
        </div>
    );
}

export default AllBooksPage;