import { useState } from "react";
import TopItem from "./TopItem/TopItem";
import styles from "./listItem.module.scss";
import RepresentingBloc from "../RepresentingBlock/RepresentingBloc";
import { IUser } from "../../types/types";

const ListItem = ({ user, index }: { user: IUser; index: number }) => {
  const [isOpenedBottomPart, setIsOpenedBottomPart] = useState(false);

  const toggleBottomPart = () => {
    setIsOpenedBottomPart(!isOpenedBottomPart);
  };

  return (
    <div className={styles.listItem}>
      <TopItem
        isOpenedBottomPart={isOpenedBottomPart}
        toggleBottomPart={toggleBottomPart}
        user={user}
      >
        <strong>{index + 1}.</strong> Client #{user.id} - {user.name}
      </TopItem>
      <RepresentingBloc isOpenedBottomPart={isOpenedBottomPart} user={user} />
    </div>
  );
};

export default ListItem;
