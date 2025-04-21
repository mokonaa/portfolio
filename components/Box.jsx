'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Box({
    href,
    mobileImageSrc,
    desktopImageSrc,
    backgroundMobile,
    backgroundDesktop,
    imageAlt = '',
    children,
    className = '',
    onClick,
    tagName,
    title
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundImage = isMobile ? backgroundMobile : backgroundDesktop;

    const content = (
        <>
            {tagName && (
                <div className="box__tag">
                    <p className="box__tag-texte">{tagName}</p>
                </div>
            )}

            {/* VERSION BACKGROUND */}
            {backgroundImage && (
                <div
                    className="box__picture-container"
                    role="img"
                    aria-label={imageAlt}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                    }}
                />
            )}

            {/* VERSION IMAGE / <picture> */}
            {(mobileImageSrc || desktopImageSrc) && (
                <div className="box__picture-container">
                    <picture>
                        {mobileImageSrc && (
                            <source media="(max-width: 768px)" srcSet={mobileImageSrc} />
                        )}
                        {desktopImageSrc && (
                            <source media="(min-width: 769px)" srcSet={desktopImageSrc} />
                        )}
                        <img
                            src={desktopImageSrc || mobileImageSrc}
                            alt={imageAlt}
                        />
                    </picture>
                </div>
            )}

            {children}
        </>
    );

    if (title && href) {
        return (
            <Link href={href} className={`box ${className}`} passHref target='_blank' title={imageAlt}>
                {content}
                <div className="box__overlay">
                    <div className="box__overlay-content">
                        <p className="box__overlay-title">{title}</p>
                        <span className="box__overlay-icon">
                            <svg className='box__overlay-arrow' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9962 2.05623C14.0445 1.50607 13.6376 1.0209 13.0875 0.972584L4.12199 0.185246C3.57182 0.136931 3.08665 0.543763 3.03834 1.09393C2.99002 1.6441 3.39685 2.12926 3.94702 2.17758L11.9164 2.87743L11.2165 10.8468C11.1682 11.3969 11.575 11.8821 12.1252 11.9304C12.6753 11.9787 13.1605 11.5719 13.2088 11.0217L13.9962 2.05623ZM1.64254 12.7975L13.6425 2.73501L12.3575 1.2025L0.357463 11.265L1.64254 12.7975Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        );
    }

    if (href) {
        return (
            <Link href={href} className={`box ${className}`} passHref target='_blank' title={imageAlt}>
                {content}
            </Link>
        );
    } else {
        return (
            <div className={`box ${className}`} onClick={onClick}>
                {content}
            </div>
        );
    }
}

export default Box;
