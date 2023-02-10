import Link from "next/link";

const AdminManager = () => {
  return (
    <div>
      <div className="grid grid-cols-1  mt-6 px-4">
        <Link href="/dashboard/managetrainer" className="text-4xl">
          <div className="bg-[#E2B9D4] p-3 flex gap-7 rounded-lg">
            Manage Trainer
            <img
              className="ml-auto w-12"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3197020/plus-circle-icon-md.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminManager;
