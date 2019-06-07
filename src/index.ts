import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Server ready: ' + JSON.stringify(server.address()));
});

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('---- CALL TO GET ----');
    console.log('URL: ' + req.originalUrl);
    console.log('BODY :' + JSON.stringify(req.body));
    res.json(req.body);
});

app.post('/', (req: express.Request, res: express.Response) => {
    console.log('---- CALL TO POST ----');
    console.log('URL: ' + req.originalUrl);
    console.log('BODY :' + JSON.stringify(req.body));
    res.json(req.body);
});

app.put('/', (req: express.Request, res: express.Response) => {
    console.log('---- CALL TO PUT ----');
    console.log('URL: ' + req.originalUrl);
    console.log('BODY :' + JSON.stringify(req.body));
    res.json(req.body);
});

app.delete('/', (req: express.Request, res: express.Response) => {
    console.log('---- CALL TO DELETE ----');
    console.log('URL: ' + req.originalUrl);
    console.log('BODY :' + JSON.stringify(req.body));
    res.json(req.body);
});
