import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5582;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});