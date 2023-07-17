import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Fascilities.css';
const Fascilities = ({ data }) => {
    
  return (
    <>
        <div class="grid-item">
          <h4>
            <FontAwesomeIcon className="icon" icon={data.icon} />
            {data.headline}
          </h4>
          <p className="facilities">{data.message}</p>
        </div>
    </>
  );
};

export default Fascilities;
