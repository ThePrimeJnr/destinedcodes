"use client";

import siteData from "@/site.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Search from "@/plugins/search";

const Header = () => {
    const {
        githubRepo,
        header: { logo, title, routes },
    } = siteData;

    const pathname = usePathname();
    const active = routes.find(
        (item: any) => item.value == "/" + pathname.split("/")[1]
    )?.name;

    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <header className={"container flex justify-between py-4"}>
            <div className={"flex justify-center items-center"}>
                <Link
                    className={"flex justify-center items-center mr-4"}
                    href={"/"}
                >
                    <Image src={logo} height={28} width={28} alt={"logo"} />
                    <div className={"ml-1 text-lg font-semibold"}>{title}</div>
                </Link>
                <div className={"hidden md:block space-x-1"}>
                    {routes.map((route: any) => (
                        <Link href={route?.value} key={route?.value}>
                            <Button
                                variant={
                                    active == route.name ? "secondary" : "ghost"
                                }
                                className={"text-base"}
                            >
                                {route.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={"flex justify-center items-center space-x-1"}>
                <div className={"md:hidden block"}>
                    <Sheet
                        open={open}
                        onOpenChange={() => {
                            setOpen(!open);
                        }}
                    >
                        <SheetTrigger asChild>
                            <Button size={"icon"} variant={"ghost"}>
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side={"top"}
                            className={"w-full space-y-4 p-12 text-sm"}
                        >
                            {routes.map((route: any, index: number) => (
                                <div className={"space-y-4"} key={route.value}>
                                    <Link
                                        href={route.value}
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <Button
                                            variant={
                                                active == route.name
                                                    ? "secondary"
                                                    : "ghost"
                                            }
                                            className={"text-base w-full"}
                                        >
                                            {route.name}
                                        </Button>
                                    </Link>
                                    {index != routes.length - 1 && (
                                        <Separator />
                                    )}
                                </div>
                            ))}
                        </SheetContent>
                    </Sheet>
                </div>
                <Search />
                <Link href={githubRepo}>
                    <Button size={"icon"} variant={"ghost"}>
                        <Github size={20} />
                    </Button>
                </Link>
                <Button
                    size={"icon"}
                    variant={"ghost"}
                    onClick={() => {
                        setTheme(theme == "light" ? "dark" : "light");
                    }}
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </div>
        </header>
    );
};

export default Header;
