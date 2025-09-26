"use client";

import {
    Rocket,
    Zap,
    Palette,
    Shield,
    Database,
    Smartphone,
    Target,
    Upload,
    Wrench,
    Book,
    AlertTriangle,
    Settings,
    Code,
    Layout,
    Server,
    Route,
    Component,
    MousePointer,
    Table,
    Lock,
    Users,
    HardDrive,
    Activity,
    Gauge,
    CheckCircle,
    Cloud,
    Bug,
    ChevronRight,
} from "lucide-react";

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

const sidebarItems = [
    {
        title: "Getting Started",
        icon: Rocket,
        items: [
            { title: "Introduction", url: "/docs/getting-started/introduction" },
            { title: "Prérequis", url: "/docs/getting-started/prerequis" },
            { title: "Vue d'ensemble du stack", url: "/docs/getting-started/stack-overview" },
        ],
    },
    {
        title: "Next.js",
        icon: Zap,
        items: [
            {
                title: "Fondamentaux",
                icon: Code,
                items: [
                    { title: "Introduction à Next.js", url: "/nextjs/introduction" },
                    { title: "Installation et setup", url: "/nextjs/installation" },
                    { title: "Structure du projet", url: "/nextjs/project-structure" },
                    {
                        title: "Configuration (next.config.js)",
                        url: "/nextjs/configuration",
                    },
                ],
            },
            {
                title: "Routing",
                icon: Route,
                items: [
                    {
                        title: "App Router vs Pages Router",
                        url: "/nextjs/routing/app-vs-pages",
                    },
                    { title: "Routes statiques", url: "/nextjs/routing/static-routes" },
                    { title: "Routes dynamiques", url: "/nextjs/routing/dynamic-routes" },
                    { title: "Route Groups", url: "/nextjs/routing/route-groups" },
                    { title: "Parallel Routes", url: "/nextjs/routing/parallel-routes" },
                    {
                        title: "Intercepting Routes",
                        url: "/nextjs/routing/intercepting-routes",
                    },
                    {
                        title: "Middleware et redirections",
                        url: "/nextjs/routing/middleware",
                    },
                ],
            },
            {
                title: "Composants et Pages",
                icon: Component,
                items: [
                    {
                        title: "Pages et Layouts",
                        url: "/nextjs/components/pages-layouts",
                    },
                    { title: "Loading UI", url: "/nextjs/components/loading-ui" },
                    { title: "Error Handling", url: "/nextjs/components/error-handling" },
                    { title: "Not Found Pages", url: "/nextjs/components/not-found" },
                    {
                        title: "Templates vs Layouts",
                        url: "/nextjs/components/templates-layouts",
                    },
                ],
            },
            {
                title: "Data Fetching",
                icon: Server,
                items: [
                    {
                        title: "Server Components",
                        url: "/nextjs/data-fetching/server-components",
                    },
                    {
                        title: "Client Components",
                        url: "/nextjs/data-fetching/client-components",
                    },
                    {
                        title: "Streaming et Suspense",
                        url: "/nextjs/data-fetching/streaming",
                    },
                    {
                        title: "Cache et revalidation",
                        url: "/nextjs/data-fetching/cache",
                    },
                ],
            },
            {
                title: "Performance",
                icon: Gauge,
                items: [
                    {
                        title: "Optimisation des images",
                        url: "/nextjs/performance/images",
                    },
                    { title: "Optimisation des fonts", url: "/nextjs/performance/fonts" },
                    { title: "Bundle analysis", url: "/nextjs/performance/bundle" },
                    { title: "Core Web Vitals", url: "/nextjs/performance/web-vitals" },
                ],
            },
        ],
    },
    {
        title: "Shadcn/ui",
        icon: Palette,
        items: [
            {
                title: "Installation",
                icon: Settings,
                items: [
                    { title: "Setup initial", url: "/shadcn/installation/setup" },
                    {
                        title: "Configuration Tailwind",
                        url: "/shadcn/installation/tailwind",
                    },
                    {
                        title: "Configuration des composants",
                        url: "/shadcn/installation/components",
                    },
                    {
                        title: "Thèmes et personnalisation",
                        url: "/shadcn/installation/themes",
                    },
                ],
            },
            {
                title: "Composants Core",
                icon: Component,
                items: [
                    {
                        title: "Button, Input, Label",
                        url: "/shadcn/core/button-input-label",
                    },
                    {
                        title: "Card, Badge, Avatar",
                        url: "/shadcn/core/card-badge-avatar",
                    },
                    { title: "Typography", url: "/shadcn/core/typography" },
                    { title: "Layout (Container, Grid)", url: "/shadcn/core/layout" },
                ],
            },
            {
                title: "Composants Navigation",
                icon: MousePointer,
                items: [
                    { title: "Navigation Menu", url: "/shadcn/navigation/menu" },
                    { title: "Breadcrumb", url: "/shadcn/navigation/breadcrumb" },
                    { title: "Pagination", url: "/shadcn/navigation/pagination" },
                    { title: "Command Menu", url: "/shadcn/navigation/command" },
                ],
            },
            {
                title: "Composants Forms",
                icon: Layout,
                items: [
                    {
                        title: "Form avec React Hook Form",
                        url: "/shadcn/forms/react-hook-form",
                    },
                    { title: "Select, Checkbox, Radio", url: "/shadcn/forms/inputs" },
                    { title: "Textarea, Switch", url: "/shadcn/forms/textarea-switch" },
                    { title: "Date Picker", url: "/shadcn/forms/date-picker" },
                    { title: "Validation et erreurs", url: "/shadcn/forms/validation" },
                ],
            },
            {
                title: "Composants Overlay",
                icon: MousePointer,
                items: [
                    {
                        title: "Dialog, Sheet, Popover",
                        url: "/shadcn/overlay/dialog-sheet-popover",
                    },
                    {
                        title: "Tooltip, Hover Card",
                        url: "/shadcn/overlay/tooltip-hover",
                    },
                    { title: "Alert Dialog", url: "/shadcn/overlay/alert-dialog" },
                    { title: "Toast et Sonner", url: "/shadcn/overlay/toast" },
                ],
            },
            {
                title: "Composants Data Display",
                icon: Table,
                items: [
                    { title: "Table et Data Table", url: "/shadcn/data/table" },
                    { title: "Accordion", url: "/shadcn/data/accordion" },
                    { title: "Tabs", url: "/shadcn/data/tabs" },
                    { title: "Progress", url: "/shadcn/data/progress" },
                    { title: "Chart (Recharts)", url: "/shadcn/data/chart" },
                ],
            },
        ],
    },
    {
        title: "Better Auth",
        icon: Shield,
        items: [
            {
                title: "Configuration",
                icon: Settings,
                items: [
                    {
                        title: "Installation et setup",
                        url: "/better-auth/configuration/setup",
                    },
                    {
                        title: "Variables d'environnement",
                        url: "/better-auth/configuration/env",
                    },
                    {
                        title: "Configuration de base",
                        url: "/better-auth/configuration/basic",
                    },
                    {
                        title: "Database setup",
                        url: "/better-auth/configuration/database",
                    },
                ],
            },
            {
                title: "Providers",
                icon: Users,
                items: [
                    {
                        title: "Credentials (email/password)",
                        url: "/better-auth/providers/credentials",
                    },
                    {
                        title: "OAuth (Google, GitHub, Discord)",
                        url: "/better-auth/providers/oauth",
                    },
                    { title: "Magic Links", url: "/better-auth/providers/magic-links" },
                    {
                        title: "Configuration avancée",
                        url: "/better-auth/providers/advanced",
                    },
                ],
            },
            {
                title: "Session Management",
                icon: Activity,
                items: [
                    {
                        title: "Server-side sessions",
                        url: "/better-auth/sessions/server-side",
                    },
                    {
                        title: "Client-side hooks",
                        url: "/better-auth/sessions/client-hooks",
                    },
                    {
                        title: "Middleware de protection",
                        url: "/better-auth/sessions/middleware",
                    },
                    { title: "Gestion des rôles", url: "/better-auth/sessions/roles" },
                ],
            },
            {
                title: "Sécurité",
                icon: Lock,
                items: [
                    { title: "CSRF Protection", url: "/better-auth/security/csrf" },
                    {
                        title: "Rate limiting",
                        url: "/better-auth/security/rate-limiting",
                    },
                    {
                        title: "Password policies",
                        url: "/better-auth/security/password-policies",
                    },
                    {
                        title: "Two-factor authentication",
                        url: "/better-auth/security/2fa",
                    },
                ],
            },
        ],
    },
    {
        title: "Base de données",
        icon: Database,
        items: [
            {
                title: "Prisma",
                icon: HardDrive,
                items: [
                    {
                        title: "Installation et configuration",
                        url: "/database/prisma/setup",
                    },
                    { title: "Schema definition", url: "/database/prisma/schema" },
                    { title: "Migrations", url: "/database/prisma/migrations" },
                    { title: "Prisma Client", url: "/database/prisma/client" },
                ],
            },
            {
                title: "Drizzle (Alternative)",
                icon: HardDrive,
                items: [
                    { title: "Setup et configuration", url: "/database/drizzle/setup" },
                    { title: "Schema avec Drizzle Kit", url: "/database/drizzle/schema" },
                    { title: "Queries et relations", url: "/database/drizzle/queries" },
                ],
            },
            {
                title: "Providers",
                icon: Cloud,
                items: [
                    {
                        title: "PostgreSQL (Supabase/Neon)",
                        url: "/database/providers/postgresql",
                    },
                    { title: "MySQL (PlanetScale)", url: "/database/providers/mysql" },
                    { title: "SQLite (Turso)", url: "/database/providers/sqlite" },
                ],
            },
        ],
    },
    {
        title: "State Management",
        icon: Smartphone,
        items: [
            {
                title: "Zustand",
                icon: Activity,
                items: [
                    { title: "Installation et setup", url: "/state/zustand/setup" },
                    { title: "Store creation", url: "/state/zustand/store" },
                    { title: "Persist middleware", url: "/state/zustand/persist" },
                    { title: "DevTools", url: "/state/zustand/devtools" },
                ],
            },
            {
                title: "TanStack Query",
                icon: Server,
                items: [
                    { title: "Configuration", url: "/state/tanstack-query/setup" },
                    {
                        title: "Queries et Mutations",
                        url: "/state/tanstack-query/queries",
                    },
                    { title: "Cache management", url: "/state/tanstack-query/cache" },
                    {
                        title: "Optimistic updates",
                        url: "/state/tanstack-query/optimistic",
                    },
                ],
            },
        ],
    },
    {
        title: "Bonnes Pratiques",
        icon: Target,
        items: [
            {
                title: "Architecture",
                icon: Layout,
                items: [
                    {
                        title: "Structure des dossiers",
                        url: "/best-practices/architecture/folders",
                    },
                    {
                        title: "Naming conventions",
                        url: "/best-practices/architecture/naming",
                    },
                    {
                        title: "Component patterns",
                        url: "/best-practices/architecture/patterns",
                    },
                    {
                        title: "Code organization",
                        url: "/best-practices/architecture/organization",
                    },
                ],
            },
            {
                title: "Performance",
                icon: Gauge,
                items: [
                    {
                        title: "Bundle optimization",
                        url: "/best-practices/performance/bundle",
                    },
                    {
                        title: "Image optimization",
                        url: "/best-practices/performance/images",
                    },
                    {
                        title: "Lazy loading",
                        url: "/best-practices/performance/lazy-loading",
                    },
                    {
                        title: "Code splitting",
                        url: "/best-practices/performance/code-splitting",
                    },
                ],
            },
            {
                title: "Sécurité",
                icon: Lock,
                items: [
                    {
                        title: "Environment variables",
                        url: "/best-practices/security/env-vars",
                    },
                    {
                        title: "API routes protection",
                        url: "/best-practices/security/api-protection",
                    },
                    {
                        title: "Input validation",
                        url: "/best-practices/security/validation",
                    },
                    {
                        title: "CORS et headers",
                        url: "/best-practices/security/cors-headers",
                    },
                ],
            },
            {
                title: "Testing",
                icon: CheckCircle,
                items: [
                    {
                        title: "Unit tests (Vitest)",
                        url: "/best-practices/testing/unit-tests",
                    },
                    {
                        title: "E2E tests (Playwright)",
                        url: "/best-practices/testing/e2e-tests",
                    },
                    {
                        title: "Component testing",
                        url: "/best-practices/testing/component-tests",
                    },
                    { title: "API testing", url: "/best-practices/testing/api-tests" },
                ],
            },
        ],
    },
    {
        title: "Déploiement",
        icon: Upload,
        items: [
            {
                title: "Vercel",
                icon: Cloud,
                items: [
                    { title: "Configuration", url: "/deployment/vercel/setup" },
                    {
                        title: "Environment variables",
                        url: "/deployment/vercel/env-vars",
                    },
                    { title: "Custom domains", url: "/deployment/vercel/domains" },
                    { title: "Analytics", url: "/deployment/vercel/analytics" },
                ],
            },
            {
                title: "Alternatives",
                icon: Server,
                items: [
                    { title: "Netlify", url: "/deployment/alternatives/netlify" },
                    { title: "Railway", url: "/deployment/alternatives/railway" },
                    {
                        title: "Docker deployment",
                        url: "/deployment/alternatives/docker",
                    },
                    {
                        title: "Self-hosted options",
                        url: "/deployment/alternatives/self-hosted",
                    },
                ],
            },
        ],
    },
    {
        title: "Outils de développement",
        icon: Wrench,
        items: [
            {
                title: "Linting et Formatting",
                icon: CheckCircle,
                items: [
                    { title: "ESLint configuration", url: "/dev-tools/linting/eslint" },
                    { title: "Prettier setup", url: "/dev-tools/linting/prettier" },
                    { title: "Husky et lint-staged", url: "/dev-tools/linting/husky" },
                    { title: "Commitlint", url: "/dev-tools/linting/commitlint" },
                ],
            },
            {
                title: "TypeScript",
                icon: Code,
                items: [
                    {
                        title: "Configuration avancée",
                        url: "/dev-tools/typescript/config",
                    },
                    {
                        title: "Types utilitaires",
                        url: "/dev-tools/typescript/utility-types",
                    },
                    { title: "Strict mode", url: "/dev-tools/typescript/strict-mode" },
                    {
                        title: "Performance TypeScript",
                        url: "/dev-tools/typescript/performance",
                    },
                ],
            },
            {
                title: "Monitoring",
                icon: Activity,
                items: [
                    {
                        title: "Error tracking (Sentry)",
                        url: "/dev-tools/monitoring/sentry",
                    },
                    { title: "Analytics", url: "/dev-tools/monitoring/analytics" },
                    {
                        title: "Performance monitoring",
                        url: "/dev-tools/monitoring/performance",
                    },
                    { title: "Logging", url: "/dev-tools/monitoring/logging" },
                ],
            },
        ],
    },
    {
        title: "Exemples Pratiques",
        icon: Book,
        items: [
            {
                title: "Projets complets",
                icon: Layout,
                items: [
                    { title: "Blog avec CMS", url: "/examples/projects/blog-cms" },
                    { title: "E-commerce basique", url: "/examples/projects/ecommerce" },
                    { title: "Dashboard admin", url: "/examples/projects/dashboard" },
                    {
                        title: "Portfolio/Landing page",
                        url: "/examples/projects/portfolio",
                    },
                ],
            },
            {
                title: "Patterns courants",
                icon: Target,
                items: [
                    {
                        title: "Authentification complète",
                        url: "/examples/patterns/auth",
                    },
                    {
                        title: "CRUD avec base de données",
                        url: "/examples/patterns/crud",
                    },
                    {
                        title: "Upload de fichiers",
                        url: "/examples/patterns/file-upload",
                    },
                    { title: "API REST et GraphQL", url: "/examples/patterns/api" },
                ],
            },
        ],
    },
    {
        title: "Troubleshooting",
        icon: AlertTriangle,
        items: [
            {
                title: "Erreurs communes",
                icon: Bug,
                items: [
                    {
                        title: "Hydration errors",
                        url: "/troubleshooting/errors/hydration",
                    },
                    {
                        title: "Authentication issues",
                        url: "/troubleshooting/errors/auth",
                    },
                    { title: "Build errors", url: "/troubleshooting/errors/build" },
                    {
                        title: "Performance problems",
                        url: "/troubleshooting/errors/performance",
                    },
                ],
            },
            {
                title: "FAQ",
                icon: Book,
                items: [
                    { title: "Questions fréquentes", url: "/troubleshooting/faq/common" },
                    {
                        title: "Solutions rapides",
                        url: "/troubleshooting/faq/quick-fixes",
                    },
                    {
                        title: "Ressources externes",
                        url: "/troubleshooting/faq/resources",
                    },
                    { title: "Community", url: "/troubleshooting/faq/community" },
                ],
            },
        ],
    },
];

export default function SidebarComponent() {
    const pathname = usePathname();

    console.log("Current pathname:", pathname);

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
