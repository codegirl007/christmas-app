import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import gift from "../../assets/icons/gift.png";
import dinner from "../../assets/icons/dinner.png";
import calendar from "../../assets/icons/calendar.png";
import choir from "../../assets/icons/choir.png";
import jesus from "../../assets/icons/jesus.png";
import language from "../../assets/icons/language.png";
import "./Dialog.css";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem"
  },
}));

export const ChristmasDialog = ({dialogOpen, onCloseDialog}) => {
  const classes = useStyles();
  return (
    <>
      <Dialog open={dialogOpen} onClose={onCloseDialog} className="dialog-body">
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
        <footer className={classes.footer}>
          <FacebookShareButton url="https://www.seznam.cz/">
            <FacebookIcon round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url="https://www.seznam.cz/">
            <LinkedinIcon round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url="https://www.seznam.cz/">
            <TwitterIcon round={true} />
          </TwitterShareButton>
        </footer>
      </Dialog>
    </>
  );
};
