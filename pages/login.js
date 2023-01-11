import Link from "next/link";
import Router from "next/router";
import { useContext } from "react";
import { useToken } from "../AuthToken/UseToken";
import { AuthContext } from "../pages/context/Authprovider";

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
          useToken(res?.user?.email);
          form.reset();
          Router.back();
        }
      })
      .then((err) => {
        console.log(err?.message);
      });
  };
  return (
    <div className="hero my-5 min-h-[67.5vh]">
      <div className="hero-content max-w-[576px] flex-col grid grid-cols-1 mx-4">
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
            <Link href="/signup" className="text-cyan-400 font-bold">
              Signup
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

export default Login;
