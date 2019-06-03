const express = require('express');
const app = express();
const routes = require('./src/interfaces/http/router'),
    router = express.Router()

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`we are listening on ${port}`));

routes(app);

app.use((err) => {
    console.log(err);
    res.status(500);
});