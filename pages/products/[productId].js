import { useState } from "react";

const ProductId = ({ product }) => {
  const { img, price, name, details } = product;
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-6 my-6">
      <div className="card mx-auto  grid grid-cols-1 w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-60 w-full" src={img} alt="Sunglass" />
        </figure>
        <div className="card-body">
          <p className="text-black text-xl">{name}</p>
          <p className="text-black ">{details}</p>
          <h2 className="card-title text-black text-2xl mt-2">
            Price: ${price}
          </h2>
          <div className="text-black flex items-center justify-start mb-3">
            <h3 className="text-2xl">
              Quantity:{" "}
              <button
                className="text-4xl cursor-pointer"
                disabled={quantity === 1}
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                -
              </button>
              <span className="text-3xl border px-2 rounded">{quantity}</span>
              <button
                disabled={quantity === 10}
                className="text-4xl cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </h3>
          </div>
          <hr className="text-black" />

          <div className="text-black">
            <div className="flex items-center justify-around">
              <p>
                Subtotal: $ {price * quantity} ({quantity}{" "}
                {quantity > 1 ? "items" : "item"}){" "}
              </p>
              <button onClick={() => setQuantity(1)}>
                <img
                  className="w-5 h-5"
                  src="https://www.freeiconspng.com/thumbs/restart-icon/black-panel-restart-system-icon--6.png"
                  alt=""
                />
              </button>
            </div>
            <p>Shipping: $3</p>
            <h6 className="text-xl font-bold">
              Total: ${price * quantity + 3}{" "}
            </h6>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-sm btn-primary w-full">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params?.productId}`
  );
  const product = await res.json();
  return {
    props: {
      product: product?.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  const paths = products?.data?.map((product) => {
    return {
      params: {
        productId: `${product?._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default ProductId;
