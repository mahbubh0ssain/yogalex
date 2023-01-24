const Trainer = ({ trainer }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={trainer?.imgUrl} className="h-64 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <span className="text-xl py-4 ">{trainer.name}</span>
          <div className="flex">
            <img
              className="w-6 cursor-pointer mr-3"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
            <img
              className="w-6 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt=""
            />
          </div>
        </div>
        <button className="btn btn-primary mx-4 mb-4">Details</button>
      </div>
    </div>
  );
};

export default Trainer;
