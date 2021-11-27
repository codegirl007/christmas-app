import React, { useState } from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/ChristmasDialog";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainPage = ({ data }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const url = `http://localhost:3000/#${location.pathname}`;

  const handleCountryClick = (value) => {
    navigate(value);
    setDialogOpen(!dialogOpen);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Map handleCountryClick={handleCountryClick} data={data} />
      <ChristmasDialog
        dialogOpen={dialogOpen}
        onCloseDialog={handleCloseDialog}
        url={url}
      />
    </>
  );
};

export default MainPage;
