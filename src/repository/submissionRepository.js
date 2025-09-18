import submission from "../models/submissionModel.js";

class SubmissionRepository{
    constructor(){
        this.submissionModel = submission
    }
    async createSubmission(submission){
        const response = await this.submissionModel.create(submission)
        console.log("added to model" , submission)
        return response;
    }
}
export default SubmissionRepository