import { useLocation } from "react-router-dom";

const Details = (props) => {
  // uisng uselocation we acces the item details where path is img,price.. inside state inside location
  const location = useLocation();

  const img = location.state?.img;
  const price = location.state?.price;
  const title = location.state?.title;
  const detail = location.state?.detail;

  return (
    <div className="details-page">
      <div className="image-container">
        <img src={img} alt={title} className="details-image" />
      </div>
      <div className="info-container">
        <h2 className="details-title">{title}</h2>
        <p className="details-price">Price: ${price}</p>
      </div>
      <div className="details-container">
        <p className="details-description">Description: {detail}</p>
      </div>
    </div>
  );
};

export default Details;
