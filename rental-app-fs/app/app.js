import Express from 'express';
import UploadRouter from './router/upload';
import DownloadRouter from './router/download';
import paymentRouter from './router/payment';

const app = Express();

app.use('/api/upload', UploadRouter);
app.use('/api/download', DownloadRouter);
app.use('/api/payment', paymentRouter);

app.listen(5000, () => console.log('App listen on port 5000'));