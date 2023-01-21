import Link from "next/link";
import { useEffect, useState } from "react";
import { getTrainers } from "../Components/getInfo/getInfo";

const manageTrainer = () => {
  const [trainers, setTrainers, loader] = getTrainers();
  console.log(trainers, loader);

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
    </div>
  );
};

export default manageTrainer;
