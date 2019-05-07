'use strict'

const serve = require('browser-sync')
const proxy = require('http-proxy-middleware')
const bundler = require('./parcelBundler')

// browser sync settings
serve({
  port: 3000,
  open: true,
  files: [
    'src/**/*',
    {
      match: ['**/*.php']
    }
  ],
  reloadDelay: 3000,
  proxy: {
    target: 'sparkly-education.lndo.site',
    middleware: bundler.middleware()
  }
})
