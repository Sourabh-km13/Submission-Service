import mongoose from "mongoose";
import config from "./index.js"

async function connectToDb(){
    try {
        await mongoose.connect(config.ATLAS_DB_URL)
    } catch (error) {
        console.log("unable to connect to server",error)
    }
}
export default connectToDb