import React from "react";

export function PlanetAnimation() {
    return (
        <div className="group relative flex flex-col overflow-hidden pb-6">
            <div className="mb-4">
                <p className="text-xl sm:text-2xl text-gray-300">
                    <strong className="text-white">
                        We like to move fast.
                    </strong>
                </p>
            </div>
            <div className="relative aspect-square w-full max-w-[250px] mx-auto transition-all duration-300 ease-out group-hover:scale-110">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 rounded-full border border-rose-300 transition-all duration-300 ease-out group-hover:scale-105
                            ${i === 0 ? "bg-white bg-opacity-5" : ""}`}
                        style={{
                            transform: `scale(${1 - i * 0.15})`,
                            opacity: 1 - i * 0.2,
                            transitionDelay: `${i * 50}ms`,
                        }}
                    />
                ))}
                {[0, -40].map((rotation, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 animate-rotate"
                        style={{ transform: `rotate(${rotation}deg)` }}>
                        <div
                            className={`absolute rounded-full ${
                                i === 0
                                    ? "bg-rose-300 h-3 w-3"
                                    : "bg-gray-400 h-2 w-2"
                            }`}
                            style={{ top: "-2%", left: "50%" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlanetAnimation;
