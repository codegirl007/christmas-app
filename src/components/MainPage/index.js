import React, {useState} from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/Dialog";
import { useNavigate } from "react-router-dom";

const MainPage = ({data}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleCountryClick = (value) => {
    navigate(value)
    setDialogOpen(!dialogOpen);
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
  }
  
  return (
    <>
    <Map handleCountryClick={handleCountryClick} data={data}/>
    <ChristmasDialog dialogOpen={dialogOpen} onCloseDialog={handleCloseDialog}/>
    </>
  )
}

export default MainPage;