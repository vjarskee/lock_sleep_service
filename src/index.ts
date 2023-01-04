import { createServer } from 'http'

import { router } from './router'

const server = createServer(router)

server.listen(65000)
