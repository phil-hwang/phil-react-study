import { faHome, faPowerOff, faUser, faLineChart, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Login, Dashboard, MemberRegister } from "../pages";


export interface IRoute {
  key: number,
  path: string,
  title: string,
  icon: IconDefinition,
  element: any,
  layout: any,
};

export enum PAGE_KEYS {
  LOGIN, MEMBER_REGISTER, DASHBOARD
}

export const findRouteByKey = (key: PAGE_KEYS) => {
  return routes.find(route => route.key === key);
}

const routes: IRoute[] = [
  {
    key: PAGE_KEYS.LOGIN,
    path: '/',
    element: <Login/>,
    icon: faHome,
    layout: '',
    title: 'Home'
  },
  {
    key: PAGE_KEYS.LOGIN,
    path: '/login',
    element: <Login/>,
    icon: faPowerOff,
    layout: '',
    title: 'Login'
  },
  {
    key: PAGE_KEYS.MEMBER_REGISTER,
    path: '/member-register',
    element: <MemberRegister/>,
    icon: faUser,
    layout: '',
    title: 'MemberRegister'
  },
  {
    key: PAGE_KEYS.DASHBOARD,
    path: '/dashboard',
    element: <Dashboard/>,
    icon: faLineChart,
    layout: '',
    title: 'Dashboard'
  }
];



export default routes;