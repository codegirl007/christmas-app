import React from 'react';
import WorldMap from 'react-svg-worldmap';

const Map = ({handleCountryClick}) => {
  const data = [
    {country: 'cn', value: "test" },
    {country: 'in', value: "test" },
    {country: 'us', value: "test" },
    {country: 'id', value: "test" },
    {country: 'pk', value: "test" },
    {country: 'br', value: "test" },
    {country: 'ng', value: "test" },
    {country: 'bd', value: "test" },
    {country: 'ru', value: "test" },
    {country: 'mx', value: "test" },
  ];

  // function value
  // color: "green"
  // countryCode: "RU"
  // countryName: "Russia"
  // countryValue: 1
  // event: SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: path, …}
  // maxValue: 1
  // minValue: 1
  // prefix: ""
  // suffix: ""

  const onCountryClick = (value) => {
    handleCountryClick(value.countryCode)
  }


  return (
    <WorldMap
      color="green"
      value-suffix="people"
      size="lg"
      data={data}
      richInteraction
      onClickFunction={onCountryClick}
      valuePrefix=" - "
      valueSuffix="🎄"
    />
  )
}
 export default Map;