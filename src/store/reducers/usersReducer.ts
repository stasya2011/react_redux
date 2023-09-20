import { IAction, IUser, IUserState, USER } from "../../types/types";

const initialState: IUserState = {
  users: [],
};

export const userReducer = (
  state: IUserState = initialState,
  action: IAction
): IUserState => {
  const cloneState = structuredClone(state);

  switch (action.type) {
    case USER.ADD:
      return { users: [...cloneState.users, action.payload] };

    case USER.ADD_ALL:
      return { users: [...action.payload] };

    case USER.REMOVE:
      const updateUsers = cloneState.users.filter(
        (user: IUser) => user.id !== action.payload
      );
      return { users: [...updateUsers] };

    case USER.SEARCH:
      const searchedUsers = cloneState.users.filter((user: IUser) => {
        return user.name.includes(action.payload);
      });
      if (action.payload) {
        return { users: [...searchedUsers] };
      }

      return state;

    default:
      return state;
  }
};

//!
// const defaultState = {
//   cash: 0,
// };

// export const userReducer = (
//   state: { cash: number } = defaultState,
//   action: IAction
// ) => {
//   switch (action.type) {
//     case "INC":
//       return { ...state, cash: state.cash + 1 };
//     case "DEC":
//       return { ...state, cash: state.cash - 1 };
//     case "RND": {
//       return action.payload && typeof action.payload === "number"
//         ? { ...state, cash: state.cash * action.payload }
//         : state;
//     }
//     default:
//       return state;
//   }
// };
