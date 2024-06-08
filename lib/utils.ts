import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getMetadata(page: string) {
    const metadata = {
        title: "Next.js",
        description:
            "Next.js is a popular React-based framework for building server-side rendered (SSR) and statically generated websites and applications.",
        image: "/favicon.ico",
        url: "https://nextjs.org",
    };
    switch (page) {
        case "home":
            metadata.title = "Home - Next.js";
            break;
        case "about":
            metadata.title = "About - Next.js";
            break;
        default:
            break;
    }
    return metadata;
}
