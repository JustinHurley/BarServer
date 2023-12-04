const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/', (req, res) => {
  const { message } = req;
  console.log('Received request with message:', message);
  res.send({ request: message }); 
});