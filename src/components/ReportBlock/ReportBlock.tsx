import { useState } from "react";
import { useActions } from "../../hooks/redux";
import { IReportsAndId } from "../../types";
import Button from "../Button";
import GraphicElement from "../GraphicElement";
import styles from "./reportBlock.module.scss";

const ReportBlock = (props: { reports: IReportsAndId[]; id: number }) => {
  const { reports, id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { removeReports } = useActions();

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
              <span className={styles.content}>Reports #{elem.id}</span>
            </div>
            <Button onClick={() => removeReports({ id: elem.id, user_id: id })}>
              &#x2716;
            </Button>
          </div>
          <GraphicElement userId={id} elem={elem} isOpen={isOpen} />
        </>
      ))}
    </>
  );
};

export default ReportBlock;
