import { useActions } from "../../hooks/redux";
import { IReportsAndId } from "../../types";
import Button from "../Button";
import Image from "../Image";
import styles from "./graphicElement.module.scss";

const GraphicElement = ({
  elem,
  isOpen,
  userId,
}: {
  isOpen: boolean;
  elem: IReportsAndId;
  userId: number;
}) => {
  const { removeDataFromReports, addDataFromReports } = useActions();

  return (
    <div
      style={{
        display: `${isOpen ? "block" : "none"}`,
        position: "relative",
        minHeight: 50,
        marginBottom: 20,
      }}
    >
      <Button
        style={{
          position: "absolute",
          zIndex: "1",
          right: "20px",
          backgroundColor: "#dbe4e3",
        }}
        onClick={() => {
          const link = prompt();
          if (!link) {
            return;
          }

          addDataFromReports({
            report_id: elem.id,
            user_id: userId,
            link: link,
          });
        }}
      >
        Add data
      </Button>
      {elem.reports.length ? (
        <div className={styles.reports}>
          {elem.reports.map((report) => (
            <div key={report.id} className={styles.reports_item}>
              <Image report={report} />
              <Button
                onClick={() =>
                  removeDataFromReports({
                    data_id: report.id,
                    report_id: elem.id,
                    user_id: userId,
                  })
                }
                style={{ backgroundColor: "#dbe4e3" }}
              >
                x
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ color: "red" }}>This report hasn't have data yet.</h2>
      )}
    </div>
  );
};

export default GraphicElement;
