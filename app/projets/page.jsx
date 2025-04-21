import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projets } from "../projets";
import Box from "@/components/Box";

export default function page() {
    return (
        <div className='allprojets'>
            <Link href="/" passHref>
                <h1 className='titre'>Aline Hy</h1>
            </Link>
            <Breadcrumb />
            <div className="allprojets__container">
                {projets.map((projet, index) => (
                    <Box href={`/projets/${projet.slug}`} key={index} className={`${projet.slug} allprojets__box`} backgroundDesktop={projet.images[0]} backgroundMobile={projet.images[0]} imageAlt="Cliquez pour voir le projet" title={projet.titre}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}