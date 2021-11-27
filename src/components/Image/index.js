import React from 'react';
import './style.css'

import au from '../../assets/images/au-image.jpg'
import fi from '../../assets/images/fi-image.jpg'
import gb from '../../assets/images/gb-image.jpg'
import mx from '../../assets/images/mx-image.jpg'
import ng from '../../assets/images/ng-image.jpg'
import pl from '../../assets/images/pl-image.jpg'
import ro from '../../assets/images/ro-image.jpg'
import ru from '../../assets/images/ru-image.jpg'
import us from '../../assets/images/us-image.jpg'
import za from '../../assets/images/za-image.jpg'


const images = {
  au: au,
  fi: fi,
  gb: gb,
  mx: mx,
  ng: ng,
  pl: pl,
  ro: ro,
  ru: ru,
  us: us,
  za: za,
}

const Image = ({countryCode}) => {
  const code = countryCode.toLowerCase();
  const Img = images[code]
  return(
      <img className="custom-image"src={Img} alt={`christmas in ${countryCode}`}/>
  )
}

export default Image;