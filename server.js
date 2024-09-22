// listening on port 5000

import app from '../backend/app.js';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
