import fastifyPlugin from 'fastify-plugin';
import SubmissionRepository from './submissionRepository.js';

async function repositoryPlugin (fastify , options){
    await fastify.decorate('submissionRepository',new SubmissionRepository())
}
export default fastifyPlugin(repositoryPlugin);