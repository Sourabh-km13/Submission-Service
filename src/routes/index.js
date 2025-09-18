import apiRoutes from "./api/apiRouter.js"


export default async function routes (fastify, options){
    await fastify.register(apiRoutes,{prefix:'/api'})
}




