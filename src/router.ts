import { IncomingMessage, ServerResponse } from 'http'
import { lock } from './handlers/lock'
import { sleep } from './handlers/sleep'

const handlers = [lock, sleep]

export const router = (request: IncomingMessage, response: ServerResponse) => {
  const path = request.url.slice(1)
  const handler = handlers.find(item => item.name === path)

  if (handler) {
    handler.do()
  } else {
    response.statusCode = 404
  }

  response.end()
}
