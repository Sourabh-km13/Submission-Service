import apiRoutes from "./api/apiRouter.js"


export async function routes (fastify, options){
    fastify.register(apiRoutes,{prefix:'/api'})
    fastify.get('/',async (request, reply) => {
    return { message: 'Hello from API v1 (ESM)' }
  })
}
