import marker from '../images/marker.png'


const placeStyle = {
  width: 35,
  height: 35,
  backgroundImage: `url(${marker})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: -35,
  left: -35 / 2

}

const nameDivStyle = {position:'absolute', top:35, color: 'black'}

export {placeStyle, nameDivStyle}