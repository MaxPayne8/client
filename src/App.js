
import './App.css';
import { Outlet, createBrowserRouter } from "react-router-dom";
import ShowProd from './components/ShowProd';
import AddProd from './components/AddProd';
import NavBar from './components/NavBar';
import DetailPage from './components/DetailPage';
import UpdateProd from './components/UpdateProd';

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
        path: "/update/:id",
        element: <UpdateProd/>},
        {
          path: "/details/:id",
          element: <DetailPage/>,}
      ]}])

export default App;
