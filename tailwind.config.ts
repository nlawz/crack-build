import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import type { Config } from 'tailwindcss';


const config = {
    content: [
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./content/**/*.{md,mdx}",
        "./mdx-components.{ts,tsx}",
        "./node_modules/fumadocs-ui/dist/**/*.js",
    ],
    presets: [createPreset()],
    theme: {
        extend: {
            colors: {
                turq: "#61FFCA",
                purp: "#A277FF",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
                rotate: "rotate 5s linear infinite",
                meteorAngle: "meteorAngle 10s linear infinite",
                meteor: "meteor 20s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "button-shine": "shine .6s linear forwards",
                "fade-in": "fade-in 1s ease-out forwards",
                "fade-in-right": "fade-in-right 1s ease-out forwards",
                "fade-in-left": "fade-in-left 1s ease-out forwards",
                "fade-in-up": "fade-in-up 1s ease-out forwards",
                "fade-in-down": "fade-in-down 1s ease-out forwards",
                "logo-cloud": "logo-cloud 18s linear infinite",
            },
            keyframes: {
                rotate: {
                    from: { transform: "rotate(var(--tw-rotate))" },
                    to: { transform: "rotate(360deg)" },
                },
                meteorAngle: {
                    "0%": {
                        tranform: "rotate(300deg) translateX(0)",
                        opacity: "1",
                    },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(300deg) translateX(-400px) ",
                        opacity: "0",
                    },
                },
                meteor: {
                    "0%": {
                        transform: "rotate(270deg) translateX(0)",
                        opacity: "0",
                    },
                    "5%": { opacity: ".9" },
                    "50%": { opacity: ".4" },
                    "100%": {
                        transform: "rotate(270deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
                shine: {
                    "0%": {
                        backgroundPosition: "0 0",
                        opacity: "0",
                    },
                    "1%": {
                        backgroundPosition: "0 0",
                        opacity: "1",
                    },
                    "80%": {
                        backgroundPosition: "180% 0",
                        opacity: "1",
                    },
                    "85%": {
                        opacity: "0",
                    },
                },
                "border-beam": {
                    "100%": {
                        "offset-distance": "100%",
                    },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "fade-in-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(var(--fade-in-left-tx, 1rem))",
                    },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "fade-in-right": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(var(--fade-in-right-tx, -1rem))",
                    },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(var(--fade-in-up-ty, 1rem))",
                    },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(var(--fade-in-down-ty, -1rem))",
                    },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            boxShadow: {
                circles: "0px 2px 3px 0px rgba(253, 164, 175, 0.9)",
            },
        },
    },
} satisfies Config;

export default config;
