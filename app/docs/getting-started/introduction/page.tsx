
export default function GSIPage() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Introduction</h1>
            <h2 className="text-xl font-semibold mb-6">Bienvenue dans votre guide complet Next.js</h2>
            <p className="mb-12">Cette documentation vous accompagnera dans la création d'applications Next.js modernes en suivant les meilleures pratiques actuelles. Vous apprendrez à construire des applications performantes, sécurisées et maintenables.</p>
            <h2 className="text-xl font-semibold mb-4">Pourquoi ce guide ?</h2>
            <p className="mb-6">Le développement web moderne évolue rapidement. Entre les nouvelles fonctionnalités de Next.js 14/15, l'évolution de React, et l'émergence d'outils comme Better Auth et shadcn/ui, il peut être difficile de s'y retrouver.</p>
            <p className="mb-6">Ce guide vous propose :</p>
            <ul className="list-disc list-inside mb-12">
                <li>Un parcours structuré du setup initial au déploiement</li>
                <li>Les meilleures pratiques validées par la communauté</li>
                <li>Des exemples concrets et des cas d'usage réels</li>
                <li>Une stack moderne et éprouvée</li>
            </ul>
            <h2 className="text-xl font-semibold mb-6">À qui s'adresse cette documentation ?</h2>
            <h3 className="text-lg font-semibold mb-4">Développeurs débutants en Next.js :</h3>
            <ul className="list-disc list-inside mb-6">
                <li>Vous connaissez React mais découvrez Next.js</li>
                <li>Vous voulez apprendre les bonnes pratiques dès le début</li>
                <li>Vous cherchez une approche structurée</li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Développeurs intermédiaires :</h3>
            <ul className="list-disc list-inside mb-12">
                <li>Vous utilisez déjà Next.js mais voulez moderniser votre stack</li>
                <li>Vous souhaitez découvrir Better Auth, shadcn/ui ou d'autres outils récents</li>
                <li>Vous cherchez à optimiser vos applications existantes</li>
            </ul>
            <h2 className="text-xl font-semibold mb-6">Philosophie de cette documentation</h2>
            <p className="mb-6"><span className="font-semibold">Pragmatique avant tout :</span> Chaque concept est accompagné d'exemples pratiques et de code fonctionnel.</p>
            <p className="mb-6"><span className="font-semibold">Stack cohérente :</span> Tous les outils présentés fonctionnent parfaitement ensemble et sont activement maintenus.</p>
            <p className="mb-12"><span className="font-semibold">Évolutive :</span> La documentation est mise à jour régulièrement pour suivre l'écosystème.</p>
            <h2 className="text-xl font-semibold mb-6">Comment utiliser ce guide</h2>
            <ul className="list-disc list-inside">
                <li className="list-decimal">Suivez l'ordre des sections pour une approche progressive</li>
                <li className="list-decimal">Consultez les exemples pratiques pour voir les concepts en action</li>
                <li className="list-decimal">Utilisez la section Troubleshooting en cas de problème</li>
                <li className="list-decimal">Référez-vous aux bonnes pratiques tout au long de votre développement</li>
            </ul>
        </>
    );
}