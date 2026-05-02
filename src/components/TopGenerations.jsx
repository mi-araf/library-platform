import { MdOutlineFeaturedVideo } from "react-icons/md";
import BookCard from "./BookCard";

const TopGenerations = async () => {
    const res = await fetch("https://library-platform-mi-araf.vercel.app/db.json");
    const books = await res.json();
    const topBooks = books.slice(0, 4);

    return (
        <div>
            {/* featured books sections */}
            <div className="mx-auto w-11/12 md:w-10/12 my-2 md:my-5 px-4">
                <div className="border-2 border-purple-300/80 px-3 py-1 rounded-3xl w-fit flex gap-2 text-base font-semibold">
                    <MdOutlineFeaturedVideo className="animate-pulse text-indigo-800 mt-1" />
                    <p className="uppercase text-emerald-500">Featured Books</p>
                </div>
                <h2 className="mt-1 text-2xl font-bold text-neutral md:text-[42px]">Fresh from the Shelf</h2>

                <br />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        topBooks.map((book) => <BookCard key={book.id} book={book} />)
                    }
                </div>
                <br />
            </div>
        </div>
    );
};

export default TopGenerations;