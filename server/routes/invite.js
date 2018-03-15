import { home as mainFilePath } from '../../HashMapping.json'
import config from '../../config/env'

export default function (req, res) {

  let renderData = {
    title: '活动邀请',
    main: config.globals.__DEV__ ? 'invite.js' : mainFilePath,
    apiServer: config.api_server,
    DEV: config.globals.__DEV__,
    dataService: config.data_service,
  }

  res.set('content-type', 'text/html')
  res.render('invite', renderData)
}
