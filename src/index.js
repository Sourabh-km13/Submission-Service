import Fastify from 'fastify'
const fastify = Fastify({ logger: true })
import { Port } from './config/index.js'
import app from './app.js'
import connectToDb from './config/dbConfig.js';

fastify.register(app)

const start = async () => {
  try {
    await fastify.listen({ port: Port, host: '0.0.0.0' })
    await connectToDb()
    console.log(`🚀 Server running at http://localhost:${Port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()