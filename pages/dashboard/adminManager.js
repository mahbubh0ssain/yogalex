import Link from "next/link";

const AdminManager = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
        <Link href="/dashboard/managetrainer" className="text-4xl">
          <div className="bg-[#E2B9D4] p-3 flex gap-7 rounded-lg">
            Manage Trainer
          </div>
        </Link>
        <Link href="/dashboard/addblog" className="text-4xl ">
          <div className="bg-[#E2B9D4] p-3 flex gap-7 rounded-lg">
            Manage Blog
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminManager;
