// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import asyncComponent from './components/AsyncComponent/Loadable';
import { Empty, Forbidden, NotFound, ServerError } from './pages/Exception';
import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

const UserLogin = asyncComponent(() => import('./pages/UserLogin'));
const UserRegister = asyncComponent(() => import('./pages/UserRegister'));
const Dashboard = asyncComponent(() => import('./pages/Dashboard'));
const Charts = asyncComponent(() => import('./pages/Charts'));
const BaiscCharts = asyncComponent(() => import('./pages/BaiscCharts'));
const Terms = asyncComponent(() => import('./pages/Terms'));
const Result = asyncComponent(() => import('./pages/Result'));
const BasicList = asyncComponent(() => import('./pages/BasicList'));
const ProjectList = asyncComponent(() => import('./pages/ProjectList'));
const BasicTable = asyncComponent(() => import('./pages/BasicTable'));
const GeneralTable = asyncComponent(() => import('./pages/GeneralTable'));
const Profile = asyncComponent(() => import('./pages/Profile'));
const Setting = asyncComponent(() => import('./pages/Setting'));
const Fail = asyncComponent(() => import('./pages/Fail'));

const routerConfig = [
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/chart/general',
    component: Charts,
  },
  {
    path: '/chart/basic',
    component: BaiscCharts,
  },
  {
    path: '/list/basic',
    component: BasicList,
  },
  {
    path: '/list/general',
    component: ProjectList,
  },
  {
    path: '/result/success',
    component: Result,
  },
  {
    path: '/result/fail',
    component: Fail,
  },
  {
    path: '/table/basic',
    component: BasicTable,
  },
  {
    path: '/profile/basic',
    component: Profile,
  },
  {
    path: '/profile/general',
    component: Terms,
  },
  {
    path: '/table/general',
    component: GeneralTable,
  },
  {
    path: '/account/setting',
    component: Setting,
  },
  {
    path: '/exception/500',
    component: ServerError,
  },
  {
    path: '/exception/403',
    component: Forbidden,
  },
  {
    path: '/exception/204',
    component: Empty,
  },
  {
    path: '/exception/404',
    component: NotFound,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
