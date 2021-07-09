const data = require('./routes/data');
const express = require('express');
const app = express();

app.use(express.json());
app.use(data);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));