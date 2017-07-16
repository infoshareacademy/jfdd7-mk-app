import React from 'react'


const ObjectDetails = ({address, telephone, mail, website}) => (
    <section className="contact-details">
      <h4>Kontakt</h4>
        <p>Adres: {address}</p>
        <p>Telefon: <a href={"tel:" + telephone}>{telephone}</a></p>
        <p>E-mail: <a href={"mailto:" + mail}>{mail}</a></p>
        <p>Witryna: <a href={website} target="_blank">{website}</a></p>
    </section>
)

export default ObjectDetails