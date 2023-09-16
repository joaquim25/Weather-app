import DetailCard from "./DetailCard";
import "./DetailsPannel.css";

const DetailsPannel = ({ details }) => {
  return (
    <div className="detail__container">
      <div className="detail__header">
        <h2>Today</h2>
        <h2>Tomorrow</h2>
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
