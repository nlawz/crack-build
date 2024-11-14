import { Card, CardTitle, CardDescription } from "./ui/card";
import { type ReactNode } from "react";
import { PlanetAnimation } from "./planets";

interface Content {
    title: string;
    description: string;
    imagePath?: ReactNode;
}

const content: Content[] = [
    {
        title: "Quick Build Times",
        description:
            "Fast development cycles mean you can launch your product sooner, learn from real users, and iterate faster.",
        imagePath: <PlanetAnimation />,
    },
];

const PlanetCard = () => {
    return (
        <div
            className="pb-4"
            style={{
                background:
                    "linear-gradient(180deg,transparent,rgba(97,106,115,.12) 40%,rgba(97,106,115,.12) 60%,rgba(97,106,115,0))",
            }}>
            {content.map((point, index) => (
                <Card
                    key={index}
                    className="group relative h-auto min-h-[500px] overflow-hidden rounded-2xl border-none font-corm shadow-2xl p-4">
                    {point.imagePath}
                    <CardTitle className="mb-2 p-0 text-white">
                        {point.title}
                    </CardTitle>
                    <CardDescription className="text-base text-custom-gray">
                        <span>{point.description}</span>
                    </CardDescription>
                </Card>
            ))}
        </div>
    );
};

export default PlanetCard;
