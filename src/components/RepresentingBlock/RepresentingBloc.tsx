import { useMediaQuery } from "@uidotdev/usehooks";
import { useActions } from "../../hooks/redux";
import { IUser } from "../../types";
import Button from "../Button";
import ReportBlock from "../ReportBlock";
import styles from "./representingBlock.module.scss";
import classnames from "classnames";

const RepresentingBloc = ({
  isOpenedBottomPart,
  user,
}: {
  isOpenedBottomPart: boolean;
  user: IUser;
}) => {
  const { addReports } = useActions();
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
        <Button
          onClick={() => {
            addReports({ id: Date.now(), user_id: user.id });
          }}
        >
          {isSmallDevice ? <>&#43;</> : "Add report"}
        </Button>
      </div>
      {user.reports.length ? <ReportBlock {...user} /> : null}
    </div>
  );
};

export default RepresentingBloc;
