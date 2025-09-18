import dotenv from 'dotenv'

dotenv.config()

const Port = process.env.Port || 3000;
const Redis_Port = parseInt( process.env.Redis_Port ||"6379" ,10);
const Redis_Host = process.env.Redis_Host || 'localhost';
const ATLAS_DB_URL = process.env.AtlasDbUrl
export { Port, Redis_Host, Redis_Port , ATLAS_DB_URL };
