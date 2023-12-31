import DetailCard from "./DetailCard";
import "./DetailsPannel.css";

const DetailsPannel = ({ details }) => {
  return (
    <div className="detail__container">
      <div className="detail__header">
        <h2>"A Simple Weather App"</h2>
      </div>
      <div className="detail__cards">
        {!details
          ? null
          : Object.keys(details).map((key) => (
              <DetailCard key={key} detail={details[key]} />
            ))}
      </div>
    </div>
  );
};

export default DetailsPannel;
