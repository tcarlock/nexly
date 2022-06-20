import jobs from '../../../data-stubs/jobs';

export default function handler(req, res) {
  res.status(200).json(jobs);
}