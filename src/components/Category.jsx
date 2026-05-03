import Link from "next/link";

const Category = async ({ selectedCategory }) => {
    const res = await fetch("https://library-platform-mi-araf.vercel.app/category.json");
    const categories = await res.json();

    return (
        <aside className="h-fit rounded-3xl border border-white/70 bg-white/75 p-4 shadow-xl shadow-amber-900/10 backdrop-blur-xl md:sticky md:top-28">
            <h2 className="mb-2 md:mb-4 text-sm md:text-lg font-black text-neutral">
                Categories
            </h2>

            <div className="flex gap-2 md:gap-3 pb-1 flex-col overflow-visible">
                <Link
                    href="/all-books"
                    className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-content ${!selectedCategory
                            ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                            : "bg-white text-neutral/60"
                        }`}
                >
                    All
                </Link>

                {categories.map((category) => {
                    const isActive =
                        selectedCategory?.toLowerCase() === category.name.toLowerCase();

                    return (
                        <Link
                            key={category.id}
                            href={`/all-books?category=${category.name.toLowerCase()}`}
                            className={`shrink-0 rounded-full px-5 py-2 text-xs md:text-sm  font-bold transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-content ${isActive
                                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                                    : "bg-white text-neutral/60"
                                }`}
                        >
                            {category.name}
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Category;