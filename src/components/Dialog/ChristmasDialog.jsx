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
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import AudioPlayer from "material-ui-audio-player";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

export const ChristmasDialog = ({ dialogOpen, onCloseDialog, url }) => {
  const classes = useStyles();
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
            <div className="fact">
              <div className="img-container">
                <img src={gift} alt="giver" />
              </div>
              <p className="fact-text">
                Jezisek (Baby Jesus) is a Christmas gift-giving figure
              </p>
            </div>
            <div className="fact">
              <div className="img-container">
                <img src={dinner} alt="dish" />
              </div>
              <p className="fact-text">Carp and Potato Salad</p>
            </div>
            <div className="fact">
              <div className="img-container">
                <img src={calendar} alt="calendar" />
              </div>
              <p className="fact-text">December 24</p>
            </div>
            <div className="fact">
              <div className="img-container">
                <img src={language} alt="language" />
              </div>
              <p className="fact-text">Veselé Vánoce!</p>
            </div>
            <div className="fact-row">
              <div className="img-container">
                <img src={jesus} alt="tradition" />
              </div>
              <p className="fact-text">
                The Floating of Walnut Shells, The Cutting of the Apple, The
                Pouring of Lead, Fish Scales under the Plate
              </p>
            </div>
            <div className="fact-row">
              <div className="img-container">
                <img src={choir} alt="carol" />
              </div>
              <AudioPlayer
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                width="60%"
                height="0%"
              />
            </div>
            <div className="social-media"></div>
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
