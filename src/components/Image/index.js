import React from "react";

import au from "../../assets/images/au-image.jpg";
import fi from "../../assets/images/fi-image.jpg";
import gb from "../../assets/images/gb-image.jpg";
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
  va: va,
  se: se,
  gr: gr,
  gl: gl,
  fr: fr,
};

const Image = ({ countryCode }) => {
  const code = countryCode.toLowerCase();
  const Img = images[code];
  return (
    <div>
      <img src={Img} alt={`christmas in ${countryCode}`} width={300} />
    </div>
  );
};

export default Image;