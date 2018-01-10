import { home as mainFilePath } from '../../HashMapping.json'
import { name as vendorsFilePath } from '../../manifest.json'
import config from '../../config/env'
import runtimeData from '../../config/runtime.json'

export default function (req, res) {

  let renderData = {
    title: 'Cybereits - Global block chain online real estate trading platform',
    main: config.globals.__DEV__ ? 'home.js' : mainFilePath,
    vendors: vendorsFilePath,
    apiServer: config.api_server,
    DEV: config.globals.__DEV__,
    runtimeData: runtimeData,
    whitelistDisabled: runtimeData.forceSaleEnded || (Date.now() > new Date(runtimeData.whitelistEndedFormatTime)),
    saleEnded: runtimeData.forceSaleEnded || (Date.now() >= new Date(runtimeData.saleEndFormatTime)),
  }

  res.set('content-type', 'text/html')
  res.render('home', renderData)
}
