import { pingRequest , createSubmission, getAllSubmissions } from "../../controllers/submissionController.js"
export default async function apiRoutes(fastify, options) {
  await fastify.get('/hello', pingRequest)
  await fastify.post("/submit", createSubmission)
  await fastify.get("/submit", getAllSubmissions)
}
