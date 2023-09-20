export interface IUserState {
  users: IUser[];
  error: boolean;
  loaded: boolean;
}

export interface IUser {
  id: number;
  name: string;
  reports: IReportsAndId[];
}

export interface IReportsAndId {
  id: number;
  reports: IReport[];
}

export interface IReport {
  id: number;
  name: string;
}

export enum USER {
  ADD = "ADD",
  REMOVE = "REMOVE",
  ADD_ALL = "ADD_ALL",
  SEARCH = "SEARCH",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export enum REPORT {
  ADD = "ADD_REPORT",
  REMOVE = "REMOVE_REPORT",
  ADD_DATA = "ADD_DATA",
  REMOVE_DATA = "REMOVE_DATA",
}

export interface IAddALLUsersAction {
  type: USER.ADD_ALL;
  payload: IUser[];
}

export interface IAddUserAction {
  type: USER.ADD;
  payload: IUser;
}

export interface IRemoveUserAction {
  type: USER.REMOVE;
  payload: number;
}
export interface ISearchUserAction {
  type: USER.SEARCH;
  payload: string;
}

export interface IFeachError {
  type: USER.ERROR;
  payload: boolean;
}

export interface IFeachLoading {
  type: USER.LOADING;
  payload: boolean;
}

export interface IAddReportAction {
  type: REPORT.ADD;
  payload: { id: number; user_id: number };
}

export interface IRemoveReportAction {
  type: REPORT.REMOVE;
  payload: { id: number; user_id: number };
}

export interface IRemoveDataAction {
  type: REPORT.REMOVE_DATA;
  payload: { data_id: number; report_id: number; user_id: number };
}

export interface IAddDataAction {
  type: REPORT.ADD_DATA;
  payload: { report_id: number; user_id: number; link: string };
}

export type IAction =
  | IAddALLUsersAction
  | IAddUserAction
  | IRemoveUserAction
  | ISearchUserAction
  | IAddReportAction
  | IRemoveReportAction
  | IRemoveDataAction
  | IAddDataAction
  | IFeachLoading
  | IFeachError;

export interface IListItem {
  id: number;
  content: string;
}
