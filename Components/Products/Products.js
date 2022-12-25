import Link from "next/link";
import React from "react";

const Products = ({ product }) => {
  const { _id, img, price, name } = product;
  return (
    <div className="mx-auto px-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-60 w-full" src={img} alt="Sunglass" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-2xl">Price: ${price}</h2>
          <p className="text-black text-xl">{name}</p>
          <div className="card-actions justify-start">
            <Link href={`/products/${_id}`}>
              <button className="btn btn-sm btn-primary">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
