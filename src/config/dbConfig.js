import mongoose from "mongoose";
import { ATLAS_DB_URL } from "./index.js";


async function connectToDb(){
    try {
        await mongoose.connect(ATLAS_DB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("unable to connect to server",error)
    }
}
export default connectToDb