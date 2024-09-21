import PropTypes from "prop-types";
import "./cardStyle.css";

const Card = (props) => {
  return (
    <a id="card" href={props.url}>
      <img src={props.image} alt={props.description} />
      <figcaption>{props.description}</figcaption>
    </a>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
