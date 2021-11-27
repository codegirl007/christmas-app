import AudioPlayer from "material-ui-audio-player";

import aucarol from "../../assets/music/au-carol.mp3"
import ficarol from "../../assets/music/fi-carol.mp3"
import gbcarol from "../../assets/music/gb-carol.mp3"
import mxcarol from "../../assets/music/mx-carol.mp3"
import ngcarol from "../../assets/music/ng-carol.mp3"
import plcarol from "../../assets/music/pl-carol.mp3"
import rocarol from "../../assets/music/ro-carol.mp3"
import rucarol from "../../assets/music/ru-carol.mp3"
import uscarol from "../../assets/music/us-carol.mp3"
import zacarol from "../../assets/music/za-carol.mp3"

const carols = {
  AU: aucarol,
  FI: ficarol,
  GB: gbcarol,
  MX: mxcarol,
  NG: ngcarol,
  PL: plcarol,
  RO: rocarol,
  RU: rucarol,
  US: uscarol,
  ZA: zacarol,
}


const Audio = ({countryCode}) => {
  const carol = carols[countryCode]
  return (
    <AudioPlayer
    src={carol}
    width="60%"
    height="0%"
  />
  )
} 

export default Audio;