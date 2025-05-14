import Link from "next/link"

function FormationElement({ titre, entreprise, duree, href }) {
    return (
        <>
            {href ? (
                <Link href={href} target="_blank" passHref className="formation__row">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9978 2.31652C22.0345 1.76546 21.6176 1.28895 21.0665 1.25221L12.0865 0.653543C11.5354 0.616806 11.0589 1.03375 11.0221 1.58481C10.9854 2.13587 11.4024 2.61238 11.9534 2.64911L19.9357 3.18127L19.4035 11.1635C19.3668 11.7146 19.7837 12.1911 20.3348 12.2279C20.8859 12.2646 21.3624 11.8476 21.3991 11.2966L21.9978 2.31652ZM1.6585 20.5026L21.6585 3.00258L20.3415 1.49742L0.341495 18.9974L1.6585 20.5026Z" fill="black" />
                    </svg>
                    <div className="formation__description">
                        <h3 className="formation__titre">{titre}</h3>
                        <h3 className="formation__entreprise">{entreprise} <span className="hide-desktop">{duree}</span></h3>
                    </div>
                    <h3 className="formation__date hide-mobile">{duree}</h3>
                </Link>
            ) : (
                <div className="formation__row">
                    <div className="formation__icon">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="formation__description">
                        <h3 className="formation__titre">{titre}</h3>
                        <h3 className="formation__entreprise">{entreprise} <span className="hide-desktop">{duree}</span></h3>
                    </div>
                    <h3 className="formation__date hide-mobile">{duree}</h3>
                </div>
            )
            }
        </>
    )
}

export default FormationElement