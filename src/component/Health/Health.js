import "./Health.css";
import woman from "../../images/woman.png";
import Button from "../Buttons/Button";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import {
  faCalendarDays,
  faLocationDot,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Fascilities from "../Fascilities/Fascilities";

const dataArray = [
  {
    id: 1,
    icon: faCalendarDays,
    headline: "Make An Appointment",
    message: "Schedule With Your Favourite Doctor Anytime",
  },
  {
    id: 2,
    icon: faShield,
    headline: "Health Gurantee Forever",
    message: "We Always Provide The Best Warranty For You",
  },
  {
    id: 3,
    icon: faUser,
    headline: "Find Your Best Doctor",
    message: "We Always Provide The Best Warranty For You",
  },
  {
    id: 4,
    icon: faLocationDot,
    headline: "Spread In Various Places",
    message: "Now Clinics Are Available In Various Places",
  },
];
function Health() {
  return (
    <div className="container">
      <div class="columns">
        <div class="column">
          <p className="pHeadline">
            Protect Your Health <br />
            And Take Care of <br /> Your Health
          </p>
          <div class="grid-container">
            <Fascilities data={dataArray[0]}></Fascilities>
            <Fascilities data={dataArray[1]}></Fascilities>
          </div>
          <div class="grid-container">
            <Fascilities data={dataArray[2]}></Fascilities>
            <Fascilities data={dataArray[3]}></Fascilities>
          </div>
          <div className="chooseBtn">
            <Button></Button>
          </div>
        </div>
        <div class="column">
          <img className="second-col" alt="" src={woman} />
        </div>
      </div>
    </div>
  );
}
export default Health;
