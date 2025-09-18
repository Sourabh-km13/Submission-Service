import SubmissionQueueProducer from "../producer/SubmissionProducer.js"


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
        const response = await SubmissionQueueProducer(data);
        return {queueResponse:response,submission}
    }
}
export default SubmissionService