import "./Navbar.css";
import wecare from '../../images/wecare.png';
import Button from "../Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faBars } from "@fortawesome/fontawesome-free-solid";

 function Navbar() {
  const navItemRefs = useRef([]);

  const change = (elem) => {
    navItemRefs.current.forEach((item) => {
      item.classList.remove('active');
    });
     
    elem.classList.add('active');
  };
  return (
    <div className="Navbar">
      <div className="container">
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
          <FontAwesomeIcon icon={faBars} />
          </label>
         <img alt="" src={wecare}/>
          <ul>
            <li>
              <a href="#"  ref={(el) => (navItemRefs.current[0] = el)} onClick={() => change(navItemRefs.current[0])}>
                Featured
              </a>
            </li>
            <li>
              <a href="#" ref={(el) => (navItemRefs.current[1] = el)} onClick={() => change(navItemRefs.current[1])}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" ref={(el) => (navItemRefs.current[2] = el)} onClick={() => change(navItemRefs.current[2])}>
                 Fascilities
              </a>
            </li>
            <li>
              <a href="#" ref={(el) => (navItemRefs.current[3] = el)} onClick={() => change(navItemRefs.current[3])}>
                 Find Doctor
              </a>
            </li>
            <li>
              <a href="#" ref={(el) => (navItemRefs.current[4] = el)} onClick={() => change(navItemRefs.current[4])}>
                 Contact
              </a>
            </li>
            <li>
            <Button></Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
