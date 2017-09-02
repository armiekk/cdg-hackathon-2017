import Express from 'express';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

const port = process.env.GATEWAY_PORT || 8081;

const apiHost = process.env.API_HOST || 'api-service';
const appHost = process.env.APP_HOST || 'app-service';
const fsHost = process.env.FS_HOST || 'fs-service';


const app = Express();

app.use('/api/rentals', (req, res) => {
    proxy.web(req, res, { target: `http://${apiHost}:3000/api/rentals` });
});

app.use('/api/upload/images', (req, res) => {
    proxy.web(req, res, { target: `http://${fsHost}:5000/api/upload/images` });
});

app.use('/api/payment/slip', (req, res) => {
    proxy.web(req, res, { target: `http://${fsHost}:5000/api/payment/slip` });
});

app.use('/', (req, res) => {
    proxy.web(req, res, { target: `http://${appHost}:4200` });
});

app.listen(port, () => console.log(`app listen on port ${port}`));