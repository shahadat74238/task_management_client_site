import error from "../../assets/error.svg";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <img className="h-full w-full" src={error} alt="Loading Image" />
      </div>
    </div>
  );
};

export default ErrorPage;
