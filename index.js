const express = require('express');
const app = express();
const routes = require('./src/interfaces/http/router'),
    router = express.Router()

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`we are listening on ${port}`));
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err.message);
    res.status(500);
});
routes(app);