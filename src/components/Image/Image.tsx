import { useState } from "react";
import { IReport } from "../../types";
import errorImg from "./Ghost.gif";

const Image = ({ report }: { report: IReport }) => {
  const [isImg, setIsImg] = useState(true);

  return (
    <img
      src={isImg ? report.name : errorImg}
      alt={`img-${report.id}`}
      height={100}
      onError={() => setIsImg(!isImg)}
    />
  );
};

export default Image;
