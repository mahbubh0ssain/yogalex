import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { getTrainers } from "../Components/getInfo/getInfo";

const manageTrainer = () => {
  const [trainers, setLoader, loader] = getTrainers();

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:5000/deleteTrainer?id=${_id}`).then(() => {
      setLoader(!loader);
      Swal.fire("Trainer deleted");
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Link href="/addTrainer" className="text-4xl">
        <div className="bg-primary p-3 flex gap-7 rounded-lg">
          Add Trainer
          <img
            className="w-12"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3197020/plus-circle-icon-md.png"
            alt=""
          />
        </div>
      </Link>
      <h3 className="text-4xl text-center my-3">Trainers</h3>
      <div className="overflow-x-auto text-black mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trainers?.map((trainer) => {
              return (
                <tr key={trainer?._id} className="max-w-[1440px] mx-auto">
                  <td>{trainer?.name}</td>
                  <td>{trainer?._id}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(trainer?._id)}
                      className="btn btn-xs bg-red-500 border-0"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default manageTrainer;
