import Fastify from 'fastify'
import {fp} from 'fastify-plugin'
import v1Routes from './routes/v1.mjs'
import { routes } from './routes'
import repositoryPlugin from './repository/repositoryPlugin.js'
import servicePlugin from './services/servicePlugin.js'

const fastify = Fastify({ logger: true })

async function app(){
    fastify.register(repositoryPlugin)
    fastify.register(servicePlugin)
    fastify.register(routes) 
}

export default fp(app)

