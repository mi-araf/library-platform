import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import Image from "next/image";

const BookCard = ({ book, compact = false }) => {

    return (
        <article className="group glass-card overflow-hidden rounded-4xl transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl border-[1.5px] border-zinc-500/60 bg-base-100">
            <div className={compact ? "h-56 overflow-hidden" : "h-64 overflow-hidden "}>
                <Image src={book.image_url} alt={book.title} width={500} height={0} className="h-full w-full object-contain py-4 transition duration-700 group-hover:scale-107 bg-zinc-200/60" />
            </div>
            <div className="divider p-0 m-0 h-0"></div>
            <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="badge badge-sm badge-dash badge-secondary badge-outline font-bold">{book.category}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-base-content/60">
                        <BookMarked className="h-4 w-4 text-primary" /> {book.available_quantity} left
                    </span>
                </div>
                <h3 className="text-xl font-black leading-tight text-neutral">{book.title}</h3>
                {!compact && <p className="mt-1 text-sm font-medium text-base-content/60">by <span className="font-semibold">{book.author}</span></p>}
                {!compact && <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/70">{book.description}</p>}
                <Link href={`/books/${book.id}`} className="btn btn-sm mt-5 rounded-full bg-[#FF9900] text-black border-[#e17d00] hover:bg-[#e17d00] hover:border-[#e17d00] transition-all duration-300 hover:scale-105 active:scale-95 group" >
                    View Details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
            </div>
        </article>
    );
};

export default BookCard;