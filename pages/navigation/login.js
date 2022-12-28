import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        if (res?.user?.email) {
          form.reset();
        }
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero my-5 min-h-[67.5vh]">
      <div className="hero-content max-w-[576px] flex-col grid grid-cols-1 ">
        <div className="w-full"></div>
        <div className="card shadow-2xl  h-full">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-thin text-center text-black">
              Login now!
            </h1>
            <div className="form-control">
              <label className="label  pb-0">
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
              <label className="label  pb-0">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="******"
                className="input input-bordered text-black"
              />
              <label className="label  pb-0">
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
          <p className="text-center text-black mb-4">
            New to Yogalax? {}
            <Link href="/navigation/signup" className="text-cyan-400 font-bold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
