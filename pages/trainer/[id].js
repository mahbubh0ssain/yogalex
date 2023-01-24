import Router from "next/router";

const TrainerDetails = ({ trainer }) => {
  const goBack = () => {
    Router.back();
  };
  return (
    <div className=" mx-6">
      <div className="card bg-base-100 shadow-xl max-w-[768px] mx-auto">
        <figure>
          <img src={trainer?.imgUrl} className="h-76 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center border-b-2 pb-2">
            <span className="text-xl pb-0 ">{trainer?.name}</span>
            <div className="flex">
              <img
                className="w-6  h-6 cursor-pointer mr-3"
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt=""
              />
              <img
                className="w-6 h-6  cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=""
              />
            </div>
          </div>
          <p>{trainer?.bio}</p>
        </div>
        <button onClick={goBack} className="btn btn-primary mx-4 mb-4">
          Back
        </button>
      </div>
    </div>
  );
};

export default TrainerDetails;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://yogalex-server.vercel.app/trainer/${id}`);
  const trainer = await res.json();
  console.log(trainer);
  return {
    props: {
      trainer,
    },
  };
};
