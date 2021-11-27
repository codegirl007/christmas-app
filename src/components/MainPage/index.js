import React, { useState } from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/ChristmasDialog";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainPage = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = `http://localhost:3000/#${location.pathname}`;
  const isDialogOpen = location.pathname === '/' ? false : true;
  const defaultCountryCode = location.pathname.slice(-2);
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [dialogOpen, setDialogOpen] = useState(isDialogOpen);

  const handleCountryClick = (value) => {
    console.log("country click", value);
    setCountryCode(value);
    navigate(value);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    navigate("");
    setDialogOpen(false);
  };

  return (
    <>
      <Map handleCountryClick={handleCountryClick} data={data} />
      <ChristmasDialog
        dialogOpen={dialogOpen}
        onCloseDialog={handleCloseDialog}
        url={url}
        countryCode={countryCode}
      />
    </>
  );
};

export default MainPage;
