import "./DetailCard.css";

const DetailCard = ({ detail }) => {
  return (
    <div className="card__container">
      <h4 className="card__info">{detail.title}</h4>
      <p className="card__status">{detail.main}</p>
      <p className="card__status">{detail.main1}</p>
      <p className="card__info">{detail.sec}</p>
      <p className="card__info">{detail.sec1}</p>
    </div>
  );
};

export default DetailCard;
