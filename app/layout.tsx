import { NavBar } from "@/components/navbar";
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { PHProvider } from "./providers";
import PostHogPageView from "./PostHogPageView";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
    title: "make cracked sites at the speed of crack",
    description: "bring that cracked site to life",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
        title: "make cracked sites",
        type: "website",
        locale: "en_IE",
        url: "https://crack.build",
        images: [
            {
                url: "https://crack.build/crack.png",
                width: 1200,
                height: 630,
                alt: "crack.dev",
            },
        ],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <PHProvider>
                <body>
                    <PostHogPageView />
                    <RootProvider>{children}</RootProvider>
                </body>
            </PHProvider>
        </html>
    );
}
