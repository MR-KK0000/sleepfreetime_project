const express = require("express");
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        res.send('Hello world')
    } catch (error) {
        res.send('error')
    }
});

app.listen(port, () => console.log(`server run on port : ${port}`));


