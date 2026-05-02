"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import {
    IoBookOutline,
    IoHeart,
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoInstagram,
    IoArrowForward,
    IoLogoYoutube,
} from "react-icons/io5";

const exploreLinks = [
    { href: "/", label: "Home" },
    { href: "/all-books", label: "All Books" },
    { href: "/my-profile", label: "My Profile" },
];

const contactLinks = [
    { href: "https://wa.me/8801552350991", label: "WhatsApp" },
    { href: "mailto:arafmushfiq@gmail.com", label: "Email" },
    { href: "https://www.facebook.com/mushfiq.araf.2024", label: "Messenger" },
];

const socialLinks = [
    {
        href: "https://www.facebook.com/mushfiq.araf.2024",
        label: "Facebook",
        icon: IoLogoFacebook,
    },
    {
        href: "https://www.linkedin.com/in/mi-araf/",
        label: "LinkedIn",
        icon: IoLogoLinkedin,
    },
    {
        href: "https://www.youtube.com/@mushfiqaraf5079",
        label: "YouTube",
        icon: IoLogoYoutube,
    },
    {
        href: "https://www.instagram.com/tde-araf",
        label: "Instagram",
        icon: IoLogoInstagram,
    },
];

export default function FooterPage() {
    const footerRef = useRef(null);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    const reveal = (animation, delay = "") =>
        isFooterVisible
            ? `animate__animated ${animation} ${delay}`
            : "opacity-0";

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)] px-4 py-8 sm:px-6 lg:px-8"
        >
            {/* soft background lights */}
            <div
                className={`pointer-events-none absolute -left-20 top-8 h-60 w-60 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 ${isFooterVisible
                        ? "animate__animated animate__pulse animate__infinite animate__slower opacity-100"
                        : "opacity-0"
                    }`}
            />
            <div
                className={`pointer-events-none absolute right-0 top-16 h-60 w-60 rounded-full bg-orange-300/20 blur-3xl transition-opacity duration-300 ${isFooterVisible
                        ? "animate__animated animate__pulse animate__infinite animate__slower opacity-100"
                        : "opacity-0"
                    }`}
            />
            <div
                className={`pointer-events-none absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl transition-opacity duration-300 ${isFooterVisible
                        ? "animate__animated animate__pulse animate__infinite animate__slower opacity-100"
                        : "opacity-0"
                    }`}
            />

            <div
                className={`relative mx-auto max-w-7xl transition-opacity duration-300 ${reveal(
                    "animate__fadeInUp"
                )}`}
            >
                <div className="rounded-4xl border border-white/70 bg-white/65 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur-2xl sm:p-6 lg:p-8">
                    <div className="grid gap-7 lg:grid-cols-12">
                        {/* Left side */}
                        <div
                            className={`lg:col-span-5 transition-opacity duration-300 ${reveal(
                                "animate__fadeInLeft"
                            )}`}
                        >
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-3 text-2xl font-black tracking-tight text-neutral transition duration-300 hover:text-primary"
                            >
                                <span
                                    className={`grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20 transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3 ${isFooterVisible
                                            ? "animate__animated animate__bounceIn"
                                            : "opacity-0"
                                        }`}
                                >
                                    <IoBookOutline className="h-6 w-6" />
                                </span>

                                <span> <span className="bg-linear-to-r from-primary via-fuchsia-400 to-orange-500 bg-clip-text text-transparent">Araf&apos;s</span> Library</span>
                            </Link>

                            <p className="mt-4 max-w-md text-sm font-medium leading-6 text-neutral/60">
                                Your cozy online library for discovering, borrowing, and managing
                                books with a little charm.
                            </p>

                            <div
                                className={`mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wider text-neutral/50 shadow-sm transition-opacity duration-300 ${reveal(
                                    "animate__fadeInUp",
                                    "animate__delay-1s"
                                )}`}
                            >
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                Read. Borrow. Repeat.
                            </div>
                        </div>

                        {/* Right side */}
                        <div
                            className={`grid gap-6 sm:grid-cols-3 lg:col-span-7 transition-opacity duration-300 ${reveal(
                                "animate__fadeInRight"
                            )}`}
                        >
                            <FooterColumn title="Explore" links={exploreLinks} />
                            <FooterColumn title="Contact Us" links={contactLinks} />

                            <div>
                                <h3 className="text-sm font-black uppercase tracking-wider text-neutral">
                                    Made For Readers
                                </h3>

                                <div
                                    className={`mt-4 rounded-3xl border border-amber-100 bg-white/75 p-4 shadow-lg shadow-amber-900/5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${reveal(
                                        "animate__zoomIn",
                                        "animate__delay-1s"
                                    )}`}
                                >
                                    <p className="text-sm font-semibold leading-6 text-neutral/60">
                                        Built with{" "}
                                        <IoHeart className="inline-block h-4 w-4 text-primary animate__animated animate__heartBeat animate__infinite animate__slower" />{" "}
                                        for book lovers.
                                    </p>

                                    <Link
                                        href="https://github.com/mi-araf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group mt-4 inline-flex items-center gap-2 rounded-full bg-neutral px-4 py-2 text-sm font-bold text-neutral-content shadow-md transition duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <IoLogoGithub className="h-5 w-5" />
                                        GitHub
                                        <IoArrowForward className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Follow us */}
                    <div className={`mt-4 transition-opacity duration-300 ${reveal(
                            "animate__fadeInUp",
                            "animate__delay-1s"
                        )}`}
                    >
                        <h3 className="text-sm font-black uppercase tracking-wider text-neutral">
                            Follow Us
                        </h3>

                        <div className="mt-3 max-w-full overflow-hidden">
                            <div className="flex flex-nowrap items-center gap-3 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                {socialLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            target={
                                                item.href.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                item.href.startsWith("http")
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-amber-100 bg-white/75 px-4 py-2 text-sm font-bold text-neutral/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-content hover:shadow-lg hover:shadow-primary/20"
                                        >
                                            <Icon className="h-4 w-4 transition duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div
                        className={`mt-4 flex flex-col items-center justify-between gap-3 border-t border-amber-100/80 pt-5 text-center transition-opacity duration-300 sm:flex-row sm:text-left ${reveal(
                            "animate__fadeInUp",
                            "animate__delay-1s"
                        )}`}
                    >
                        <p className="text-sm font-semibold text-neutral/45">
                            Araf&apos;s Library || &copy; {new Date().getFullYear()} || All rights
                            reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-neutral/35">
                            <Link href="/" className="transition duration-300 hover:text-primary">
                                Privacy
                            </Link>
                            <span className="h-1 w-1 rounded-full bg-neutral/20" />

                            <Link href="/" className="transition duration-300 hover:text-primary">
                                Terms
                            </Link>
                            <span className="h-1 w-1 rounded-full bg-neutral/20" />

                            <Link href="/" className="transition duration-300 hover:text-primary">
                                Support
                            </Link>
                            <span className="h-1 w-1 rounded-full bg-neutral/20" />

                            <Link href="/" className="transition duration-300 hover:text-primary">
                                Library Rules
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-neutral">
                {title}
            </h3>

            <div className="mt-4 flex flex-col items-start gap-2.5">
                {links.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="group relative text-sm font-bold text-neutral/55 transition duration-300 hover:translate-x-1 hover:text-primary"
                    >
                        <span>{item.label}</span>

                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>
        </div>
    );
}