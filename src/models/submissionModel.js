import mongoose from "mongoose";
const submissionSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"User id for submission is missing"]
    },
    problemId:{
        type:String,
        required:[true,"Problem id for submission is missing"]
    },
    code:{
        type:String,
        required:[true,"Code for submission is missing"]
    },
    language:{
        type:String,
        required:[true,"Problem id for submission is missing"]
    },
    status:{
        type: String,  
        enum:["pending","success","RE","TLE","MLE"],
        default:"pending",
    }
})
export const submission = mongoose.model('Submission',submissionSchema)


