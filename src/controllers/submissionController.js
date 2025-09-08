async function pingRequest(req ,res){
    console.log(this.testService)
    const response = await this.testService.pingCheck();
    return res.send(response)
}
async function createSubmission(req , rej){
    const response = await this.testService.addSubmission
}