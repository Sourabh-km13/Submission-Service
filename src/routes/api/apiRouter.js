export default async function apiRoutes(fastify, options) {
  fastify.get('/hello', async () => {
    return { message: 'Hello from API ' }
  })

}
