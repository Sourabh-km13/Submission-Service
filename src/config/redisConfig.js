import Redis from "ioredis";
import { Redis_Host, Redis_Port } from "./index.js";

const redisConfig = {
  port: Redis_Port,
  host: Redis_Host,
  maxRetriesPerRequest:null
};
const redisConnection = new Redis(redisConfig);

export default redisConnection;
