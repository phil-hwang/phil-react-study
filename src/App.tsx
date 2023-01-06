import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes , Route, useNavigate } from "react-router-dom";
import routes, { IRoute, PAGE_KEYS, findRouteByKey } from "./routes";

const App = () => {
  /*const navigate = useNavigate();

  const goPage = (pageKey: PAGE_KEYS) => {
    const findRoute = findRouteByKey(pageKey);
    if(findRoute) {
      navigate(findRoute.path);
    }else {
      //TODO :: notFoundPage Move
      navigate("/");
    }
  };*/

  const getRoutes = (routes: IRoute[]) => {
    return routes.map((prop, key) => {
      return (
        <Route
          key={key}
          path={prop.path}
          element={ prop.element }
        />
      )
    });
  };


  return (
    <BrowserRouter>
      <Routes>
        { getRoutes(routes) }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
