"use client";
import FormationElement from '@/components/FormationElement';
import Box from '../components/Box';
import Link from 'next/link';
import '../styles/main.scss';
import { useState, useRef, useEffect } from 'react';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import Image from 'next/image';

export default function Home() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  // État pour gérer l'indication de copie
  const [isCopied, setIsCopied] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [animation, setAnimation] = useState(false);

  const tabs = [
    "Expérience professionnelle",
    "Parcours"
  ];
  

  // Mettre à jour la position du slider
  const updateSliderPosition = (index) => {
    if (tabRefs.current[index]) {
      const tab = tabRefs.current[index];
      setSliderStyle({
        left: tab.offsetLeft,
        width: tab.offsetWidth
      });
    }
  };

  // Gérer le clic sur un onglet
  const handleTabClick = (index) => {
    if (index === tabs.length - 1) {
      console.log("Dernier élément cliqué !");
      setAnimation(true);
    }
    setActiveTabIndex(index);
    setActiveTab(index);
  };

  // Mettre à jour le slider quand l'onglet actif change
  useEffect(() => {
    updateSliderPosition(activeTabIndex);
  }, [activeTabIndex]);

  // Initialiser le slider et gérer le redimensionnement
  useEffect(() => {
    updateSliderPosition(activeTabIndex);

    const handleResize = () => updateSliderPosition(activeTabIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTabIndex]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsLeaving(true); // trigger animation out
          setTimeout(() => setIsCopied(false), 150); // laisse le temps au fadeOut
        }, 2000);
      })
      .catch(err => {
        console.error('Erreur lors de la copie :', err);
      });
  };

  return (
    <>
      <Link href="/" passHref>
        <h1 className='titre'>Aline Hy</h1>
      </Link>
      <main className='accueil'>
        <Box tagName="À propos" className="description">
          <p className='description__texte'>
            Développeuse Web Front-end à Paris, France 🇫🇷<br />
            Hello ! Un matcha vous tente ? Ici vous pourrez retrouvez mes travaux professionnels mais aussi les projets que je réalise pendant  mon temps libre ou bien en bénévolat
          </p>
        </Box>
        <Box className='moi'>
          <Image className='moi__image' width={225} height={225} src="/images/accueil/moi.png" alt="dessin de moi" />
          {/* <svg viewBox="0 0 300 300" class="moi__texte">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                ✦ Let's get matcha ✦ dispomible for work ✦ Let's get matcha ✦ dispomible for work ✦ Let's go
              </textPath>
            </text>
          </svg> */}
        </Box>
        <div className='reseaux'>
          <Box href="https://www.linkedin.com/in/aline-hy/" className='reseaux__box' desktopImageSrc="/images/accueil/linkedin-box.svg" imageAlt='Cliquez pour voir mon profil LinkedIn' />
          <Box href="https://github.com/mokonaa" className='reseaux__box' desktopImageSrc="/images/accueil/github-box.svg" imageAlt='Cliquez pour voir mes projets Github' />
        </div>
        <div className='travail'>
          <Box tagName="Work" href="/projets/kusmi-tea" className='travail__box' desktopImageSrc="/images/accueil/kusmitea.webp" imageAlt='Cliquez pour avoir plus de détails sur mon expérience chez Kusmi Tea' />
          <Box tagName="Work" href="/projets/etam" className='travail__box' desktopImageSrc="/images/accueil/etam.webp" imageAlt='Cliquez pour avoir sur mon expérience chez Etam' />
        </div>
        <Box className='formation'>
          <div className='formation__tag-container'>
            <div
              className={`formation__tag-background-slider ${animation ? "transition-active" : ""}`}
              style={animation ? {
                left: sliderStyle.left - 18,
                width: sliderStyle.width + 34,
              } : {}}
            />

            {/* Tabs */}
            {tabs.map((tabText, index) => (
              <p className='formation__texte'
                key={index}
                ref={el => tabRefs.current[index] = el}
                onClick={() => handleTabClick(index)}
              >
                {tabText}
              </p>
            ))}
          </div>
          {activeTab === 0 && (
            <div className='formation__row-container'>
              <FormationElement titre="Intégratrice Web" entreprise="Kusmi Tea" duree="2023 - 2024" />
              <FormationElement titre="Intégratrice Web" entreprise="Etam" duree="2021 - 2023" />
            </div>
          )}

          {activeTab === 1 && (
            <div className='formation__row-container formation__row-container--scroll'>
              <FormationElement titre="Mastère Développpement Web" entreprise="ECV Digital, Paris" duree="2022 - 2024 / 2 ans" />
              <FormationElement titre="Licence Pro Développement Web et Mobile" entreprise="IUT de Bobigny, Bobigny" duree="2021 - 2022 / 1 an" />
              <FormationElement titre="DEC Techniques d’Intégration Multimédia" entreprise="CÉGEP de Matane, Matane QC" duree="2020 - 2021 / 1 an" />
              <FormationElement titre="DUT Multimédia et de l’Internet" entreprise="IUT de Laval, Laval" duree="2018 - 2020 / 2 ans" />
            </div>
          )}
          <Link href="https://drive.google.com/file/d/1W7xOZRIYOdp8tIRoV5UHB540YrKnWNR-/view?usp=sharing" target="_blank" passHref>
            <div className='formation__cv'>
              <p className='formation__cv-texte'>Voir mon CV</p>
              <svg className='formation__arrow' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9962 2.05623C14.0445 1.50607 13.6376 1.0209 13.0875 0.972584L4.12199 0.185246C3.57182 0.136931 3.08665 0.543763 3.03834 1.09393C2.99002 1.6441 3.39685 2.12926 3.94702 2.17758L11.9164 2.87743L11.2165 10.8468C11.1682 11.3969 11.575 11.8821 12.1252 11.9304C12.6753 11.9787 13.1605 11.5719 13.2088 11.0217L13.9962 2.05623ZM1.64254 12.7975L13.6425 2.73501L12.3575 1.2025L0.357463 11.265L1.64254 12.7975Z" fill="black" />
              </svg>
            </div>
          </Link>
        </Box>
        <Box className='stack' tagName="Ma stack">
          <div className='stack__splide'>
            <Slider />
          </div>
        </Box>
        <div className='projets'>
          <Box href="/projets/mange-tes-carottes" tagName="Application mobile" className='mtc' backgroundDesktop="/images/accueil/mtc_desk.webp" backgroundMobile="/images/accueil/mtc_mob.webp" imageAlt="Cliquez pour voir l'application que j'ai développé" />
          <Box href="/projets/les-minis-deboggueurs" tagName="Webapp" className='debog' desktopImageSrc="/images/accueil/minis_debog_desk.webp" mobileImageSrc="/images/accueil/minis_debog_mob.webp" imageAlt="Cliquez pour voir l'application que j'ai développé" />
        </div>
        <Box className='email' onClick={() => copyToClipboard("hy.aline@outlook.com")}>
          <h2 className='email__titre'>Intéressé.e ?</h2>
          <div className='email__container'>
            <p className='email__texte'>Copier l&#39;email</p>
            <svg className='email__copy' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.75 0.5H5.75C5.55109 0.5 5.36032 0.579018 5.21967 0.71967C5.07902 0.860322 5 1.05109 5 1.25V5H1.25C1.05109 5 0.860322 5.07902 0.71967 5.21967C0.579018 5.36032 0.5 5.55109 0.5 5.75V17.75C0.5 17.9489 0.579018 18.1397 0.71967 18.2803C0.860322 18.421 1.05109 18.5 1.25 18.5H13.25C13.4489 18.5 13.6397 18.421 13.7803 18.2803C13.921 18.1397 14 17.9489 14 17.75V14H17.75C17.9489 14 18.1397 13.921 18.2803 13.7803C18.421 13.6397 18.5 13.4489 18.5 13.25V1.25C18.5 1.05109 18.421 0.860322 18.2803 0.71967C18.1397 0.579018 17.9489 0.5 17.75 0.5ZM12.5 17H2V6.5H12.5V17ZM17 12.5H14V5.75C14 5.55109 13.921 5.36032 13.7803 5.21967C13.6397 5.07902 13.4489 5 13.25 5H6.5V2H17V12.5Z" fill="black" />
            </svg>
          </div>
          {isCopied && (
            <div className={`email__message ${isLeaving ? 'fade-out' : ''}`}>
              <svg className="email__message-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
              </svg>
              C&#39;est copié !
            </div>
          )}
        </Box>
      </main>
      <Footer />
    </>
  )
}
