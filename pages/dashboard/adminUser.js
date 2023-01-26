import UserTable from "../../Components/UserTable/UserTable";

const Users = ({ users, setLoader, loader }) => {
  console.log(users);
  return (
    <div className="max-w-[1440px] mx-auto px-4 min-h-[69.4vh]">
      <div className="overflow-x-auto text-black mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((info) => (
              <UserTable
                key={info._id}
                setLoader={setLoader}
                loader={loader}
                info={info}
              ></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
