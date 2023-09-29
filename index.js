const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.json({
        'message':'hi'
    })
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
