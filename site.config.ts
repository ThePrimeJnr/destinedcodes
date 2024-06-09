import Intro from "./components/intro.mdx"

const siteData: any = {
    author: "Destiny Saturday",  // author name
    title: "DestinedCodes Portfolio", // website title
    description: "Destiny Saturday's personal portfolio and blog, created with Next.js, Shadcn-ui, and Tailwind.css.", // website description
    theme: "light",
    language: "en", // zh-CN | en
    githubRepo: "https://github.com/destinedcodes/destinedcodes-portfolio",

    // how to change the favicon of the website?
    // change the app/favicon.ico file directly，or refer to the document below
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

    //header config
    header: {
        logo: "/logo.png",
        title: "DestinedCodes",

        // navigation bar
        routes: [
            {
                name: 'Blog',
                value: '/blog'
            },
            {
                name: 'Projects',
                value: '/project'
            }
        ]
    },

    home: {
        title: "Welcome to DestinedCodes Portfolio",

        // introduction or about me
        intro: Intro, // file path of the introduction
        socials: {
            email: "destinysaturday@example.com",
            github: "https://github.com/destinedcodes",
            twitter: "https://twitter.com/destinedcodes",
            linkedin: "https://www.linkedin.com/in/destinedcodes",
            facebook: "",
            instagram: "",
            youtube: "",
        },
    },

    blog: {
        title: 'My Blog',
        description: 'All of my thoughts, experiences, and projects, collected in chronological order.',
    },

    project: {
        title: "Look What I've Done",
        description: "Some personal projects I've worked on.",

        // status color and text
        getStatus: (status: string) => {
            // you can customize the status color and text！

            // dev: Under development or planning.
            // active: Currently focused on this project.
            // filed: Not upgrading will only fix bugs.
            // offline: Going offline soon.
            // none: Keep running.
            if(!status) return {}

            switch (status) {
                case "active":
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
                case "dev":
                    return {
                        variant: "secondary",
                        text: "DEV",
                    }
                case "filed":
                    return {
                        variant: "outline",
                        text: "FILED",
                    }
                case "offline":
                    return {
                        variant: "destructive",
                        text: "OFFLINE",
                    }
            }
        },

        // name, description, href are required
        // github: username/repo
        // status: getStatus return value
        // and so on
        // you can add more fields according to your needs ,but you need to modify the code in the project/page.tsx file
        projects: [
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js, Shadcn-ui, and Tailwind.css.",
                href: "https://next-blog.destinedcodes.com",
                github: "destinedcodes/next-blog",
                status: "active",
            },
            {
                name: "AllDone",
                description: "One-stop project management platform.",
                status: "dev",
            },
            {
                name: "Slash Editor",
                description: "A simple rich text editor.",
                href: "https://slash.destinedcodes.com",
                github: "destinedcodes/slash-editor",
            },
            {
                name: "RMX",
                description: "An online editor to quickly create project README.md files and GitHub profile templates.",
                href: "https://readme.destinedcodes.com",
                github: "destinedcodes/readme",
                status: "filed",
            },
            {
                name: "Resume Generator",
                description: "A minimalist online resume generator with potential for major upgrades.",
                href: "https://resume.destinedcodes.com",
                github: "destinedcodes/resume",
                status: "offline",
            },
        ],
    },

    comment: {
        enabled: true,
        engine: "giscus", // giscus | utterances
        // giscus doc: https://giscus.app
        giscus: {
            repo: "destinedcodes/destinedcodes-portfolio",
            repoId: "R_kgDOKTZ_kQ",
            category: "Announcements",
            categoryId: "DIC_kwDOKTZ_kc4CfMXK",
            mapping: "pathname",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            theme: "light",
            lang: "en",
            loading: "lazy",
        },

        // utterances doc: https://utteranc.es
        utterances: {
            src: "https://utteranc.es/client.js",
            repo: "destinedcodes/destinedcodes-portfolio",
            "issue-term": "pathname",
            theme: "github-light",
            crossorigin: "anonymous",
            label: "",
            async: true
        }
    },

    search: {
        enabled: true,
        engine: "cmdk", //  cmdk | algolia
        // todo algolia search
        // algolia: {
        //     appId: "",
        //     apiKey: "",
        // }
    }
}

export default siteData
