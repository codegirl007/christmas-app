import React from 'react';
import WorldMap from 'react-svg-worldmap';

const Map = ({handleCountryClick, data}) => {

  const mapData = data.map((item) => {
    return (
      {
        country:(item.countryCode),
        value: 'Christmas'
      }
    )});

  const onCountryClick = (value) => {
    handleCountryClick(value.countryCode)
  }


  return (
    <WorldMap
      color="green"
      value-suffix="people"
      size="lg"
      data={mapData}
      richInteraction
      onClickFunction={onCountryClick}
      valuePrefix=" - "
      valueSuffix="🎄"
    />
  )
}
 export default Map;