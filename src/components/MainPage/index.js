import React, { useState } from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/ChristmasDialog";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainPage = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlBase = window.location.origin;
  const url = `${urlBase}/#${location.pathname}`;
  const isDialogOpen = location.pathname === "/" ? false : true;
  const urlCountryCode =  isDialogOpen ? location.pathname.slice(-2) : null;

  const [dialogOpen, setDialogOpen] = useState(isDialogOpen);
  const [country, setCountry] = useState(urlCountryCode ? findCountry(urlCountryCode) : null);

  const handleCountryClick = (value) => {
    navigate(value);
    setCountry(findCountry(value));
    setDialogOpen(true);
  };

  function findCountry(code){
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
      {country && (
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
