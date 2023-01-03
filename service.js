const Service = require('node-windows').Service
const { existsSync } = require('fs')

if (!existsSync(`${process.cwd()}/dist/index.js`)) process.exit(0)

const svc = new Service({
  name: 'Lock Sleep Service',
  description: 'Simple Lock Sleep Web-Server Service',
  script: `${process.cwd()}/dist/index.js`
})

if (svc.exists) {
  svc.uninstall()
  svc.on('uninstall', () => {
    console.log('Uninstall complete.')
  })
}

if (!process.argv[2] !== '--uninstall-only') {
  svc.install()
  svc.on('install', () => {
    svc.start()
    console.log('Install complete.')
  })
}
