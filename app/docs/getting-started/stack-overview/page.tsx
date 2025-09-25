export default function DocsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Vue d&apos;ensemble du stack</h1>
            <h2 className="text-xl font-semibold mb-6">Architecture générale</h2>
            <p className="mb-6">
                Notre stack moderne se compose de plusieurs couches qui travaillent en harmonie :
            </p>
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

            <h2 className="text-xl font-semibold mb-6">Technologies principales</h2>
            <h3 className="text-lg font-semibold mb-4">Next.js 14/15 - Framework Full-Stack</h3>
            <ul className="list-disc list-inside mb-6">
                <li>App Router pour une architecture moderne</li>
                <li>Server Components pour des performances optimales</li>
                <li>API Routes pour votre backend</li>
                <li>Built-in optimizations (images, fonts, bundle)</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Pourquoi Next.js ?</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Performances exceptionnelles out-of-the-box</li>
                <li>SEO friendly avec SSR/SSG</li>
                <li>Excellent DX (Developer Experience)</li>
                <li>Écosystème riche et communauté active</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">shadcn/ui - Composants UI</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Composants réutilisables basés sur Radix UI</li>
                <li>Customisation complète avec Tailwind CSS</li>
                <li>Accessibilité intégrée (WCAG)</li>
                <li>Copy-paste friendly - vous possédez le code</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Pourquoi shadcn/ui ?</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Design system cohérent et moderne</li>
                <li>Maintenance facilitée</li>
                <li>Performance optimale (tree-shaking)</li>
                <li>Flexibilité maximale</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Better Auth - Authentification</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Alternative moderne à NextAuth.js</li>
                <li>Type-safe avec TypeScript</li>
                <li>Flexible et extensible</li>
                <li>Sécurisé par défaut</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Pourquoi Better Auth ?</h3>
            <ul className="list-disc list-inside mb-8">
                <li>API plus intuitive que NextAuth</li>
                <li>Meilleure gestion des types</li>
                <li>Performance supérieure</li>
                <li>Documentation claire</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Prisma - ORM & Database</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Type-safe database access</li>
                <li>Schema-first development</li>
                <li>Migration system robuste</li>
                <li>Excellent DevTools</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Pourquoi Prisma ?</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Developer Experience exceptionnel</li>
                <li>Sécurité des types garantie</li>
                <li>Introspection et génération automatique</li>
                <li>Support multi-providers</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Stack complémentaire</h2>
            <h3 className="text-lg font-semibold mb-2">State Management :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Zustand : State management simple et performant</li>
                <li>TanStack Query : Server state et cache management</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Styling :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Tailwind CSS : Utility-first CSS framework</li>
                <li>CSS Variables : Thèmes dynamiques</li>
                <li>Responsive design : Mobile-first approach</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Development Tools :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>TypeScript : Type safety et meilleur DX</li>
                <li>ESLint + Prettier : Code quality et formatting</li>
                <li>Husky : Git hooks pour la qualité</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Testing :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Vitest : Unit et integration tests</li>
                <li>Playwright : End-to-end testing</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Deployment :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Vercel : Platform optimisée pour Next.js</li>
                <li>Continuous Integration : Déploiement automatique</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Avantages de cette stack</h2>
            <h3 className="text-lg font-semibold mb-2">Performance :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Server Components réduisent le JavaScript côté client</li>
                <li>Streaming pour un loading progressif</li>
                <li>Image optimization automatique</li>
                <li>Bundle splitting intelligent</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Developer Experience :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Type safety de bout en bout</li>
                <li>Hot reload ultra-rapide</li>
                <li>Excellent debugging tools</li>
                <li>IntelliSense partout</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Scalabilité :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Architecture modulaire</li>
                <li>Database scaling avec Prisma</li>
                <li>Edge functions support</li>
                <li>Micro-optimizations built-in</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Maintenabilité :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Component isolation avec shadcn/ui</li>
                <li>Clear separation of concerns</li>
                <li>Consistent code style</li>
                <li>Comprehensive testing</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Alternatives considérées</h2>
            <h3 className="text-lg font-semibold mb-2">Frameworks :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Remix : Excellent mais écosystème plus petit</li>
                <li>SvelteKit : Performant mais moins mature</li>
                <li>Astro : Parfait pour les sites statiques</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Authentification :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>NextAuth.js : Mature mais API complexe</li>
                <li>Clerk : Excellent mais payant</li>
                <li>Auth0 : Enterprise mais coûteux</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">UI Libraries :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Chakra UI : Simple mais moins flexible</li>
                <li>Material-UI : Complet mais plus lourd</li>
                <li>Ant Design : Professionnel mais style figé</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Migration et adoption</h2>
            <h3 className="text-lg font-semibold mb-2">Migration depuis :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Create React App → Guide de migration inclus</li>
                <li>NextAuth → Stratégie de transition détaillée</li>
                <li>Other UI libs → Composants de transition</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Adoption progressive :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Commencez par un nouveau projet</li>
                <li>Migrez composant par composant</li>
                <li>Testez en parallèle de votre stack actuelle</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Prochaines étapes</h2>
            <p className="mb-6">
                Maintenant que vous comprenez l&apos;architecture générale, nous allons plonger dans chaque technologie :
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Next.js : Configuration et concepts fondamentaux</li>
                <li>shadcn/ui : Installation et premiers composants</li>
                <li>Better Auth : Authentification complète</li>
                <li>Prisma : Modélisation et accès aux données</li>
            </ul>
            <p className="mb-6">
                Chaque section inclut des exemples pratiques et des cas d&apos;usage réels pour vous permettre de maîtriser rapidement ces technologies.
            </p>
        </>
    );
}
