import { whitelist as mainFilePath } from '../../HashMapping.json'
import { name as vendorsFilePath } from '../../manifest.json'
import config from '../../config/index'

export default function (req, res) {

  let renderData = {
    title: 'Cybereits - Whitelist',
    main: config.globals.__DEV__ ? 'whitelist.js' : mainFilePath,
    vendors: vendorsFilePath,
    apiServer: config.api_server,
  }

  res.set('content-type', 'text/html')
  res.render('whitelist', renderData)
}
