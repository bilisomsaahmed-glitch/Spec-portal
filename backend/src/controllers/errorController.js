export function notFound(req, res) {
  res.status(404).json({ message: `Route ${req.method} ${req.path} not found.` });
}

export function handleError(err, _req, res, _next) {
  console.error(err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: Object.values(err.errors).map(x => x.message).join(' ') });
  }
  if (err.code === 11000) return res.status(409).json({ message: 'That record already exists.' });
  res.status(500).json({ message: process.env.NODE_ENV === 'production' ? 'Something went wrong.' : 'Something went wrong. Please try again.' });
}
