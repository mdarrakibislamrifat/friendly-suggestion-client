import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { image, brandName } = card || {};
  return (
    <Link to={`/brandcard/${brandName}`}>
      <div className="card my-4 mx-4 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-center text-2xl">{brandName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
