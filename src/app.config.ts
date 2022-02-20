export default defineAppConfig({
  pages: [
    'pages/login/login',
    'pages/index/index',
    'pages/department/department',
    'pages/employee/employee',
    'pages/mine/mine',
    'pages/newRecord/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页',
  //     },
  //     {
  //       pagePath: 'pages/mine/index',
  //       text: '我的',
  //     },
  //   ],
  // },
})
