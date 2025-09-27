import DocsTitle from "@/src/components/ui/docs/global/title";
import DocsSubtitle from "@/src/components/ui/docs/global/subtitle";
import DocsCaption from "@/src/components/ui/docs/global/caption";
import DocsParagraph from "@/src/components/ui/docs/global/paragraph";
import DocsList from "@/src/components/ui/docs/global/list";
import DocsMb4 from "@/src/components/ui/docs/global/mb-4";
import DocsMb6 from "@/src/components/ui/docs/global/mb-6";

export default function GSSOPage() {
    return (
        <>
            <DocsTitle title="Vue d'ensemble du stack" />
            <DocsMb6 />
            <DocsSubtitle subtitle="Technologies clés et architecture" />
            <DocsMb6 />
            <DocsParagraph paragraph="Notre stack moderne se compose de plusieurs couches qui travaillent en harmonie :" />
            <DocsMb6 />
            <div className="bg-card text-foreground p-4 rounded-md mb-8 flex items-center justify-center flex-col">
                <table className="border-collapse border max-w-lg w-full">
                    <tbody className="flex flex-col items-center justify-center gap-4">
                        <tr className="flex flex-col items-center justify-center gap-1 border-b py-4 w-full">
                            <th scope="row">Frontend</th>
                            <td>Next.js 14+ + shadcn/ui + Tailwind</td>
                        </tr>
                        <tr className="flex flex-col items-center justify-center gap-1 border-b pb-4 w-full">
                            <th scope="row">Authentication</th>
                            <td>Better Auth</td>
                        </tr>
                        <tr className="flex flex-col items-center justify-center gap-1 border-b pb-4 w-full">
                            <th scope="row">State Management</th>
                            <td>Zustand + TanStack Query</td>
                        </tr>
                        <tr className="flex flex-col items-center justify-center gap-1 border-b pb-4 w-full">
                            <th scope="row">Database</th>
                            <td>Prisma + PostgreSQL</td>
                        </tr>
                        <tr className="flex flex-col items-center justify-center gap-1 pb-4 w-full">
                            <th scope="row">Deployment</th>
                            <td>Vercel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DocsMb6 />
            <DocsSubtitle subtitle="Technologies principales" />
            <DocsMb6 />
            <DocsCaption caption="Next.js 14/15 - Framework Full-Stack" />
            <DocsMb4 />
            <DocsList itemList={[
                "App Router pour une architecture moderne",
                "Server Components pour des performances optimales",
                "API Routes pour votre backend",
                "Built-in optimizations (images, fonts, bundle)"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Pourquoi Next.js ?" />
            <DocsMb4 />
            <DocsList itemList={[
                "Performances exceptionnelles out-of-the-box",
                "SEO friendly avec SSR/SSG",
                "Excellent DX (Developer Experience)",
                "Écosystème riche et communauté active"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Bibliothèque de composants basée sur Radix UI" />
            <DocsMb4 />
            <DocsList itemList={[
                "Composants réutilisables basés sur Radix UI",
                "Customisation complète avec Tailwind CSS",
                "Accessibilité intégrée (WCAG)",
                "Copy-paste friendly - vous possédez le code"
            ]} />
            <DocsMb6 />
            <DocsCaption caption="Pourquoi shadcn/ui ?" />
            <DocsMb4 />
            <DocsList itemList={[
                "Design system cohérent et moderne",
                "Maintenance facilitée",
                "Performance optimale (tree-shaking)",
                "Flexibilité maximale"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Authentification avec Better Auth" />
            <DocsList itemList={[
                "Alternative moderne à NextAuth.js",
                "Type-safe avec TypeScript",
                "Flexible et extensible"
            ]} />
            <DocsMb6 />
            <DocsCaption caption="Pourquoi Better Auth ?" />
            <DocsList itemList={[
                "API plus intuitive que NextAuth",
                "Meilleure gestion des types",
                "Performance supérieure",
                "Documentation claire"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Pourquoi un ORM ?" />
            <DocsMb4 />
            <DocsList itemList={[
                "Type-safe database access",
                "Schema-first development",
                "Migration system robuste",
                "Excellent DevTools"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Pourquoi Prisma ?" />
            <DocsMb4 />
            <DocsList itemList={[
                "Developer Experience exceptionnel",
                "Sécurité des types garantie",
                "Introspection et génération automatique",
                "Support multi-providers"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Stack complémentaire" />
            <DocsMb4 />
            <DocsSubtitle subtitle="State Management :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Zustand : State management simple et performant",
                "TanStack Query : Server state et cache management"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Styling :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Tailwind CSS : Utility-first CSS framework",
                "CSS Variables : Thèmes dynamiques",
                "Responsive design : Mobile-first approach"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Development Tools :" />
            <DocsMb4 />
            <DocsList itemList={[
                "TypeScript : Type safety et meilleur DX",
                "ESLint + Prettier : Code quality et formatting",
                "Husky : Git hooks pour la qualité"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Testing :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Jest : Framework de test unitaire",
                "React Testing Library : Tests pour les composants React",
                "Vitest : Unit et integration tests",
                "Playwright : End-to-end testing"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Deployment :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Vercel : Platform optimisée pour Next.js",
                "Continuous Integration : Déploiement automatique"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Avantages de cette stack" />
            <DocsMb4 />
            <DocsSubtitle subtitle="Performance :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Server Components réduisent le JavaScript côté client",
                "Streaming pour un loading progressif",
                "Image optimization automatique",
                "Bundle splitting intelligent"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Developer Experience :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Type safety de bout en bout",
                "Hot reload ultra-rapide",
                "Excellent debugging tools",
                "IntelliSense partout"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Scalabilité :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Architecture modulaire",
                "Database scaling avec Prisma",
                "Edge functions support",
                "Micro-optimizations built-in"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Maintenabilité :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Component isolation avec shadcn/ui",
                "Clear separation of concerns",
                "Consistent code style",
                "Comprehensive testing"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Alternatives considérées" />
            <DocsMb4 />
            <DocsSubtitle subtitle="Frameworks :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Remix : Excellent mais écosystème plus petit",
                "SvelteKit : Performant mais moins mature",
                "Astro : Parfait pour les sites statiques"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Authentification :" />
            <DocsMb4 />
            <DocsList itemList={[
                "NextAuth.js : Mature mais API complexe",
                "Clerk : Excellent mais payant",
                "Auth0 : Enterprise mais coûteux"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="UI Libraries :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Chakra UI : Simple mais moins flexible",
                "Material-UI : Complet mais plus lourd",
                "Ant Design : Professionnel mais style figé"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Migration et adoption" />
            <DocsMb4 />
            <DocsSubtitle subtitle="Migration depuis :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Create React App → Guide de migration inclus",
                "NextAuth → Stratégie de transition détaillée",
                "Other UI libs → Composants de transition"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Adoption progressive :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Commencez par un nouveau projet",
                "Migrez composant par composant",
                "Testez en parallèle de votre stack actuelle"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Prochaines étapes" />
            <DocsMb4 />
            <DocsParagraph paragraph="Vous avez maintenant une vue d'ensemble claire de notre stack moderne. Pour tirer le meilleur parti de cette documentation, nous vous recommandons de suivre les sections dans l'ordre, en commençant par l'installation et la configuration de chaque technologie." />
            <DocsMb6 />
            <DocsList itemList={[
                "Next.js : Configuration et concepts fondamentaux",
                "shadcn/ui : Installation et premiers composants",
                "Better Auth : Authentification complète",
                "Prisma : Modélisation et accès aux données"
            ]} />
            <DocsMb6 />
            <DocsParagraph paragraph="Chaque section suivante vous guidera à travers les concepts clés, les meilleures pratiques et des exemples concrets pour maîtriser chaque partie de ce stack puissant." />
        </>
    );
}
