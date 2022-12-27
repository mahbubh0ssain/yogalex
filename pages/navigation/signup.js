import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/Authprovider";

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
        console.log(res.user);
        router.push("/");
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero my-5">
      <div className="hero-content flex-col grid gap-20 grid-cols-1 ">
        <div className=" w-full">
          {/* <img className="mx-auto" src={loginImg} alt="" /> */}
        </div>
        <div className="card shadow-2xl  h-full">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-thin text-center text-black">
              Signup now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Login"
              ></input>
            </div>
          </form>
          <p className="text-center text-black">
            Already registered?
            <Link
              href="/navigation/login"
              className="text-orange-700 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
