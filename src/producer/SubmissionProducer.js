import SubmissionQueue from "../queues/SubmissionQueue";


export default async function SubmissionQueueProducer(
  payload
) {
  await SubmissionQueue.add("SubmissionJob", payload);
  console.log("successfully added new submission job");
}
