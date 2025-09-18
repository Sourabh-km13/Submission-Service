import Fastify from 'fastify'

import repositoryPlugin from './repository/repositoryPlugin.js'
import servicePlugin from './services/servicePlugin.js'
import routes from './routes/index.js'
import fastifyPlugin from 'fastify-plugin'




async function app(fastify , options){
    await fastify.register(routes) 
    await fastify.register(repositoryPlugin)
    await fastify.register(servicePlugin)
}

export default fastifyPlugin(app)

