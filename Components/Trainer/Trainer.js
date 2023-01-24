import Link from "next/link";
import { useRouter } from "next/router";
const Trainer = ({ trainer }) => {
  const router = useRouter();
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={trainer?.imgUrl}
          className="h-64 w-full"
          alt="Trainer Image"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <span className="text-xl pb-0 ">{trainer.name}</span>
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
        {/* <Link onClick={`/${trainer?._id}`}></Link> */}
        <button
          onClick={() => {
            router.push(`/trainer/${trainer?._id}`);
          }}
          className="btn btn-primary w-full mt-4"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Trainer;
