"use client";

import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)]">
            <Navbar />

            {/* profile page */}
            <div className="mx-auto w-11/12 md:w-10/12 pt-25 pb-16 md:pt-28">
                <div className="mb-8">
                    <p className="text-sm font-bold text-emerald-500">
                        Hello, <span>{user?.name || "Reader"}</span>
                    </p>

                    <h1 className="mt-2 bg-linear-to-r from-slate-900 via-primary to-orange-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                        Profile
                    </h1>
                </div>

                <section className="grid gap-6 lg:grid-cols-[380px_1fr]">
                    {/* Profile Card */}
                    <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 text-center shadow-2xl shadow-amber-900/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-primary/20">
                        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-primary/10 shadow-lg">
                            {user?.image ? (
                                <img src={user.image} alt={user?.name || "User profile"} className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-5xl font-black text-primary">
                                    {user?.name?.charAt(0) || "R"}
                                </div>
                            )}
                        </div>

                        <h2 className="mt-5 text-2xl font-black text-neutral">
                            {user?.name || "Library Reader"}
                        </h2>

                        <p className="mt-2 text-sm font-medium text-neutral/50">
                            {user?.email || "No email found"}
                        </p>

                        <div className="mt-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
                            Active Member
                        </div>

                        <br /><br />

                        <UpdateUserModal />
                    </div>

                    {/* Details Card */}
                    <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-2xl shadow-amber-900/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-primary/20 sm:p-8">
                        <h2 className="text-2xl font-black text-neutral">
                            Account Information
                        </h2>

                        <div className="mt-6 grid gap-4">
                            <ProfileInfo label="Name" value={user?.name || "Not available"} />
                            <ProfileInfo label="Email" value={user?.email || "Not available"} />
                            <ProfileInfo label="User ID" value={user?.id || "Not available"} />
                        </div>

                        <div className="mt-8 rounded-3xl border border-amber-100 bg-white/70 p-5">
                            <h3 className="text-lg font-black text-neutral">
                                Library Summary
                            </h3>

                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                <SummaryBox value="0" label="Borrowed" />
                                <SummaryBox value="0" label="Returned" />
                                <SummaryBox value="24/7" label="Access" />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/all-books"
                                className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-black text-primary-content shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:bg-neutral hover:text-neutral-content active:scale-95"
                            >
                                Browse Books
                            </Link>

                            <Link href="/" className="inline-flex justify-center rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-black text-neutral/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-100 hover:text-orange-600 active:scale-95" >
                                Back Home
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <FooterPage />
        </div>
    );
};

export default ProfilePage;

function ProfileInfo({ label, value }) {
    return (
        <div className="rounded-2xl border border-amber-100 bg-white/70 p-4 transition duration-300 hover:bg-white hover:shadow-md">
            <p className="text-xs font-black uppercase tracking-wider text-neutral/40">
                {label}
            </p>
            <p className="mt-1 text-sm font-bold text-neutral/70">
                {value}
            </p>
        </div>
    );
}

function SummaryBox({ value, label }) {
    return (
        <div className="rounded-2xl bg-linear-to-br from-white to-amber-50 p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-2xl font-black text-primary">{value}</p>
            <p className="mt-1 text-xs font-black uppercase tracking-wider text-neutral/40">
                {label}
            </p>
        </div>
    );
}