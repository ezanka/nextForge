import DocsTitle from "@/src/components/ui/docs/global/title";
import DocsSubtitle from "@/src/components/ui/docs/global/subtitle";
import DocsCaption from "@/src/components/ui/docs/global/caption";
import DocsParagraph from "@/src/components/ui/docs/global/paragraph";
import DocsList from "@/src/components/ui/docs/global/list";
import DocsMb4 from "@/src/components/ui/docs/global/mb-4";
import DocsMb6 from "@/src/components/ui/docs/global/mb-6";
import DocsMb12 from "@/src/components/ui/docs/global/mb-12";

export default function GSPPage() {
    return (
        <>
            <DocsTitle title="Prérequis" />
            <DocsSubtitle subtitle="Connaissances techniques requises" />
            <DocsMb6 />
            <DocsCaption caption="JavaScript/TypeScript :" /> 
            <DocsMb4 />
            <ul className="list-disc list-inside mb-6">
                <li>Syntaxe ES6+ (async/await, destructuring, modules)</li>
                <li>Concepts de base de TypeScript (types, interfaces)</li>
                <li>Promesses et gestion asynchrone</li>
            </ul>
            <DocsMb6 />
            <DocsCaption caption="React :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Composants fonctionnels et hooks (useState, useEffect)",
                "Props et state management",
                "Event handling et lifecycle"
            ]} />
            <DocsMb6 />
            <DocsCaption caption="Web Development :" />
            <DocsMb4 />
            <DocsList itemList={[
                "HTML5 et CSS3",
                "Concepts REST API",
                "Notions de base en sécurité web"
            ]} />
            <DocsMb12 />
            <DocsSubtitle subtitle="Environnement de développement" />
            <DocsMb4 />
            <DocsCaption caption="Node.js :" />
            <DocsMb4 />
            <code className="bg-card p-4 rounded border mb-6 block overflow-x-auto">
                <pre className="data-rehype-pretty-code-pre whitespace-pre-wrap break-words">
                    <p><span className="text-ring"># Version recommandée : 18.x ou 20.x</span></p>
                    <p>node --version <span className="text-ring"># v18.17.0 ou plus récent</span></p>
                    <p>npm --version  <span className="text-ring"># 9.x ou plus récent</span></p>
                </pre>
            </code>
            <DocsMb6 />
            <DocsCaption caption="Gestionnaire de paquets :" />
            <DocsMb4 />
            <DocsParagraph paragraph="Nous recommandons pnpm pour ses performances et sa gestion des dépendances :" />
            <DocsMb6 />
            <code className="bg-card p-4 rounded border mb-6 block overflow-x-auto">
                <pre className="data-rehype-pretty-code-pre whitespace-pre-wrap break-words">
                    <p>npm install -g pnpm</p>
                </pre>
            </code>
            <DocsMb6 />
            <p>Alternatives acceptées : <span className="text-chart-5/60 bg-card p-1 rounded-xs border">npm</span> ou <span className="text-chart-5/60 bg-card p-1 rounded-xs border">yarn</span></p>
            <DocsMb6 />
            <DocsCaption caption="Éditeur de code :" />
            <DocsMb4 />
            <ul className="list-disc list-inside mb-8">
                <li>Visual Studio Code (recommandé) avec les extensions:</li>
                <ul className="list-disc list-inside ml-5 mt-2">
                    <li>TypeScript and JavaScript Language Features</li>
                    <li>Tailwind CSS IntelliSense</li>
                    <li>Prettier - Code formatter</li>
                    <li>ESLint</li>
                </ul>
            </ul>
            <DocsMb6 />
            <h3 className="text-lg font-semibold mb-4">Éditeur de code :</h3>
            <DocsCaption caption="Éditeur de code :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Installation de Git",
                "Compte GitHub/GitLab pour le versioning"
            ]} />
            <DocsMb6 />
            <DocsSubtitle subtitle="Outils optionnels mais recommandés" />
            <DocsMb4 />
            <DocsCaption caption="Base de données locale :" />
            <DocsMb4 />
            <DocsList itemList={[
                "PostgreSQL ou MySQL pour les bases de données relationnelles",
                "SQLite pour une configuration plus simple"
            ]} />
            <DocsMb6 />
            <DocsCaption caption="Outils de développement :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Postman ou Insomnia pour tester les API",
                "Chrome DevTools pour le debugging"
            ]} />
            <DocsMb12 />
            <DocsSubtitle subtitle="Vérification de l&apos;installation" />
            <DocsMb4 />
            <DocsParagraph paragraph="Créez un projet Next.js simple pour vérifier que tout fonctionne :" />
            <DocsMb6 />
            <code className="bg-card p-4 rounded border mb-6 block overflow-x-auto">
                <pre className="data-rehype-pretty-code-pre whitespace-pre-wrap break-words">
                    <p>npx create-next-app@latest test-setup --typescript --tailwind --eslint --app</p>
                    <p>cd test-setup</p>
                    <p>npm run dev</p>
                </pre>
            </code>
            <DocsMb6 />
            <p>Si vous voyez la page Next.js par défaut sur <span className="text-chart-5/60 bg-card p-1 rounded-xs border">http://localhost:3000</span>, votre environnement est prêt !</p>
            <DocsMb6 />
            <DocsSubtitle subtitle="Ressources supplémentaires" />
            <DocsMb4 />
            <DocsCaption caption="Documentation officielle :" />
            <DocsMb4 />
            <ul className="list-disc list-inside mb-6">
                <li><a href="https://nextjs.org/docs" className="text-ring underline">Next.js Docs</a></li>
                <li><a href="https://reactjs.org/docs/getting-started.html" className="text-ring underline">React Docs</a></li>
                <li><a href="https://www.typescriptlang.org/docs/" className="text-ring underline">TypeScript Docs</a></li>
                <li><a href="https://tailwindcss.com/docs" className="text-ring underline">Tailwind CSS Docs</a></li>
            </ul>
            <DocsMb6 />
            <DocsCaption caption="Communautés :" />
            <DocsMb4 />
            <ul className="list-disc list-inside mb-6">
                <li><a href="https://discord.com/invite/nextjs" className="text-ring underline">Next.js Discord</a></li>
                <li><a href="https://www.reddit.com/r/nextjs/" className="text-ring underline">Reddit r/nextjs</a></li>
                <li><a href="https://stackoverflow.com/questions/tagged/next.js" className="text-ring underline">Stack Overflow</a></li>
            </ul>
        </>
    );
}