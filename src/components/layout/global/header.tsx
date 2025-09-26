
import { ThemeToggle } from "@/src/components/ui/theme-toggle"
import { Anvil, Menu } from "lucide-react";
import Link from "next/link"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/shadcn/dropdown-menu"

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full h-16 ">
            <Link href="/" className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-2 shrink-0 transition-colors md:w-[268px] lg:w-[286px] flex items-center gap-2"><Anvil /><span className="font-medium text-2xl">NextForge</span></Link>
            <div className="md:col-span-10 flex items-center justify-end relative ">
                <ul className="md:flex items-stretch w-max h-16 hidden shrink-0 ">
                    <li className="relative border-l border-border">
                    <Link
                        href="/"
                        className="flex h-full items-center px-4 text-sm text-foreground/70 transition-colors hover:text-foreground hover:bg-accent"
                    >
                        Home
                    </Link>
                    </li>
                    <li className="relative border-l border-border">
                        <Link
                            href="/docs"
                            className="flex h-full items-center px-4 text-sm text-foreground/70 transition-colors hover:text-foreground hover:bg-accent"
                        >
                            Docs
                        </Link>
                    </li>
                    <li className="relative border-l border-border">
                        <Link
                            href="/template"
                            className="flex h-full items-center px-4 text-sm text-foreground/70 transition-colors hover:text-foreground hover:bg-accent"
                        >
                            Template
                        </Link>
                    </li>
                    <li className="relative border-l border-border">
                        <Link
                            href="/changelog"
                            className="flex h-full items-center px-4 text-sm text-foreground/70 transition-colors hover:text-foreground hover:bg-accent"
                        >
                            Changelog
                        </Link>
                    </li>
                    <li className="relative border-l border-border border-b hover:cursor-pointer">
                        <ThemeToggle />
                    </li>
                </ul>
                <div className="md:hidden flex mr-2.5">
                    <ThemeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="/">
                                    Home
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/docs">
                                    Docs
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/template">
                                    Template
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/changelog">
                                    Changelog
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}