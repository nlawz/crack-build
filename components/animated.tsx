"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AnimatedCard: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return; // Added null check for context

        canvas.width = 400;
        canvas.height = 300;

        const rectanglesPerRow = Math.floor((canvas.width - 5) / 5);
        const rectanglesPerColumn = Math.floor((canvas.height - 5) / 5);
        const totalRectangles = rectanglesPerRow * rectanglesPerColumn;

        const rectangles = Array.from({ length: totalRectangles }).map(
            (_, index) => ({
                x: 5 + (index % rectanglesPerRow) * 5,
                y: 5 + Math.floor(index / rectanglesPerRow) * 5,
                width: 2,
                height: 2,
                opacity: 1,
                phase: Math.random() * Math.PI * 4,
            })
        );

        function draw() {
            if (!context) return;
            if (!canvas) return;
            context.clearRect(0, 0, canvas.width, canvas.height);

            rectangles.forEach((rect) => {
                const time = (performance.now() / 1000) * 3;
                rect.opacity = 0.3 + 0.3 * Math.sin(time + rect.phase);

                context.fillStyle = `rgba(93, 227, 255, ${rect.opacity})`;
                context.fillRect(rect.x, rect.y, rect.width, rect.height);
            });

            requestAnimationFrame(draw);
        }

        draw();
    }, []);

    return (
        <motion.div
            className="group relative flex h-[300px] w-full max-w-[400px] items-center justify-center overflow-hidden rounded-2xl bg-[#212126]"
            whileHover="hover">
            <canvas
                ref={canvasRef}
                className="opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(circle,white,transparent_50%)] group-hover:opacity-100 group-hover:delay-600"
            />

            <motion.div
                className="absolute h-[120px] w-[120px] rounded-full border border-[rgba(93,228,255,0.3)] bg-transparent shadow-[0_0_10px_rgba(93,228,255,0.3)]"
                animate={{
                    boxShadow: [
                        "0 0 10px rgba(93,228,255,0.3)",
                        "0 5px 20px rgba(93,228,255,0.2)",
                    ],
                    borderColor: [
                        "rgba(93,228,255,0.3)",
                        "rgba(93,228,255,0.5)",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                variants={{
                    hover: { opacity: 1, transition: { delay: 0.4 } },
                }}
                initial={{ opacity: 0 }}
            />

            <div className="absolute z-20 flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border border-transparent bg-[rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-white/5 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <div className="h-[110px] w-[110px] rounded-full bg-[#212126]" />
                <motion.div
                    className="absolute h-[80%] w-[20%] bg-white/10 blur-[20px]"
                    initial={{ rotate: 80, x: -90, y: 0 }}
                    variants={{
                        hover: { x: 0, y: 0 },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.68, 0.29, 0.005, 1.005],
                    }}
                />
            </div>

            <motion.svg
                viewBox="0 0 224 280"
                fill="none"
                aria-hidden="true"
                className="absolute right-0 h-[120%]"
                initial={{ x: 90 }}
                variants={{
                    hover: { x: 200 },
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.68, 0.29, 0.005, 1.005],
                    delay: 0.4,
                }}>
                <path
                    fill="#fff"
                    fillOpacity="0.05"
                    d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
                />
                <path
                    stroke="#fff"
                    stroke-opacity="0.05"
                    d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
                />
            </motion.svg>

            <motion.svg
                viewBox="0 0 224 280"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 h-[120%]"
                initial={{ x: -90, rotate: 180 }}
                variants={{
                    hover: { x: -200, rotate: 180 },
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.68, 0.29, 0.005, 1.005],
                    delay: 0.4,
                }}>
                <path
                    fill="#fff"
                    fillOpacity="0.05"
                    d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
                />
                <path
                    stroke="#fff"
                    stroke-opacity="0.05"
                    d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
                />
            </motion.svg>
        </motion.div>
    );
};
