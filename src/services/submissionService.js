import SubmissionQueueProducer from "../producer/SubmissionProducer.js"
import fetchProblemDetails from '../apis/problemServiceApi.js';


class SubmissionService{
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository
    }
    async pingCheck () {
        return 'pong'
    }
    async addSubmission(data){
        const submission = await this.submissionRepository.createSubmission(data)
        if(!submission){
            throw {"message":"not able to create submission"}
        }
        const problemServiceResponse = await fetchProblemDetails(data.problemId);

        if(!problemServiceResponse){
            throw {"message":"not able to create submission"}
        }
        const languageCodeStubs = problemServiceResponse.data.codeStubs.
        find(codeStub => codeStub.language.toLowerCase() === data.language.toLowerCase());


        console.log("codeStubs:",languageCodeStubs );
        data.code = `
            ${languageCodeStubs.startSnippet}
            ${data.code}
            ${languageCodeStubs.endSnippet}
        `
        const response = await SubmissionQueueProducer(data);
        return {queueResponse:response,submission}
    }
    async getAllSubmissions(){
        const submissions = await this.submissionRepository.getAllSubmissions();
        if(!submissions || submissions.length === 0){
            return {"msg":"no submissions made"};
        }
        return submissions;
    }
}
export default SubmissionService