import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import routes, { IRoute } from "./routes";
import Sidebar from "./components/templates/Sidebar";
const App = () => {
  const reCaptchaKey = process.env.REACT_APP_GOOGLE_RECAPCHA_SITE_KEY;

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
    <GoogleReCaptchaProvider reCaptchaKey={ reCaptchaKey || '' } >
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar/>
          <div className="main-panel">
            <Routes>
              { getRoutes(routes) }
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  );
}

export default App;
