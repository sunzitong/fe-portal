import express from 'express'
import HashMapping from '../../HashMapping.json'
import config from '../../config/index'

const {
  name: vendorsFilePath,
} = require('../../manifest.json')

const router = express.Router()
const INIT_STATE = {
  apiServer: config.api_server,
}

const RENDER_INDEX = userInfo => `<!doctype html>
    <html lang="zh-cn">
    <head>
        <title>Cybereits Whitelist</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="//cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="root" style="height: 100%"></div>
        <script>
          window.__INIT_STATE=${JSON.stringify(Object.assign({}, INIT_STATE, userInfo))}
        </script>
        <script src="/build/${vendorsFilePath}.min.js"></script>
        <script src="/static/${config.globals.__DEV__ ? 'main.js' : HashMapping.main}"></script>
    </body>
    </html>`

router.get(['/'], (req, res) => {
  res.send(RENDER_INDEX(INIT_STATE))
})

export default router
