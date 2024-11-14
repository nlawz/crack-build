import { DocsLayout } from "fumadocs-ui/layout";
import { docsOptions } from "../../layout.config";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { SquareMousePointer, Layers3 } from "lucide-react";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DocsLayout
            sidebar={{
                banner: (
                    <RootToggle
                        options={[
                            {
                                title: "crack.build",
                                description: "full stack components",
                                url: "/",
                                icon: (
                                    <SquareMousePointer className="text-turq" />
                                ),
                            },
                        ]}
                    />
                ),
                defaultOpenLevel: 0,
            }}
            nav={{ transparentMode: "always" }}
            {...docsOptions}>
            {children}
        </DocsLayout>
    );
}
