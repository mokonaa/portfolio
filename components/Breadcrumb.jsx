'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
    const pathname = usePathname();

    const pathSegments = pathname.split('?')[0].split('/').filter(Boolean);
    const breadcrumbs = [];

    // Ajoute "Accueil"
    breadcrumbs.push(
        <li className="filariane__li" key="accueil">
            <Link target='_blank' className='filariane__texte-projet' href="/">Accueil</Link>
        </li>
    );

    // Ajoute "Tous les projets" si on est dans /projets ou /projets/[slug]
    if (pathSegments[0] === 'projets') {
        breadcrumbs.push(
            <li className="filariane__li" key="projets">
                <span className='filariane__gap'>/</span>
                <Link target='_blank' className='filariane__texte-projet' href="/projets">Tous les projets</Link>
            </li>
        );

        // Si on est sur un projet spécifique
        if (pathSegments.length > 1) {
            const slug = pathSegments[1].replace(/-/g, ' ');
            breadcrumbs.push(
                <li className="filariane__li" key={slug}>
                    <span className='filariane__gap'> / </span>
                    <span className='filariane__texte-projet'>{decodeURIComponent(slug)}</span>
                </li>
            );
        }
    }

    return (
        <nav className="filariane" aria-label="Fil d’Ariane">
            <ul className="filariane__ul">
                {breadcrumbs}
            </ul>
        </nav>
    );
}
