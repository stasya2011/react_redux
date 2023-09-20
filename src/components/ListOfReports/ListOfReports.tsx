import { IReportsAndId } from "../../types";
import ReportItem from "../ReportItem";

const ListOfReports = (props: { reports: IReportsAndId[]; id: number }) => {
  const { reports, id } = props;

  return (
    <>
      {reports.map((elem) => (
        <ReportItem elem={elem} id={id}></ReportItem>
      ))}
    </>
  );
};

export default ListOfReports;
