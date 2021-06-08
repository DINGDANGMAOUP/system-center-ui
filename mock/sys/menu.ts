import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
// const dashboardRoute = {
//   path: '/dashboard',
//   name: 'Welcome',
//   component: '/dashboard/analysis/index',
//   meta: {
//     title: 'routes.dashboard.analysis',
//     affix: true,
//     icon: 'bx:bx-home',
//   },
// };

const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/analysis',
  meta: {
    icon: 'ion:grid-outline',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        affix: true,
        title: 'routes.dashboard.analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
  ],
};
const centerRoute = {
  path: '/center',
  name: 'Center',
  component: 'LAYOUT',
  redirect: '/center/generator',
  meta: {
    title: 'routes.center.center',
    icon: 'file-icons:service-fabric',
  },
  children: [
    {
      path: 'generator',
      name: 'Generator',
      component: '/center/generator/index',
      meta: {
        title: 'routes.center.generator',
      },
    },
  ],
};
const backRoute = {
  path: 'back',
  name: 'PermissionBackDemo',
  meta: {
    title: 'routes.demo.permission.back',
  },
  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: 'routes.demo.permission.backPage',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: 'routes.demo.permission.backBtn',
      },
    },
  ],
};

const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [backRoute],
};

const levelRoute = {
  path: '/level',
  name: 'Level',
  component: 'LAYOUT',
  redirect: '/level/menu1/menu1-1',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      meta: {
        title: 'Menu1',
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          meta: {
            title: 'Menu1-1',
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
      },
    },
  ],
};

const sysRoute = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: 'routes.demo.system.moduleName',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: 'routes.demo.system.account',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/account/index',
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: 'routes.demo.system.role',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/role/index',
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: 'routes.demo.system.menu',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/menu/index',
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: 'routes.demo.system.dept',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/dept/index',
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: 'routes.demo.system.password',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/password/index',
    },
  ],
};

const iframe = {
  path: '/frame',
  name: 'Frame',
  component: 'LAYOUT',
  redirect: '/frame/doc',
  meta: {
    icon: 'ion:tv-outline',
    title: 'routes.demo.iframe.frame',
  },
  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: '/sys/iframe/index',
      meta: {
        frameSrc:
          'https://bi.yinlu.com/reports/mobilereport/201%20%E6%8A%80%E6%9C%AF%E4%BB%93%E5%BA%93%E5%88%86%E6%9E%90/%E9%85%8D%E4%BB%B6%E5%BA%93%E5%AD%98%E5%91%86%E6%BB%9E%E5%88%86%E6%9E%90?rs:Embed=true',
        title: 'routes.demo.iframe.doc',
      },
    },
    {
      path: 'antv',
      name: 'Antv',
      component: '/sys/iframe/index',
      meta: {
        frameSrc: 'https://2x.antdv.com/docs/vue/introduce-cn/',
        title: 'routes.demo.iframe.antv',
      },
    },
    {
      path: 'https://vvbin.cn/doc-next/',
      name: 'DocExternal',
      component: '/sys/iframe/index',
      meta: {
        title: 'routes.demo.iframe.docExternal',
      },
    },
  ],
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      if (!id || id === '1') {
        return resultSuccess([
          dashboardRoute,
          centerRoute,
          authRoute,
          levelRoute,
          sysRoute,
          iframe,
        ]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, centerRoute, authRoute, levelRoute, iframe]);
      }
    },
  },
] as MockMethod[];
