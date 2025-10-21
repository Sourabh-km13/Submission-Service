import SubmissionQueue from "../queues/SubmissionQueue.js";


export default async function SubmissionQueueProducer(
  payload
) {
  console.log("Producer payload:", payload);
  
  await SubmissionQueue.add("SubmissionJob", payload);
  console.log("successfully added new submission job");
}
