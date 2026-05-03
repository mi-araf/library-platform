"use client";

import Link from "next/link";
import { BookOpen, Menu, Sparkles, UserCheck2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-books", label: "All Books" },
    { href: "/profile", label: "View Profile" },
];

export default function Navbar() {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/");
                    router.refresh();
                },
            },
        });
    };

    const pathname = usePathname();
    const router = useRouter();

    const nav = (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`rounded-full px-4 font-semibold transition-all hover:bg-primary/15 hover:text-primary ${isActive ? "bg-primary/15 text-primary" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </>
    );

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-6 py-3">
            <div className="navbar mx-auto w-12/12 md:w-10/12 rounded-4xl border border-white/70 bg-white/75 shadow-xl shadow-amber-900/5 backdrop-blur-2xl">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} aria-label="Open menu" className="btn btn-ghost btn-circle" >
                            <Menu className="h-5 w-5" />
                        </button>

                        <ul tabIndex={0} className="menu dropdown-content z-1 mt-3 w-56 rounded-box bg-base-100 p-2 shadow-xl" >
                            {nav}
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost gap-2 rounded-full text-sm md:text-xl font-medium md:font-extrabold tracking-tight px-0 md:px-4" >
                        <span className="grid w-8 h-8 md:h-10 md:w-10 place-items-center  rounded-2xl bg-emerald-500 text-primary-content shadow-mango">
                            <BookOpen className="h-5 w-5" />
                        </span>
                        <span><span className="bg-linear-to-r from-primary via-fuchsia-400 to-orange-500 bg-clip-text text-transparent ">Araf&lsquo;s</span> Library</span>
                    </Link>
                </div>

                <nav className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">{nav}</ul>
                </nav>

                <div className="navbar-end gap-2 px-2 md:gap-3">
                    {
                        !user &&
                        <Link href="/signin" className="btn btn-sm rounded-full btn-primary shadow-mango">
                            <UserCheck2 className="h-4 w-4" />
                            Login
                        </Link>
                    }

                    {
                        user && (
                            <div className="flex gap-2 md:gap-4 items-center">
                                <h4 className="text-sm md:text-base font-medium md:font-semibold"> <span className="hidden sm:inline-flex">Hi!</span> <span className="bg-linear-to-r from-primary via-fuchsia-400 to-orange-500 bg-clip-text text-transparent">{user?.name}</span></h4>
                                <button onClick={handleSignOut} className="btn btn-sm rounded-full btn-warning">Log Out</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    );
}