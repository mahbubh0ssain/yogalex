import Link from "next/link";
import { useContext } from "react";
import Router, { useRouter } from "next/router";
import { AuthContext } from "../context/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const router = useRouter();
  const { createUser, updateUserProfile, logInWithGoogle } =
    useContext(AuthContext);
  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
      formData
    );
    const imgUrl = await res?.data?.data?.url;
    const user = { name, imgUrl };

    createUser(email, password)
      .then(() => {
        axios
          .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${email}`, user)
          .then((res) => {
            if (res.data.result.acknowledged) {
              updateUserProfile({ displayName: name, photoURL: imgUrl })
                .then(() => {})
                .catch(() => {});
              localStorage.setItem("token", res?.data?.token);
              router.push("/");
              Swal.fire("Signup successful");
            }
          });
      })
      .catch((err) => {
        Swal.fire(err?.message);
      });
  };

  const continueWithGoogle = () => {
    logInWithGoogle()
      .then((res) => {
        if (res?.user?.email) {
          axios
            .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${email}`)
            .then((res) => {
              if (res.data.result.acknowledged) {
                localStorage.setItem("token", res?.data?.token);
                Swal.fire("Signup successful");
                Router.back();
              }
            });
        }
      })
      .catch((err) => {
        Swal.fire(err?.message);
      });
  };
  return (
    <div className="hero my-5 min-h-[67.5vh]">
      <div className="flex-col grid gap-20 grid-cols-1 max-w-[576px] mx-4">
        <div className="card shadow-2xl h-full">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-thin text-center text-black">
              Signup !
            </h1>
            <div className="form-control">
              <label className="label  pb-0">
                <span className="label-text">Image</span>
              </label>
              <input
                required
                type="file"
                name="image"
                accept="image/*"
                placeholder="example@gmail.com"
                className="file-input file-input-bordered file-input-md w-full"
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control">
              <label className="label pb-0">
                <span className="label-text">Email</span>
              </label>
              <input
                required
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
                required
                type="password"
                name="password"
                placeholder="*****"
                className="input input-bordered text-black"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#E2B9D4] border-0"
                value="Signup"
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
              <div
                onClick={continueWithGoogle}
                className="btn bg-[#E2B9D4] border-0 mb-5"
              >
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
