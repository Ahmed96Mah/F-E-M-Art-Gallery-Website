import Image from '../components/Image';
import darkLogo from '../assets/logo-dark.svg';
import facebookLogo from '../assets/icon-facebook.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import twitterLogo from '../assets/icon-twitter.svg';
import backArrow from '../assets/icon-arrow-left.svg';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Location = () => {
  return (
    <div id="LocPage">
      <main>
        <Link id="homeAnch" to="/">
          <Image id="toHome" src={backArrow} alt="To Home Page" />
          <span>BACK TO HOME</span>
        </Link>
        <div id="map">
          <MapContainer
            center={[41.4804, -71.311]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.48025, -71.3111]}>
              <Popup>Modern Art Gallery</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div id="locDetails">
          <h1>OUR LOCATION</h1>
          <div className="container">
            <h2>99 KING STREET</h2>
            <div className="detailsDiv">
              <p>Newport</p>
              <p>RI 02840</p>
              <p>United States of America</p>
            </div>
            <p id="locParag">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </main>
      <footer className="loc">
        <Image id="footerLogo" src={darkLogo} alt="" />
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
          >
            <Image id="facebookIcon" src={facebookLogo} alt="" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            id="instaIcn"
          >
            <Image id="instagramIcon" src={instagramLogo} alt="" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            id="twitIcn"
          >
            <Image id="twitterIcon" src={twitterLogo} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Location;
