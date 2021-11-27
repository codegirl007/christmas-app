import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import gift from "../../assets/icons/gift.png";
import dinner from "../../assets/icons/dinner.png";
import calendar from "../../assets/icons/calendar.png";
import choir from "../../assets/icons/choir.png";
import jesus from "../../assets/icons/jesus.png";
import language from "../../assets/icons/language.png";
import "./Dialog.css";

export const ChristmasDialog = () => {
  return (
    <>
      <Dialog open={true} className="dialog-body">
        <DialogTitle className="dialog-header">Czech Republic, CZ</DialogTitle>
        <DialogContent className="dialog-content">
          <div className="fact">
            <img src={gift} alt="giver" />
            <p>Jezisek (Baby Jesus) is a Christmas gift-giving figure</p>
          </div>
          <div className="fact">
            <img src={dinner} alt="dish" />
            <p>Carp and Potato Salad</p>
          </div>
          <div className="fact">
            <img src={calendar} alt="calendar" />
            <p>December 24</p>
          </div>
          <div className="fact">
            <img src={choir} alt="carol" />
            <p>Veselé Vánoce!</p>
          </div>
          <div className="fact">
            <img src={jesus} alt="tradition" />
            <p>
              The Floating of Walnut Shells, The Cutting of the Apple, The
              Pouring of Lead, Fish Scales under the Plate
            </p>
          </div>
          <div className="fact">
            <img src={language} alt="language" />
          </div>
          <div className="social-media"></div>
        </DialogContent>
      </Dialog>
    </>
  );
};
