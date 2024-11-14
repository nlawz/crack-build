// app/PostHogPageView.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";

export default function PostHogPageView(): null {
    const pathname = usePathname();
    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
    const posthog = usePostHog();

    useEffect(() => {
        // Safely access searchParams on the client side
        setSearchParams(new URLSearchParams(window.location.search));
    }, []);

    useEffect(() => {
        // Track pageviews
        if (pathname && posthog && searchParams) {
            let url = window.origin + pathname;
            if (searchParams.toString()) {
                url = url + `?${searchParams.toString()}`;
            }
            posthog.capture("$pageview", {
                $current_url: url,
            });
        }
    }, [pathname, searchParams, posthog]);

    return null;
}
