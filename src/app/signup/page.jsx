"use client";

import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';

export default function SignUpPage() {

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name, email, password, image,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Registration failed");
        } else {
            toast.success("Registration successful! Please log in.");
            await authClient.signOut();
            router.push("/signin");
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };


    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)]">
            <Navbar />

            <div className="pt-26 pb-18 px-5">
                <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center">
                    <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-amber-900/10 backdrop-blur-xl sm:p-8">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400 text-2xl text-white shadow-lg shadow-orange-600/20">
                            +
                        </div>

                        <div className="mt-5 text-center">
                            <h1 className="text-4xl font-black text-neutral">
                                Register
                            </h1>
                            <p className="mt-2 text-sm font-medium text-neutral/50">
                                Create your digital library card.
                            </p>
                        </div>

                        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="mb-2 block text-sm font-bold text-neutral">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-2xl border border-neutral/15 bg-white px-4 py-3 text-sm font-medium text-neutral outline-none transition duration-300 placeholder:text-neutral/35 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-neutral">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-2xl border border-neutral/15 bg-white px-4 py-3 text-sm font-medium text-neutral outline-none transition duration-300 placeholder:text-neutral/35 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-neutral">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full rounded-2xl border border-neutral/15 bg-white px-4 py-3 text-sm font-medium text-neutral outline-none transition duration-300 placeholder:text-neutral/35 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-neutral">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="At least 8 characters"
                                    required
                                    className="w-full rounded-2xl border border-neutral/15 bg-white px-4 py-3 text-sm font-medium text-neutral outline-none transition duration-300 placeholder:text-neutral/35 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10"
                                />
                            </div>

                            <button
                                type="submit" onSubmit={onSubmit}
                                className="w-full rounded-full bg-pink-500/60 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-500/70 hover:shadow-xl hover:shadow-primary/25 active:scale-95 cursor-pointer"
                            >
                                Register
                            </button>
                        </form>

                        <div className="my-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-orange-300" />
                            <span className="text-sm font-semibold text-neutral/50">or</span>
                            <div className="h-px flex-1 bg-orange-300" />
                        </div>

                        <button onClick={handleGoogleSignIn} className="w-full rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-black text-neutral/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-info hover:text-primary-content hover:shadow-lg hover:shadow-primary/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2">
                            Continue with Google <span> <FcGoogle /> </span>
                        </button>

                        <p className="mt-6 text-center text-sm font-medium text-neutral/50">
                            Already have an account?{" "}
                            <Link
                                href="/signin"
                                className="font-black text-orange-500 transition duration-300 hover:text-primary hover:underline"
                            >
                                Signin
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <FooterPage />
        </div>
    );
}