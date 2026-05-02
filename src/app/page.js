import ExtraSections from "@/components/ExtraSections";
import FooterPage from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopGenerations from "@/components/TopGenerations";

export default function Home() {
    return (
        <div className="bg-[linear-gradient(135deg,#fff7e6_0%,#fffaf0_35%,#ffe8d6_70%,#f7e8ff_100%)] ">
            <Navbar />
            <Hero />
            <TopGenerations />
            <ExtraSections />

            <FooterPage />
        </div>
    );
}
