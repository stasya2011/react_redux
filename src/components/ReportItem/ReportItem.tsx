import { useState } from "react";
import { useActions } from "../../hooks/redux";
import { IReportsAndId } from "../../types";
import Button from "../Button";
import GraphicElement from "../GraphicElement";
import styles from "./reportItem.module.scss";

const ReportItem = ({ elem, id }: { elem: IReportsAndId; id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { removeReports } = useActions();

  return (
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
  );
};

export default ReportItem;
