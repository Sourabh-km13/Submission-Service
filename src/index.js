import Fastify from 'fastify'
import { routes } from './routes/index.js'
const fastify = Fastify({ logger: true })
import { Port } from './config/index.js'

fastify.register(routes)
const start = async () => {
  try {
    await fastify.listen({ port: Port, host: '0.0.0.0' })
    console.log(`🚀 Server running at http://localhost:${Port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()