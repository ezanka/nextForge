"use client"

import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { flattenNavigation, getNextPage, getPreviousPage } from "@/src/lib/navigation";
import { sidebarItems } from "@/src/components/layout/global/sidebar-items";

interface NextPageComponentsProps {
    path?: string;
    pathName?: string;
    showPrevious?: boolean;
}

export default function NextPageComponents({ path, pathName, showPrevious = false }: NextPageComponentsProps) {
    const currentPathname = usePathname();

    if (path && pathName) {
        return (
            <Link href={`/${path}`} className="mt-12 w-full h-fit items-end flex flex-col bg-card px-6 py-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="text-sm flex items-center gap-1 text-muted-foreground">
                    Page suivante
                    <ChevronRight className="h-4 w-4 shrink-0" />
                </div>
                <h1 className="text-lg font-semibold">{pathName}</h1>
            </Link>
        );
    }

    const flatNavigation = flattenNavigation(sidebarItems);
    const nextPage = getNextPage(currentPathname, flatNavigation);
    const previousPage = showPrevious ? getPreviousPage(currentPathname, flatNavigation) : null;

    return (
        <div className="mt-12 flex h-fit gap-4">
            {previousPage && (
                <Link href={previousPage.url} className="w-full h-full items-start flex flex-col bg-card px-6 py-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="text-xs flex items-center gap-1 text-muted-foreground">
                        <ChevronLeft className="h-4 w-4 shrink-0" />
                        Précédent
                    </div>
                    <h1 className="text-sm font-semibold">{previousPage.title}</h1>
                </Link>
            )}

            {nextPage && (
                <Link href={nextPage.url} className="w-full h-full items-end flex flex-col bg-card px-6 py-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="text-xs flex items-center gap-1 text-muted-foreground">
                        Suivant
                        <ChevronRight className="h-4 w-4 shrink-0" />
                    </div>
                    <h1 className="text-sm font-semibold">{nextPage.title}</h1>
                </Link>
            )}

            {!nextPage && !previousPage && (
                <div className="w-full h-fit items-center flex flex-col bg-muted px-6 py-3 border rounded-lg">
                    <div className="text-sm text-muted-foreground">
                        Fin de la documentation
                    </div>
                </div>
            )}
        </div>
    );
}