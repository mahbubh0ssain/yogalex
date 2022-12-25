import Products from "../../Components/Products/Products";

const Index = ({ data }) => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">
      {data?.map((product) => (
        <Products key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return {
    props: {
      data: products.data,
    },
  };
};
