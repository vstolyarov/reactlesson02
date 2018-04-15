const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
console.log(__dirname)
app.use('/imageFiles', express.static(__dirname + '/posters'));
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));