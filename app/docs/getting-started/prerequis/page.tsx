
export default function GSPPage() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Prérequis</h1>
            <h2 className="text-xl font-semibold mb-6">Connaissances techniques requises</h2>
            <h3 className="text-lg font-semibold mb-4">JavaScript/TypeScript :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Syntaxe ES6+ (async/await, destructuring, modules)</li>
                <li>Concepts de base de TypeScript (types, interfaces)</li>
                <li>Promesses et gestion asynchrone</li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">React :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Composants fonctionnels et hooks (useState, useEffect)</li>
                <li>Props et state management</li>
                <li>Event handling et lifecycle</li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Web Development :</h3>
            <ul className="list-disc list-inside mb-12">
                <li>HTML5 et CSS3</li>
                <li>Concepts REST API</li>
                <li>Notions de base en sécurité web</li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">Environnement de développement</h2>
            <h3 className="text-lg font-semibold mb-4">Node.js :</h3>
            <code className="bg-card p-4 rounded border mb-6 block ">
                <pre className="data-rehype-pretty-code-pre">
                    <p><span className="text-ring"># Version recommandée : 18.x ou 20.x</span></p>
                    <p>node --version <span className="text-ring"># v18.17.0 ou plus récent</span></p>
                    <p>npm --version  <span className="text-ring"># 9.x ou plus récent</span></p>
                </pre>
            </code>
            <h3 className="text-lg font-semibold mb-4">Gestionnaire de paquets :</h3>
            <p className="mb-6">Nous recommandons pnpm pour ses performances et sa gestion des dépendances :</p>
            <code className="bg-card p-4 rounded border mb-6 block">
                <pre className="data-rehype-pretty-code-pre">
                    <p>npm install -g pnpm</p>
                </pre>
            </code>
            <p className="mb-8">Alternatives acceptées : <span className="text-chart-5/60 bg-card p-1 rounded-xs border">npm</span> ou <span className="text-chart-5/60 bg-card p-1 rounded-xs border">yarn</span></p>
            <h3 className="text-lg font-semibold mb-4">Éditeur de code :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Visual Studio Code (recommandé) avec les extensions:</li>
                <ul className="list-disc list-inside ml-5 mt-2">
                    <li>TypeScript and JavaScript Language Features</li>
                    <li>Tailwind CSS IntelliSense</li>
                    <li>Prettier - Code formatter</li>
                    <li>ESLint</li>
                </ul>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Éditeur de code :</h3>
            <ul className="list-disc list-inside mb-8">
                <li>Installation de Git</li>
                <li>Compte GitHub/GitLab pour le versioning</li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">Outils optionnels mais recommandés</h2>
            <h3 className="text-lg font-semibold mb-4">Base de données locale :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Docker pour PostgreSQL/MySQL local</li>
                <li>Ou SQLite pour un démarrage plus simple</li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Outils de développement :</h3>
            <ul className="list-disc list-inside mb-12">
                <li>Postman ou Insomnia pour tester les API</li>
                <li>Chrome DevTools pour le debugging</li>
                <li>React Developer Tools (extension Chrome/Firefox)</li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">Vérification de l&apos;environnement</h2>
            <p className="mb-6">Créez un projet Next.js simple pour vérifier que tout fonctionne :</p>
            <code className="bg-card p-4 rounded border mb-6 block overflow-x-auto">
                <pre className="data-rehype-pretty-code-pre whitespace-pre-wrap break-words">
                    <p>npx create-next-app@latest test-setup --typescript --tailwind --eslint --app</p>
                    <p>cd test-setup</p>
                    <p>npm run dev</p>
                </pre>
            </code>
            <p className="mb-6">Si vous voyez la page Next.js par défaut sur <span className="text-chart-5/60 bg-card p-1 rounded-xs border">http://localhost:3000</span>, votre environnement est prêt !</p>
            <h2 className="text-xl font-semibold mb-4">Ressources complémentaires</h2>
            <h3 className="text-lg font-semibold mb-4">Documentation officielle :</h3>
            <ul className="list-disc list-inside mb-6">
                <li><a href="https://nextjs.org/docs" className="text-ring underline">Next.js Docs</a></li>
                <li><a href="https://reactjs.org/docs/getting-started.html" className="text-ring underline">React Docs</a></li>
                <li><a href="https://www.typescriptlang.org/docs/" className="text-ring underline">TypeScript Docs</a></li>
                <li><a href="https://tailwindcss.com/docs" className="text-ring underline">Tailwind CSS Docs</a></li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Communautés :</h3>
            <ul className="list-disc list-inside mb-6">
                <li><a href="https://discord.com/invite/nextjs" className="text-ring underline">Next.js Discord</a></li>
                <li><a href="https://www.reddit.com/r/nextjs/" className="text-ring underline">Reddit r/nextjs</a></li>
                <li><a href="https://stackoverflow.com/questions/tagged/next.js" className="text-ring underline">Stack Overflow</a></li>
            </ul>
        </>
    );
}