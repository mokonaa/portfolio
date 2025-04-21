// app/projets/[slug]/page.jsx - Composant serveur (sans "use client")
import { notFound } from 'next/navigation';
import { projets } from "@/app/projets";
import ProjetElement from '@/components/ProjetElement';

export async function generateStaticParams() {
    return projets.map((projet) => ({
        slug: projet.slug,
    }));
}

export default async function Page({ params }) {
    // Utilisation asynchrone de params
    const paramData = await params;
    const { slug } = paramData;

    const projet = projets.find(p => p.slug === slug);

    if (!projet) return notFound();

    // Passer les données au composant client
    return <ProjetElement projet={projet} />;
}
