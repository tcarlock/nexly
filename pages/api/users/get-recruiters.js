import recruiters from '../../../data-stubs/recruiters';

export default function handler(req, res) {
  res.status(200).json(recruiters.results);
}