// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({});

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     devTools: true,
//   });
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];

//!
// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import { reportReducer } from "./reducers/reportsReducers";
// import { userReducer } from "./reducers/usersReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunk from "redux-thunk";

// const rootReducer = combineReducers({ userReducer, reportReducer });
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//!
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
