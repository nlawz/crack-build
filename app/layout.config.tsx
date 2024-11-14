import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import { LogoIcon } from "@/components/logo-icon";
import Link from "next/link";

// shared configuration
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <Link href="/" className="flex items-center gap-2">
                <LogoIcon
                    className="text-black dark:text-[#969799]"
                    size={20}
                />
                <span>crack.build</span>
            </Link>
        ),
    },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: {...pageTree},
    
};
