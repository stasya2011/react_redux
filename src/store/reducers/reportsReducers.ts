// import { IAction, IReport } from "../../types/types";

// const defaultState = {
//   rep: [],
// };

// const ADD_MANY_USERS = "ADD_MANY_USERS";
// const ADD = "ADD";
// const DELETE = "DELETE";

// export const reportReducer = (
//   state: { rep: IReport[] } = defaultState,
//   action: IAction
// ) => {
//   switch (action.type) {
//     case ADD_MANY_USERS:
//       return { ...state, rep: [...state.rep, ...action.payload] };
//     case ADD:
//       return { ...state, rep: [...state.rep, action.payload] };
//     case DELETE: {
//       const newState = structuredClone(state);
//       if (typeof action.payload === "number") {
//         return {
//           ...newState,
//           rep: newState.rep.filter(
//             (elem: IReport) => elem.id !== action.payload
//           ),
//         };
//       }

//       return state;
//     }
//     default:
//       return state;
//   }
// };

// export const addAction = (payload: IReport) => ({ type: ADD, payload });
// export const deleteAction = (payload: number) => ({
//   type: DELETE,
//   payload,
// });
// export const addManyAction = (payload: any[]) => ({
//   type: ADD_MANY_USERS,
//   payload,
// });

export const a = 0;
