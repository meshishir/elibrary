const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('🚀 eLibrary backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

