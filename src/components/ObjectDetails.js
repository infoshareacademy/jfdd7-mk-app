import React from 'react'


const ObjectDetails = ({address, telephone, mail, website}) => (
    <section>
        <h5>Adres: {address}</h5>
        <h5>Telefon: <a href={"tel:" + telephone}>{telephone}</a></h5>
        <h5>E-mail: <a href={"mailto:" + mail}>{mail}</a></h5>
        <h5>Witryna: <a href={website}>{website}</a></h5>
    </section>
)

export default ObjectDetails