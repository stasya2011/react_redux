import { useMediaQuery } from "@uidotdev/usehooks";
import Button from "../Button";
import classnames from "classnames";
import TopItem from "../ListItem/TopItem/TopItem";
import { useState } from "react";
import { IReport, IUser, IReportsAndId } from "../../types/types";
import styles from "./representingBlock.module.scss";

const RepresentingBloc = ({
  isOpenedBottomPart,
  user,
}: {
  isOpenedBottomPart: boolean;
  user: IUser;
}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 500px)");

  return (
    <div
      className={classnames(styles.bottom, {
        [styles.bottom_active]: isOpenedBottomPart,
      })}
    >
      <div className={styles.content}>
        <h3>
          Client #{user.id} - {user.name}
        </h3>
        <Button>{isSmallDevice ? <>&#43;</> : "Add report"}</Button>
      </div>
      {user.reports.length ? <ReportBlock reports={user.reports} /> : null}
    </div>
  );
};

export default RepresentingBloc;

const ReportBlock = ({ reports }: { reports: IReportsAndId[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {reports.map((elem) => (
        <>
          <div className={styles.top}>
            <div>
              <Button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? <>&#x25B2;</> : <>&#x25BC;</>}
              </Button>
              <span className={styles.content_R}>Reports #{elem.id}</span>
            </div>
            <Button onClick={() => console.log("++++")}>&#x2716;</Button>
          </div>
          <GraphicElement elem={elem} isOpen={isOpen} />
        </>
      ))}
    </>
  );
};

const GraphicElement = ({
  elem,
  isOpen,
}: {
  isOpen: boolean;
  elem: IReportsAndId;
}) => {
  return (
    <div style={{ display: `${isOpen ? "block" : "none"}` }}>
      {elem.reports.length && (
        <div className={styles.reports}>
          {elem.reports.map((report) => (
            <div key={report.id} className={styles.reports_item}>
              <img src={report.name} alt={`img-${report.id}`} width={200} />
              <Button>x</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
