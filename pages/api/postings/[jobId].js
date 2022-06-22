import jobs from '../../../data-stubs/jobs';

async function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default async function handler(req, res) {
  await resolveAfter2Seconds();

  res.status(200).json(jobs.jobs.find((job) => {
    return job.id === req.query.jobId;
  }));
}