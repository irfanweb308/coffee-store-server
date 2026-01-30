const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coffee server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});