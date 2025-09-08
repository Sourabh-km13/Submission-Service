import SubmissionService from "./submissionService.js";
import {fp} from 'fastify-plugin'

async function servicePlugin (fastify , options){
    fastify.decorate('testService',new SubmissionService(this.submissionRepository))
}
export default fp(servicePlugin);
