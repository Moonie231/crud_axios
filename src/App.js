
import './App.css';
import {Demo} from "./demo";
import FComponent from "./FComponent";
import Axios from "./axios";
import Create from "./Create";
import {Link, Route, Routes} from "react-router-dom";
import Edit from "./edit";


function App() {
  return (
      <>
          <Link to={'/create-student'}><h2>Add</h2></Link>
          <Routes>
              <Route path = {'/'} element = {<Axios></Axios>}></Route>
              <Route path = {'/create-student'} element = {<Create></Create>}>Add</Route>
              <Route path = {'/edit-student/:id'} element = {<Edit></Edit>}>Add</Route>
          </Routes>

      </>

  );
}

export default App;
