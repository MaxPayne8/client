
import './App.css';
import { Outlet, createBrowserRouter } from "react-router-dom";
import ShowProd from './components/ShowProd';
import AddProd from './components/AddProd';
import UpdProd from './components/UpdProd';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ShowProd/>,
      },
      {
        path: "/add",
        element: <AddProd/>,
      },
      {
        path: "/update",
        element: <UpdProd/>,}
      ]}])

export default App;
