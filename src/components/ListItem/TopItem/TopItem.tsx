import { useActions } from "../../../hooks/redux";
import Button from "../../Button";
import styles from "./topItem.module.scss";
import { IReport, IReportsAndId, IUser } from "../../../types/types";
import { useState } from "react";
import RepresentingBloc from "../../RepresentingBlock/RepresentingBloc";

interface ITopItem {
  isOpenedBottomPart: boolean;
  toggleBottomPart: () => void;
  user: IUser | IReportsAndId;
  children: any;
}
const TopItem = ({
  isOpenedBottomPart,
  toggleBottomPart,
  user,
  children,
}: ITopItem) => {
  const { deleteUser } = useActions();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = user;

  return (
    <>
      <div className={styles.top}>
        <div>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
              toggleBottomPart();
            }}
          >
            {isOpen ? <>&#x25B2;</> : <>&#x25BC;</>}
          </Button>
          <span className={styles.content}>{children}</span>
        </div>

        <Button onClick={() => deleteUser(id)}>&#x2716;</Button>
      </div>
    </>
  );
};

export default TopItem;
