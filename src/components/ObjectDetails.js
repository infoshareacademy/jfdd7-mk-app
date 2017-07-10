/**
 * Created by dominikakosiedowska on 06.07.17.
 */
import React from 'react'

const ObjectDetails = ({address, telephone, mail, website}) => (
  <section>
    <h5>Adres: {address}</h5>
    <h5>Telefon: {telephone}</h5>
    <h5>E-mail: {mail}</h5>
    <h5>Witryna: {website}</h5>
  </section>
  )

export default ObjectDetails