
function FormationElement({ titre, entreprise, duree }) {
    return (
        <div className="formation__row">
            <svg className="formation__icon" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9978 2.31652C22.0345 1.76546 21.6176 1.28895 21.0665 1.25221L12.0865 0.653543C11.5354 0.616806 11.0589 1.03375 11.0221 1.58481C10.9854 2.13587 11.4024 2.61238 11.9534 2.64911L19.9357 3.18127L19.4035 11.1635C19.3668 11.7146 19.7837 12.1911 20.3348 12.2279C20.8859 12.2646 21.3624 11.8476 21.3991 11.2966L21.9978 2.31652ZM1.6585 20.5026L21.6585 3.00258L20.3415 1.49742L0.341495 18.9974L1.6585 20.5026Z" fill="black" />
            </svg>
            <div className="formation__description">
                <h3 className="formation__titre">{titre}</h3>
                <h3 className="formation__entreprise">{entreprise} <span className="hide-desktop">{duree}</span></h3>
            </div>
            <h3 className="formation__date hide-mobile">{duree}</h3>
        </div>
    )
}

export default FormationElement