import { HeroMainSection } from "@/app/hero/hero-main-section";
import { Section, SectionTitle } from "@/components/section";
import {
    TopLeftShiningLight,
    TopRightShiningLight,
} from "@/components/svg/hero";
import { Footer } from "@/components/footer/footer";
import { NavBar } from "@/components/navbar";

export const metadata = {
    title: "crack.build",
    description: "Build full stack apps fast",
    openGraph: {
        title: "crack.dev",
        description: "Build full stack apps faster",
        url: "https://crack.build/",
        siteName: "crack.dev",
        images: [
            {
                url: "https://crack.build/crack.png",
                width: 1200,
                height: 675,
            },
        ],
    },
    twitter: {
        title: "nlawz_",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/cracked.svg",
    },
};

export default async function Landing() {
    return (
        <>
            <NavBar />
            <TopRightShiningLight />
            <TopLeftShiningLight />
            <div className="relative w-full pt-6 overflow-hidden">
                <div className="container relative flex flex-col mx-auto space-y-16 md:space-y-32">
                    <Section>
                        <HeroMainSection />
                    </Section>
                    <Section className="pb-16 md:pb-24">
                        <Footer />
                    </Section>
                </div>
            </div>
        </>
    );
}
