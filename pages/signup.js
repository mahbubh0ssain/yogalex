import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../pages/context/Authprovider";
import { useToken } from "../AuthToken/UseToken";

const Signup = () => {
  const router = useRouter();
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((res) => {
        useToken(res?.user?.email);
        router.push("/");
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero my-5 min-h-[67.5vh]">
      <div className="flex-col grid gap-20 grid-cols-1 max-w-[576px] mx-4">
        <div className="card shadow-2xl h-full">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-thin text-center text-black">
              Signup now!
            </h1>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Login"
              ></input>
            </div>
          </form>
          <p className="text-center text-black mb-4">
            Already registered? {}
            <Link href="/login" className="text-cyan-500 font-bold">
              Login
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className="grid card rounded-box place-items-center">
              <div className="btn mb-5">
                <img
                  className="w-6 mr-3"
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                />
                Continue with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
