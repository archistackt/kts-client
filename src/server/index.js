import express from 'express';
import path from 'path';

import page from './page';

const app = express();

app.use(express.static(path.join(__dirname, '../../', 'build')));

app.get('/', (req, res) => {
  const index = page.generate(req);
  res.end(index);
});

const server = app.listen(4000, () => {
  console.log('Listening on port %d', server.address().port);
});