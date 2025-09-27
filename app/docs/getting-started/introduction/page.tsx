import DocsTitle from "@/src/components/ui/docs/global/title";
import DocsSubtitle from "@/src/components/ui/docs/global/subtitle";
import DocsCaption from "@/src/components/ui/docs/global/caption";
import DocsParagraph from "@/src/components/ui/docs/global/paragraph";
import DocsList from "@/src/components/ui/docs/global/list";
import DocsListNumber from "@/src/components/ui/docs/global/list-number";
import DocsMb4 from "@/src/components/ui/docs/global/mb-4";
import DocsMb6 from "@/src/components/ui/docs/global/mb-6";
import DocsMb12 from "@/src/components/ui/docs/global/mb-12";


export default function GSIPage() {
    return (
        <>
            <DocsTitle title="Introduction" />
            <DocsMb4 />
            <DocsSubtitle subtitle="Bienvenue dans votre guide complet Next.js" />
            <DocsMb6 />
            <DocsParagraph paragraph="Cette documentation vous accompagnera dans la création d'applications Next.js modernes en suivant les meilleures pratiques actuelles. Vous apprendrez à construire des applications performantes, sécurisées et maintenables." />
            <DocsMb12 />
            <DocsSubtitle subtitle="Pourquoi ce guide ?" />
            <DocsMb4 />
            <DocsParagraph paragraph="Le développement web moderne évolue rapidement. Entre les nouvelles fonctionnalités de Next.js 14/15, l&apos;évolution de React, et l&apos;émergence d&apos;outils comme Better Auth et shadcn/ui, il peut être difficile de s&apos;y retrouver." />
            <DocsMb6 />
            <DocsParagraph paragraph="Ce guide vous propose :" />
            <DocsMb6 />
            <DocsList itemList={[
                "Un parcours structuré du setup initial au déploiement",
                "Les meilleures pratiques validées par la communauté",
                "Des exemples concrets et des cas d'usage réels",
                "Une stack moderne et éprouvée"
            ]} />
            <DocsMb12 />
            <DocsSubtitle subtitle="À qui s&apos;adresse cette documentation ?" />
            <DocsMb6 />
            <DocsCaption caption="Développeurs débutants en Next.js :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Vous connaissez React mais découvrez Next.js",
                "Vous voulez apprendre les bonnes pratiques dès le début",
                "Vous cherchez une approche structurée"
            ]} />
            <DocsMb6 />
            <DocsCaption caption="Développeurs intermédiaires :" />
            <DocsMb4 />
            <DocsList itemList={[
                "Vous utilisez déjà Next.js mais voulez moderniser votre stack",
                "Vous souhaitez découvrir Better Auth, shadcn/ui ou d'autres outils récents",
                "Vous cherchez à optimiser vos applications existantes"
            ]} />
            <DocsMb12 />
            <DocsSubtitle subtitle="Philosophie de cette documentation" />
            <DocsMb6 />
            <DocsParagraph paragraph="Pragmatique avant tout : Chaque concept est accompagné d&apos;exemples pratiques et de code fonctionnel." />
            <DocsMb6 />
            <DocsParagraph paragraph="Stack cohérente : Tous les outils présentés fonctionnent parfaitement ensemble et sont activement maintenus." />
            <DocsMb6 />
            <DocsParagraph paragraph="Évolutive : La documentation est mise à jour régulièrement pour suivre l&apos;écosystème." />
            <DocsMb12 />
            <DocsSubtitle subtitle="Comment utiliser ce guide" />
            <DocsMb6 />
            <DocsListNumber itemList={[
                "Suivez l'ordre des sections pour une approche progressive",
                "Consultez les exemples pratiques pour voir les concepts en action",
                "Utilisez la section Troubleshooting en cas de problème",
                "Référez-vous aux bonnes pratiques tout au long de votre développement"
            ]} />
        </>
    );
}