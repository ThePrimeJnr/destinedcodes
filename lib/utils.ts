import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getMetadata(page: string) {
    const siteData = {
      author: "Destiny Saturday",
      title: "DestinedCodes",
      description: "Destiny Saturday's personal portfolio and blog, created with Next.js, Shadcn-ui, and Tailwind.css.",
      theme: "light",
      language: "en",
      url: "https://www.destinedcodes.com",
    };
  
    const pagesMetadata: { [key: string]: any } = {
      home: {
        title: `${siteData.title} - Home`,
        description: siteData.description,
      },
      blog: {
        title: `${siteData.title} - Blog`,
        description: "All of my thoughts, experiences, and projects, collected in chronological order.",
      },
      projects: {
        title: `${siteData.title} - Projects`,
        description: "Some personal projects I've worked on.",
      },
      about: {
        title: `${siteData.title} - About Me`,
        description: "Learn more about Destiny Saturday, also known as DestinedCodes.",
      },
    };
  
    const defaultMetadata = {
      title: siteData.title,
      description: siteData.description,
      author: siteData.author,
      url: siteData.url,
      theme: siteData.theme,
      language: siteData.language,
    };
  
    return pagesMetadata[page] || defaultMetadata;
  }
  