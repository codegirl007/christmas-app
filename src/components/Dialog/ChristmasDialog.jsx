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
import Image from "../Image";
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

export const ChristmasDialog = ({dialogOpen, onCloseDialog, url, country}) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={onCloseDialog}
        className="dialog-body"
        maxWidth="sm"
      >
        <div className="dialog-container">
          <DialogTitle className="dialog-header">
            <Typography>
              {country.countryName}, {country.countryCode}
            </Typography>
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
                  <p className="fact-label">Gifts are brought by</p>
                  <p className="fact-text">{country.giver}</p>
                </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={dinner} alt="dish" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Traditional dish</p>
                  <p className="fact-text">{country.dish}</p>
                </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={calendar} alt="calendar" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Christmas date</p>
                  <p className="fact-text">{country.date}</p>
                </div>
              </div>
              <div className="fact">
                <div className="img-container">
                  <img className="fact-image" src={language} alt="language" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">How to say Merry Christmas!</p>
                  <p className="fact-text">{country.greet}</p>
                </div>
              </div>
              <div className="fact-row">
                <div className="img-container">
                  <img className="fact-image" src={jesus} alt="tradition" />
                </div>
                <div className="fact-content">
                  <p className="fact-label">Traditions</p>
                  <ul>
                  {country.tradition.map((item, index) => (
                    <li key={index} className="fact-text fact-listed">{item}</li>
                  ))}
                  </ul>
                </div>
              </div>
              <div className="fact-row fact-row--carol">
                <div className="img-container img-container--carol">
                  <img className="fact-image" src={choir} alt="carol" />
                </div>
                  <Audio countryCode={country.countryCode}/>
              </div>
              </div>
              <div className="country-image">
                <Image countryCode={country.countryCode} />
              </div>
          </DialogContent>
          <footer className={classes.footer}>
            <span className="share-prompt">
              Did you find something new? Share it here:
            </span>
            <FacebookShareButton url={url}>
              <FacebookIcon round={true} size={45}/>
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon round={true} size={45}/>
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon round={true} size={45}/>
            </TwitterShareButton>
          </footer>
        </div>
      </Dialog>
    </>
  );
};
