import React, {useState} from "react";
import Map from "../Map";
import { ChristmasDialog } from "../Dialog/Dialog";

const MainPage = ({data}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCountryClick = (value) => {
    setDialogOpen(!dialogOpen);
    console.log('calling from mainpage', value)
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