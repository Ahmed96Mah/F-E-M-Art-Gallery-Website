import Image from '../components/Image';
import { Link } from 'react-router-dom';
import hdrImg from '../assets/mobile/image-hero@2x.jpg';
import hdrImgTab from '../assets/tablet/image-hero@2x.jpg';
import hdrImgDesk from '../assets/desktop/image-hero@2x.jpg';
import toArrow from '../assets/icon-arrow-right.svg';
import mainGrid1 from '../assets/mobile/image-grid-1@2x.jpg';
import mainGrid1Tab from '../assets/tablet/image-grid-1@2x.jpg';
import mainGrid1Desk from '../assets/desktop/image-grid-1@2x.jpg';
import mainGrid2 from '../assets/mobile/image-grid-2@2x.jpg';
import mainGrid2Tab from '../assets/tablet/image-grid-2@2x.jpg';
import mainGrid2Desk from '../assets/desktop/image-grid-2@2x.jpg';
import mainGrid3 from '../assets/mobile/image-grid-3@2x.jpg';
import mainGrid3Tab from '../assets/tablet/image-grid-3@2x.jpg';
import mainGrid3Desk from '../assets/desktop/image-grid-3@2x.jpg';
import lghtLogo from '../assets/logo-light.svg';
import facebookLogo from '../assets/icon-facebook.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import twitterLogo from '../assets/icon-twitter.svg';

const Home = () => {
  return (
    <div id="Page">
      <header>
        <Image id="headerImg" src={hdrImg} alt="hero image" />
        <Image id="headerImgTab" src={hdrImgTab} alt="hero image" />
        <Image id="headerImgDesk" src={hdrImgDesk} alt="hero image" />
        <div className="info">
          <h1>
            MODERN <br /> ART GALLERY
          </h1>
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link to="/Location">
            <span>OUR LOCATION</span>
            <Image id="toLoc" src={toArrow} alt="To Our Location" />
          </Link>
        </div>
      </header>
      <main>
        <div id="mainTop">
          <Image id="mainGrid1" src={mainGrid1} alt="" />
          <Image id="mainGrid1Tab" src={mainGrid1Tab} alt="" />
          <Image id="mainGrid1Desk" src={mainGrid1Desk} alt="" />
          <div id="topDetails">
            <h2>YOUR DAY AT THE GALLERY</h2>
            <p>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>
        <div id="mainButtom">
          <Image id="mainGrid2" src={mainGrid2} alt="" />
          <Image id="mainGrid2Tab" src={mainGrid2Tab} alt="" />
          <Image id="mainGrid2Desk" src={mainGrid2Desk} alt="" />
          <div id="lower">
            <Image id="mainGrid3" src={mainGrid3} alt="" />
            <Image id="mainGrid3Tab" src={mainGrid3Tab} alt="" />
            <Image id="mainGrid3Desk" src={mainGrid3Desk} alt="" />
            <div id="inviteParag">
              <h2>COME &amp; BE INSPIRED</h2>
              <p>
                We're excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Image id="footerLogo" src={lghtLogo} alt="" />
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div id="social">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            id="faceIcn"
            aria-label='Visit our Facebook page'
          >
            <Image id="facebookIcon" src={facebookLogo} alt="" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            id="instaIcn"
            aria-label='Visit our Instagram page'
          >
            <Image id="instagramIcon" src={instagramLogo} alt="" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            id="twitIcn"
            aria-label='Visit our Twitter page'
          >
            <Image id="twitterIcon" src={twitterLogo} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
