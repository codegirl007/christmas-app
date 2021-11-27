import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import gift from "../../assets/icons/gift.png";
import dinner from "../../assets/icons/dinner.png";
import calendar from "../../assets/icons/calendar.png";
import choir from "../../assets/icons/choir.png";
import jesus from "../../assets/icons/jesus.png";
import language from "../../assets/icons/language.png";
import "./Dialog.css";
import Image from '../Image'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Audio from "../Audio";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

export const ChristmasDialog = ({dialogOpen, onCloseDialog, url, countryCode}) => {
  const classes = useStyles();
  console.log("dialog component", countryCode)

  return (
    <>
      <Dialog open={dialogOpen} onClose={onCloseDialog} className="dialog-body">
        <div className="dialog-container">
          <DialogTitle className="dialog-header">
            <Typography>Czech Republic, CZ</Typography>
            <IconButton onClick={onCloseDialog} className="close-button">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent className="dialog-content">
            <div className="fact-wrapper">
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={gift} alt="giver" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Who brings presents</p>
                  <p className="fact-text">
                    Jezisek (Baby Jesus) is a Christmas gift-giving figure
                  </p>
                </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={dinner} alt="dish" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Traditional dish</p>
                  <p className="fact-text">
                    Carp and Potato Salad
                  </p>
                  </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={calendar} alt="calendar" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">When are Christmas celebrated</p>
                  <p className="fact-text">
                    December 24
                  </p>
                  </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={language} alt="language" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">How to say Merry Christmas!</p>
                  <p className="fact-text">
                    Veselé Vánoce!
                  </p>
                  </div>
              </div>
              <div className="fact-row">
                <div className="img-container">
                  <img className="fact-image" src={jesus} alt="tradition" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Traditions</p>
                  <p className="fact-text">
                  The Floating of Walnut Shells, The Cutting of the Apple, The
                  Pouring of Lead, Fish Scales under the Plate
                  </p>
                </div>
              </div>
              <div className="fact-row fact-row--carol">
                <div className="img-container img-container--carol">
                  <img className="fact-image" src={choir} alt="carol" />
                </div>
                  <Audio countryCode={countryCode}/>
              </div>
              </div>
              <div className="country-image">
                <Image countryCode={countryCode} />
              </div>
          </DialogContent>
          <footer className={classes.footer}>
            <FacebookShareButton url={url}>
              <FacebookIcon round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon round={true} />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon round={true} />
            </TwitterShareButton>
          </footer>
        </div>
      </Dialog>
    </>
  );
};
