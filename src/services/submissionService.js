import SubmissionQueueProducer from "../producer/SubmissionProducer"


class SubmissionService{
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository
    }
    async pingCheck () {
        return 'pong'
    }
    async addSubmission(data){
        const submission = this.submissionRepository.createSubmission(data)
        if(!submission){
            throw {"message":"not able to create submission"}
        }
        const response = SubmissionQueueProducer(data);
        return {queueResponse:response,submissiong}
    }
}
export default SubmissionService