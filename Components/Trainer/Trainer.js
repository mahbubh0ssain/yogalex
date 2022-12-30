const Trainer = ({ trainer }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={trainer?.img} className="h-64 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <span className="text-xl badge badge-primary py-4 ">
            {trainer.name}
          </span>
        </div>
        <button className="btn btn-primary mx-4 mb-4">Details</button>
      </div>
    </div>
  );
};

export default Trainer;
