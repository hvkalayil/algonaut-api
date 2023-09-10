const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({message:'Hello World'})
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

