/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { serverAddress } from "../../Data/serverAddress";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SingleCart = ({ cart, carts,handleCart }) => {
  const { id, image, name, brandName, type, price, shortDescription, rating } =
    cart || {};
const {user}=useContext(AuthContext)

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverAddress}/carts/${id}/${user.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success",
              );
              const filterCart=carts.filter(data=>data.id !==id)
              handleCart(filterCart)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card h-full lg:card-side bg-base-100 shadow-xl  p-4 h-[500px] border-4 border-violet-500">
        <figure>
          <img className="w-full" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2>{name}</h2>
          <h2 className="card-title">{brandName}</h2>
          <h2>{type}</h2>
          <h2>Price:$ {price}</h2>
          <p>{shortDescription}</p>
          <p>Ratings: {rating} </p>
          <div className="card-actions justify-end">
            <button
              onClick={ handleDelete}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
