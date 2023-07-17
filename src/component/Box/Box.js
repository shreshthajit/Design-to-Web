import DataList from "../DataComponent/DataList";
import "./Box.css";
const dataArray = [
  { id: 1, num: "250", message: "Best Doctor" },
  { id: 2, num: "15", message: "Clinic Location" },
  { id: 3, num: "20", message: "Surgery Room"},
  { id: 4, num: "+1500", message: "Patient Capacity" },
];
function Box() {
  return (
    <div className="box">
      <DataList data={dataArray}></DataList>
    </div>
  );
}

export default Box;
