import { BallTriangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#E2B9D4"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
