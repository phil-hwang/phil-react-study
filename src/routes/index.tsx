import { FC } from "react";
import { Login, Dashboard, MemberRegister } from "../pages";


export interface IRoute {
  key: number,
  path: string,
  title: string,
  icon: string,
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
    icon: '',
    layout: '',
    title: ''
  },
  {
    key: PAGE_KEYS.LOGIN,
    path: '/login',
    element: <Login/>,
    icon: '',
    layout: '',
    title: ''
  },
  {
    key: PAGE_KEYS.MEMBER_REGISTER,
    path: '/member-register',
    element: <MemberRegister/>,
    icon: '',
    layout: '',
    title: ''
  },
  {
    key: PAGE_KEYS.DASHBOARD,
    path: '/dashboard',
    element: <Dashboard/>,
    icon: '',
    layout: '',
    title: ''
  }
];



export default routes;