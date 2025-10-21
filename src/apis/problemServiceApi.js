
import { Problem_Service_Url } from '../config/index.js';
import { axiosInstance } from '../config/axiosinstance.js';

async function fetchProblemDetails(problemId){
    const getProblemUrl = `${Problem_Service_Url}/api/v1/problems/${problemId}`
    try {
        const response = await axiosInstance.get(getProblemUrl);
        return response.data;
    } catch (error) {
        console.log("something went wrong", error)
    }

}
export default fetchProblemDetails;