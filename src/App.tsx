import Form from "./components/Form/Form";
import List from "./components/List";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Form />
      <hr style={{ margin: "20px" }} />
      <List />
    </div>
  );
}

// //!
// import {
//   addAction,
//   deleteAction,
//   addManyAction,
// } from "./store/reducers/reportsReducers";
// import { AnyAction } from "redux";
// const App = () => {
//   const dispatch = useDispatch();
//   const cash = useSelector(
//     (state: {
//       userReducer: {
//         cash: string;
//       };
//     }) => state.userReducer.cash
//   );

//   const reports = useSelector(
//     (state: { reportReducer: { rep: IReport[] } }) => state.reportReducer.rep
//   );

//   useEffect(() => {
//     console.log("+++", reports);
//   }, [reports]);
//   useEffect(() => console.log(reports));

//   const dec = () => dispatch({ type: "DEC" });
//   const inc = () => dispatch({ type: "INC" });
//   const rnd = () => {
//     const rndValue = Math.floor(Math.random() * 10);
//     console.log(rndValue);
//     return dispatch({ type: "RND", payload: rndValue });
//   };

//   const addReports = () => {
//     const user = {
//       link: "0000",
//       id: Date.now(),
//     };
//     return dispatch(addAction(user));
//   };

//   const removeReports = (index: number) => {
//     return dispatch(deleteAction(index));
//   };

//   const fetchReports = (dispatch: any) => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => dispatch(addManyAction(json)));
//   };

//   return (
//     <div>
//       <h2>{cash}</h2>
//       <button onClick={inc}>INC</button>
//       <button onClick={dec}>DEC</button>
//       <button onClick={rnd}>RND</button>
//       <div style={{ border: "1px solid red", marginTop: 20 }}>
//         <input type="text" />
//         <button onClick={addReports}>Add</button>
//         <button onClick={() => fetchReports(dispatch)}>Add Many users</button>
//         {reports.length ? (
//           reports.map((report: any) => {
//             return (
//               <div>
//                 <h2>{report.name}</h2>

//                 <button onClick={() => removeReports(report.id)}>Remove</button>
//               </div>
//             );
//           })
//         ) : (
//           <div>
//             <h3>Empty...</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h2>Hello</h2>
//     </div>
//   );
// };

export default App;
