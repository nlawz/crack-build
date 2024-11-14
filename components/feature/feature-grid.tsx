import { cn } from "@/lib/utils";
import { Feature, FeatureContent, FeatureHeader, FeatureIcon, FeatureTitle } from "./feature";

import * as React from "react";
import { FadeIn, FadeInStagger } from "../fade-in";

const FeatureGrid = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
    <FadeInStagger>
        <div ref={ref} className={cn(className)}>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 sm:px-0">
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="cloud" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="api" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="data" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="cloud" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="cloud" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
                <Feature>
                    <FadeIn>
                        <FeatureHeader>
                            <FeatureIcon iconName="cloud" />
                            <FeatureTitle>Multi-Cloud</FeatureTitle>
                        </FeatureHeader>
                    </FadeIn>
                    <FadeIn>
                        <FeatureContent>
                            Unkey works with any cloud provider, ensuring a fast
                            global experience regardless of your choice of
                            infrastructure.
                        </FeatureContent>
                    </FadeIn>
                </Feature>
            </div>
        </div>
    </FadeInStagger>
));
FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
