import React from "react";
import { Card } from "./ui/card";

interface PreviewWrapperProps {
    children: React.ReactNode;
    title?: string;
}

export function PreviewWrapper({ children, title }: PreviewWrapperProps) {
    return (
        <Card className="my-6 overflow-hidden rounded-3xl">
            {title && (
                <div className="bg-muted px-4 py-2 border-b">
                    <h3 className="text-sm font-medium">{title}</h3>
                </div>
            )}
            <div className="p-12 bg-background">{children}</div>
        </Card>
    );
}
