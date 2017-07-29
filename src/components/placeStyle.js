import marker from '../images/marker.png'


const placeStyle = {
  width: 60,
  height: 33,
  backgroundImage: `url(${marker})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  textAlign: 'center',
  position: 'absolute',
  top: -35,
  left: -35 / 2
}


const nameDivStyle = {position:'absolute', top:35, color: 'black'}

export {placeStyle, nameDivStyle}