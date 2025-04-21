
"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Link from "next/link";
import Box from "@/components/Box";
import { motion, AnimatePresence } from 'framer-motion';


export default function ProjetElement({ projet }) {

    const [visible, setVisible] = useState(false);

    return (
        <div className='single-page'>
            <Link href="/" passHref>
                <h1 className='titre'>Aline Hy</h1>
            </Link>
            <Breadcrumb />
            <div className="single-page__container">
                {/* Premier élément qui prend toute la première ligne */}
                <Box className="single-page__description full-row">
                    <h2 className="single-page__titre">{projet.titre}</h2>
                    <p className="single-page__descriptif">{projet.descriptif}</p>
                </Box>

                {/* Deuxième ligne (les détails) */}
                <Box className="single-page__details single-page__details-textuel" tagName="Rôle">
                    <p className="single-page__texte">{projet.role}</p>
                </Box>
                {!projet.github ? (
                    <Box className="single-page__details single-page__details-textuel technologies" tagName="Technologies">
                        <p className="single-page__texte">{projet.technologies}</p>
                    </Box>
                ) : (
                    <Box className="single-page__details single-page__details-textuel" tagName="Technologies">
                        <p className="single-page__texte">{projet.technologies}</p>
                    </Box>
                )}

                <Box className="single-page__details single-page__details-textuel" tagName="Année">
                    <p className="single-page__texte">{projet.annee}</p>
                </Box>

                {projet.github && (
                    <Box
                        href={projet.github}
                        className="single-page__github"
                        desktopImageSrc="/images/accueil/github-box.svg"
                    />
                )}
                <Box href={projet.demo} className={`single-page__button ${!projet.github ? "single-page__button--full": ""}`}>
                    <p className="single-page__button-texte">{projet.cta}</p>
                </Box>

                {/* Image démo */}
                <Box
                    href={projet.lien}
                    className="single-page__image single-page__image--first"
                    backgroundDesktop={projet.images[0]}
                    backgroundMobile={projet.images[0]}
                />
                <Box
                    href={projet.lien}
                    className="single-page__image single-page__image--deux"
                    backgroundDesktop={projet.images[1]}
                    backgroundMobile={projet.images[1]}
                />

                {/* Contexte */}
                <Box className="single-page__contexte">
                    <h2 className="single-page__contexte-titre">Contexte</h2>
                    <p className="single-page__contexte-description">
                        {projet.contexte.slice(0, 2).map((texte, index) => (
                            <span key={index}>{texte}</span>
                        ))}
                    </p>

                    {/* Animation Voir plus/moins */}
                    <AnimatePresence>
                        {visible && (
                            <motion.div
                                className="single-page__voir-plus-wrapper"
                                initial={{ maxHeight: 0, opacity: 0 }}
                                animate={{ maxHeight: 1000, opacity: 1 }}
                                exit={{ maxHeight: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="single-page__voir-plus-content">
                                    <p className="single-page__contexte-description single-page__contexte-description--underline">
                                        {projet.contexte[2]}
                                    </p>
                                    <ul className="single-page__contexte-ul">
                                        {projet.contexte.slice(3).map((texte, index) => (
                                            <li className="single-page__contexte-description" key={index}>
                                                {texte}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <p
                        className="single-page__voir-plus-texte"
                        onClick={() => setVisible(!visible)}
                    >
                        {visible ? 'Voir moins' : 'Voir plus'}
                    </p>
                </Box>
            </div>
            <Footer />
        </div>
    )
}