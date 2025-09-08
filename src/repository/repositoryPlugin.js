import {fp} from 'fastify-plugin'
import SubmissionRepository from './submissionRepository.js';

async function repositoryPlugin (fastify , options){
    fastify.decorate('submissionRepository',new SubmissionRepository())
}
export default fp(repositoryPlugin);
 