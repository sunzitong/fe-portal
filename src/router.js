import React from 'react'
import { routerRedux, Route, Switch } from 'dva/router'
import { LocaleProvider, Spin } from 'antd'
// import zhCN from 'antd/lib/locale-provider/zh_CN'
// import dynamic from 'dva/dynamic'
// import { getRouterData } from './common/router'
// import Authorized from './utils/Authorized'
// import styles from './index.less'

const { ConnectedRouter } = routerRedux
// const { AuthorizedRoute } = Authorized
// dynamic.setDefaultLoadingComponent(() => {
//   return <Spin size="large" className={styles.globalSpin} />
// })

function RouterConfig({ history, app }) {
  // const routerData = getRouterData(app);
  // console.log(routerData);
  // const UserLayout = routerData['/entry'].component;
  // const BasicLayout = routerData['/'].component;
  return (
    <LocaleProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={UserLayout} />
          {/* <AuthorizedRoute
            path="/"
            // render={props => <BasicLayout {...props} />}
            render={props => {
              console.log('debug', props)
              return <BasicLayout {...props} />
            }}
            authority={['superAdmin', 'admin']}
            redirectPath="/entry/login"
          /> */}
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  )
}

export default RouterConfig

