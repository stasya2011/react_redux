import { Dispatch } from "redux";
import { IAddALLUsersAction, USER, REPORT } from "../../types";
import axios from "axios";

const url = "http://localhost:3500/users";

export const addAllUsers =
  () => async (dispatch: Dispatch<IAddALLUsersAction>) => {
    try {
      const response = await axios.get(url);
      dispatch({ type: USER.ADD_ALL, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

export const deleteUser = (id: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: USER.REMOVE, payload: id });
  } catch (e) {
    console.log(e);
  }
};

export const addUser = (content: string) => async (dispatch: Dispatch) => {
  try {
    const newUser = {
      id: Date.now(),
      name: content,
      reports: [],
    };
    await axios.post(url, newUser);
    dispatch({ type: USER.ADD, payload: newUser });
  } catch (e) {
    console.log(e);
  }
};

export const searchUser = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: USER.SEARCH, payload: query });
  } catch (e) {
    console.log(e);
  }
};

export const addReports =
  (content: { id: number; user_id: number }) => async (dispatch: Dispatch) => {
    try {
      // await axios.put(`${url}/${content.user_id/reports}`, {
      //   id: 11111,
      //   reports: [],
      // });
      dispatch({ type: REPORT.ADD, payload: content });
    } catch (e) {
      console.log(e);
    }
  };

export const removeReports =
  (content: { id: number; user_id: number }) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REPORT.REMOVE, payload: content });
    } catch (e) {
      console.log(e);
    }
  };

export const removeDataFromReports =
  (content: { data_id: number; report_id: number; user_id: number }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REPORT.REMOVE_DATA, payload: content });
    } catch (e) {
      console.log(e);
    }
  };

export const addDataFromReports =
  (content: { report_id: number; user_id: number; link: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REPORT.ADD_DATA, payload: content });
    } catch (e) {
      console.log(e);
    }
  };
