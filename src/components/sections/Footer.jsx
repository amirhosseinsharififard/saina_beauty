import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
} from "../ui/Icons";
import { SOCIAL_LINKS } from "../../constants/data";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">Saina Beauty</h3>
          <p>Your beauty, our passion.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Opening Hours</h3>
          <p>
            Mon–Fri: 10:00–18:00
            <br />
            Sat: 11:00–17:00
            <br />
            Sun: Closed
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href={SOCIAL_LINKS.TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon />
            </a>
            <a
              href={SOCIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-xs">
        © {new Date().getFullYear()} Saina Beauty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
