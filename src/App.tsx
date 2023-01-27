import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import classnames from 'classnames'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import routes, { IRoute } from "./routes";
import Sidebar from "./components/templates/Sidebar";
import useMediaQuery from "./hooks/useMediaQuery";
const App = () => {
  const reCaptchaKey = process.env.REACT_APP_GOOGLE_RECAPCHA_SITE_KEY;

  const mediaMatches = useMediaQuery({
    small: '(min-width: 599.99px) and (max-width: 959.99px)',
    medium: '(min-width: 960px) and (max-width: 1279.99px)',
    large: '(min-width: 1280px)',
  });

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

  const wrapperClass: string = classnames(
    `wrapper`,
    mediaMatches.isLarge ? 'large' : mediaMatches.isMedium ? 'medium' : 'small'
  );

  return (
    <GoogleReCaptchaProvider reCaptchaKey={ reCaptchaKey || '' } >
      <BrowserRouter>
        <div className={ wrapperClass }>
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
