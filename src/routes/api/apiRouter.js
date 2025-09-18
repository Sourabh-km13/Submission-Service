import { pingRequest , createSubmission } from "../../controllers/submissionController.js"
export default async function apiRoutes(fastify, options) {
  await fastify.get('/hello', pingRequest)
  await fastify.post("/submit", createSubmission)
}
