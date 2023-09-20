import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <div>
      <img
        alt="error"
        style={{
          display: "block",
          width: "180px",
          height: "180px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
      />
    </div>
  );
};

export default ErrorMessage;
