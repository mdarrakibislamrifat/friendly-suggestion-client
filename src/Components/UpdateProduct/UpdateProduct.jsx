import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { serverAddress } from "../../Data/serverAddress";

const UpdateProduct = () => {
  const card = useLoaderData();
  console.log(card);
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    card;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const updateItem = {
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };
    fetch(`${serverAddress}/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated Product!");
        }
      });
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleUpdateProduct}>
        {/*image */}
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                defaultValue={image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  name and brand name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                defaultValue={brandName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* type and price */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="type"
                name="type"
                placeholder="Type"
                defaultValue={type}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* short description and rating */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                defaultValue={shortDescription}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          className="btn bg-violet-700 btn-block text-white"
          type="submit"
          value="Update Phone"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
