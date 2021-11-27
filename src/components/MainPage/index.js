import React, { useState } from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/ChristmasDialog";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainPage = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = `http://localhost:3000/#${location.pathname}`;
  const isDialogOpen = location.pathname === "/" ? false : true;
  const defaultCountryCode = location.pathname.slice(-2);
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [dialogOpen, setDialogOpen] = useState(isDialogOpen);
  const [country, setCountry] = useState(null);

  const handleCountryClick = (value) => {
    setCountryCode(value);
    navigate(value);
    setCountry(findCountry(value));
    setDialogOpen(true);
  };

  const findCountry = (code) => {
    const foundCountry = data.find((item) => item.countryCode === code);
    return foundCountry;
  };

  const handleCloseDialog = () => {
    navigate("");
    setDialogOpen(false);
  };

  return (
    <>
      <Map handleCountryClick={handleCountryClick} data={data} />
      {country?.countryCode && (
        <ChristmasDialog
          dialogOpen={dialogOpen}
          onCloseDialog={handleCloseDialog}
          url={url}
          country={country}
        />
      )}
    </>
  );
};

export default MainPage;
