import { useEffect } from "react";
import ListItem from "../ListItem";
import { useActions, useTypeSelector } from "../../hooks/redux";

const List = () => {
  const users = useTypeSelector((state) => state.userReducer.users);
  const { addAllUsers } = useActions();

  useEffect(() => {
    addAllUsers();
  }, []);

  return (
    <div>
      {users.length ? (
        users.map((user, index) => {
          return <ListItem key={user.id} user={user} index={index} />;
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>You don't have any users.</h2>
      )}
    </div>
  );
};

export default List;
