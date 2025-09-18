async function pingRequest(req ,res){
    console.log("Test Service",this.testService)
    const response = await this.testService.pingCheck();
    return res.send(response)
}
async function createSubmission(req , res){
    console.log("controller", req.body)
    const response = await this.testService.addSubmission(req.body)
    return res.send(response)
}
export {pingRequest,createSubmission}