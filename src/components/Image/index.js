import React from "react";
import "./style.css";

import mx from "../../assets/images/mx-image.jpg";
import ng from "../../assets/images/ng-image.jpg";
import pl from "../../assets/images/pl-image.jpg";
import ro from "../../assets/images/ro-image.jpg";
import ru from "../../assets/images/ru-image.jpg";
import us from "../../assets/images/us-image.jpg";
import za from "../../assets/images/za-image.jpg";
import va from "../../assets/images/va-image.jpg";
import se from "../../assets/images/se-image.jpg";
import gr from "../../assets/images/gr-image.jpg";
import gl from "../../assets/images/gl-image.jpg";
import fr from "../../assets/images/fr-image.jpg";
import au from "../../assets/images/au-image.jpg";
import fi from "../../assets/images/fi-image.jpg";
import gb from "../../assets/images/gb-image.jpg";
import bd from "../../assets/images/bd-image.jpg";
import br from "../../assets/images/br-image.jpg";
import cn from "../../assets/images/cn-image.jpg";
import cz from "../../assets/images/cz-image.jpg";
import eg from "../../assets/images/eg-image.jpg";
import jp from "../../assets/images/jp-image.jpg";
import mg from "../../assets/images/mg-image.jpg";
import ua from "../../assets/images/ua-image.jpg";
import ve from "../../assets/images/ve-image.jpg";
import In from "../../assets/images/iN-image.jpg";

const images = {
  AU: au,
  FI: fi,
  GB: gb,
  MX: mx,
  NG: ng,
  PL: pl,
  RO: ro,
  RU: ru,
  US: us,
  ZA: za,
  VA: va,
  BD: bd,
  BR: br,
  CN: cn,
  CZ: cz,
  EG: eg,
  JG: jp,
  MG: mg,
  UA: ua,
  VE: ve,
  IN: In,
  SE: se,
  GR: gr,
  GL: gl,
  FR: fr,
};

const Image = ({countryCode}) => {
  const Img = images[countryCode]
  return(
    <img className="custom-image"src={Img} alt={`christmas in ${countryCode}`}/>
  )
}


export default Image;