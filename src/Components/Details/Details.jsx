import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { serverAddress } from "../../Data/serverAddress";

const Details = () => {
  const detail = useLoaderData();
  const {_id,  image, name, brandName, type, price, shortDescription, rating } =
    detail || {};
  const {user}=useContext(AuthContext);
  
  const handleAddToCart = () => {
    fetch(`${serverAddress}/carts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({id:_id, image, name, brandName, type, price, shortDescription, rating,email:user.email}),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Booking!");
        } else {
          toast.error("Already added this product");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card border-4 border-violet-500 w-full bg-base-100 shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand: {brandName}</h2>
        <p>Model :{name}</p>
        <p>Type :{type}</p>
        <p>Price : ${price}</p>
        <p> {shortDescription}</p>
        <p>rating : {rating}</p>
        <div className="card-actions">
          <button
            onClick={ handleAddToCart}
            className="btn btn-primary"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
