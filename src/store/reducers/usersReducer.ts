import {
  IAction,
  IUser,
  IUserState,
  USER,
  REPORT,
  IReportsAndId,
} from "../../types";

export const initialState: IUserState = {
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
        return user.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      if (action.payload) {
        return { users: [...searchedUsers] };
      }
      return state;

    case REPORT.ADD:
      const newReports = {
        id: action.payload.id,
        reports: [],
      };

      cloneState.users.forEach((el: IUser) => {
        if (el.id === action.payload.user_id) {
          el.reports.push(newReports);
        }
      });

      return cloneState;

    case REPORT.REMOVE:
      cloneState.users.forEach((el: IUser) => {
        if (el.id === action.payload.user_id) {
          el.reports = el.reports.filter(
            (el: IReportsAndId) => el.id !== action.payload.id
          );
        }
      });
      return cloneState;

    case REPORT.REMOVE_DATA:
      const { user_id, report_id, data_id } = action.payload;
      cloneState.users.forEach((el: IUser) => {
        if (el.id === user_id) {
          el.reports.forEach((report) => {
            if (report.id === report_id) {
              report.reports = report.reports.filter(
                (data) => data.id !== data_id
              );
            }
          });
        }
      });
      return cloneState;

    case REPORT.ADD_DATA:
      cloneState.users.forEach((el: IUser) => {
        if (el.id === action.payload.user_id) {
          el.reports.forEach((report) => {
            if (report.id === action.payload.report_id) {
              report.reports.push({
                id: Date.now(),
                name: action.payload.link,
              });
            }
          });
        }
      });
      return cloneState;

    default:
      return state;
  }
};
