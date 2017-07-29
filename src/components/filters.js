const filters = {
  fitness: place => place.functions.includes('fitness'),
  zajecia_dla_dzieci: place => place.functions.includes('zajęcia dla dzieci'),
  solarium: place => place.functions.includes('solarium'),
  sztuki_walki: place => place.functions.includes('sztuki walki'),
  masaz_wodny: place => place.functions.includes('masaż wodny'),
  zumba: place => place.functions.includes('zumba'),
  jacuzzi: place => place.functions.includes('jacuzzi'),
  basen: place => place.functions.includes('basen'),
  kregle: place => place.functions.includes('kręgle'),
  scianka_wspinaczkowa: place => place.functions.includes('ścianka wspinaczkowa'),
  taniec_towarzyski: place => place.functions.includes('taniec towarzyski'),
  sauna: place => place.functions.includes('sauna'),
  silownia: place => place.functions.includes('siłownia'),
  crossfit: place => place.functions.includes('crossfit')
}

export {filters}