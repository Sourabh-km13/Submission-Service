import SubmissionService from "./submissionService.js";
import fp from 'fastify-plugin'

async function servicePlugin (fastify , options){
    await fastify.decorate('testService',new SubmissionService(fastify.submissionRepository))
}
export default fp(servicePlugin);
