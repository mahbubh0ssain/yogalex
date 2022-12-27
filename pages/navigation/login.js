import Link from "next/link";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="hero my-5">
      <div className="hero-content flex-col grid gap-20 grid-cols-1 ">
        <div className=" w-full">
          {/* <img className="mx-auto" src={loginImg} alt="" /> */}
        </div>
        <div className="card shadow-2xl  h-full">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-thin text-center text-black">
              Login now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
                className="input input-bordered"
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
            New to Genius Car?
            <Link
              href="/navigation/signup"
              className="text-orange-700 font-bold"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
