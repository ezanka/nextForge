"use client";

import {
    ChevronRight,
} from "lucide-react";

import { sidebarItems } from "./sidebar-items";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/src/components/ui/shadcn/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/src/components/ui/shadcn/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SidebarComponent() {
    const pathname = usePathname();

    return (
        <Sidebar className="h-[calc(100vh-4rem)] top-16 sticky hidden md:block md:w-[268px] lg:w-[286px] border-r border-border bg-background/50">
            <SidebarContent className="bg-background">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((section) => (
                                <SidebarGroup key={section.title}>
                                    <SidebarGroupLabel>
                                        <section.icon />
                                        {section.title}
                                    </SidebarGroupLabel>

                                    {section.items.map((item) =>
                                        "items" in item ? (
                                            <Collapsible
                                                key={item.title}
                                                className="group/collapsible"
                                            >
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                {item.icon && <item.icon className="h-4 w-4" />}
                                                                <span>{item.title}</span>
                                                            </div>
                                                            <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>

                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {item.items.map((subItem) => (
                                                                <SidebarMenuSubItem key={subItem.title}>
                                                                    <SidebarMenuSubButton asChild>
                                                                        <Link
                                                                            href={subItem.url}
                                                                            className={pathname === subItem.url ? 'bg-accent text-accent-foreground' : ''}
                                                                        >
                                                                            <span>{subItem.title}</span>
                                                                        </Link>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            ))}
                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                        ) : (
                                            <SidebarMenuItem key={item.title} className="mb-1">
                                                <SidebarMenuButton asChild>
                                                    <Link
                                                        href={item.url}
                                                        className={`${pathname === item.url ? 'bg-accent text-accent-foreground' : ''}`}
                                                    >
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        )
                                    )}
                                </SidebarGroup>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
