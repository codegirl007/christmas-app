import React from "react";
import WorldMap from "react-svg-worldmap";

const Map = ({ handleCountryClick, data }) => {
  const mapData = data.map((item) => {
    return {
      country: item.countryCode,
      value: "Christmas facts",
    };
  });

  const onCountryClick = (value) => {
    handleCountryClick(value.countryCode);
  };

  return (
    <WorldMap
      color="#0894F1"
      value-suffix="people"
      size="xxl"
      data={mapData}
      richInteraction
      onClickFunction={onCountryClick}
      valuePrefix=" - "
      valueSuffix="🎄"
    />
  );
};
export default Map;
