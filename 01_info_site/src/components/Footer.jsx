import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
  faFacebookSquare,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer_container">
      <a>
        <FontAwesomeIcon icon={faSquareTwitter} inverse></FontAwesomeIcon>
      </a>
      <a>
        <FontAwesomeIcon icon={faFacebookSquare} inverse></FontAwesomeIcon>
      </a>
      <a>
        <FontAwesomeIcon icon={faInstagramSquare} inverse></FontAwesomeIcon>
      </a>
      <a href="https://github.com/BLUEx06" target="blank">
        <FontAwesomeIcon icon={faGithubSquare} inverse></FontAwesomeIcon>
      </a>
    </div>
  );
}
