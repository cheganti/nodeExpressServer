const express = require('express');
const app = express();
const routes = require('./src/interfaces/http/router'),
    router = express.Router();
app.use(express.json());

routes(app);

app.use((req, res, next) => {
    res.status(404).send('Incorrect API Endpoint!');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err.status
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`we are listening on ${port}`));